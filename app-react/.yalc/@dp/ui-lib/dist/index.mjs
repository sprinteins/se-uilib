function noop() { }
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || ((a && typeof a === 'object') || typeof a === 'function');
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function element(name) {
    return document.createElement(name);
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return () => node.removeEventListener(event, handler, options);
}
function attr(node, attribute, value) {
    if (value == null)
        node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value)
        node.setAttribute(attribute, value);
}
function children(element) {
    return Array.from(element.childNodes);
}
function toggle_class(element, name, toggle) {
    element.classList[toggle ? 'add' : 'remove'](name);
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes) {
        result[attribute.name] = attribute.value;
    }
    return result;
}

let current_component;
function set_current_component(component) {
    current_component = component;
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) {
        callbacks.slice().forEach(fn => fn(event));
    }
}

const dirty_components = [];
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
let flushing = false;
const seen_callbacks = new Set();
function flush() {
    if (flushing)
        return;
    flushing = true;
    do {
        // first, call beforeUpdate functions
        // and update components
        for (let i = 0; i < dirty_components.length; i += 1) {
            const component = dirty_components[i];
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        while (binding_callbacks.length)
            binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for (let i = 0; i < render_callbacks.length; i += 1) {
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    } while (dirty_components.length);
    while (flush_callbacks.length) {
        flush_callbacks.pop()();
    }
    update_scheduled = false;
    flushing = false;
    seen_callbacks.clear();
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [-1];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
const outroing = new Set();
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function mount_component(component, target, anchor, customElement) {
    const { fragment, on_mount, on_destroy, after_update } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) {
        // onMount happens before the initial afterUpdate
        add_render_callback(() => {
            const new_on_destroy = on_mount.map(run).filter(is_function);
            if (on_destroy) {
                on_destroy.push(...new_on_destroy);
            }
            else {
                // Edge case - component was destroyed immediately,
                // most likely as a result of a binding initialising
                run_all(new_on_destroy);
            }
            component.$$.on_mount = [];
        });
    }
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[(i / 31) | 0] |= (1 << (i % 31));
}
function init(component, options, instance, create_fragment, not_equal, props, dirty = [-1]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(parent_component ? parent_component.$$.context : options.context || []),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false
    };
    let ready = false;
    $$.ctx = instance
        ? instance(component, options.props || {}, (i, ret, ...rest) => {
            const value = rest.length ? rest[0] : ret;
            if ($$.ctx && not_equal($$.ctx[i], $$.ctx[i] = value)) {
                if (!$$.skip_bound && $$.bound[i])
                    $$.bound[i](value);
                if (ready)
                    make_dirty(component, i);
            }
            return ret;
        })
        : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        }
        else {
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.c();
        }
        if (options.intro)
            transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') {
    SvelteElement = class extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({ mode: 'open' });
        }
        connectedCallback() {
            const { on_mount } = this.$$;
            this.$$.on_disconnect = on_mount.map(run).filter(is_function);
            // @ts-ignore todo: improve typings
            for (const key in this.$$.slotted) {
                // @ts-ignore todo: improve typings
                this.appendChild(this.$$.slotted[key]);
            }
        }
        attributeChangedCallback(attr, _oldValue, newValue) {
            this[attr] = newValue;
        }
        disconnectedCallback() {
            run_all(this.$$.on_disconnect);
        }
        $destroy() {
            destroy_component(this, 1);
            this.$destroy = noop;
        }
        $on(type, callback) {
            // TODO should this delegate to addEventListener?
            const callbacks = (this.$$.callbacks[type] || (this.$$.callbacks[type] = []));
            callbacks.push(callback);
            return () => {
                const index = callbacks.indexOf(callback);
                if (index !== -1)
                    callbacks.splice(index, 1);
            };
        }
        $set($$props) {
            if (this.$$set && !is_empty($$props)) {
                this.$$.skip_bound = true;
                this.$$set($$props);
                this.$$.skip_bound = false;
            }
        }
    };
}

/* src/components/dpdhl-button/dpdhl-button.svelte generated by Svelte v3.37.0 */

function create_fragment$2(ctx) {
	let button;
	let mounted;
	let dispose;

	return {
		c() {
			button = element("button");
			button.innerHTML = `<slot></slot>`;
			this.c = noop;
			toggle_class(button, "primary", /*primary*/ ctx[0]);
			toggle_class(button, "tiny", /*size*/ ctx[1] === /*Size*/ ctx[2].Tiny);
			toggle_class(button, "small", /*size*/ ctx[1] === /*Size*/ ctx[2].Small);
			toggle_class(button, "medium", /*size*/ ctx[1] === /*Size*/ ctx[2].Medium);
			toggle_class(button, "large", /*size*/ ctx[1] === /*Size*/ ctx[2].Large);
		},
		m(target, anchor) {
			insert(target, button, anchor);

			if (!mounted) {
				dispose = listen(button, "click", /*click_handler*/ ctx[3]);
				mounted = true;
			}
		},
		p(ctx, [dirty]) {
			if (dirty & /*primary*/ 1) {
				toggle_class(button, "primary", /*primary*/ ctx[0]);
			}

			if (dirty & /*size, Size*/ 6) {
				toggle_class(button, "tiny", /*size*/ ctx[1] === /*Size*/ ctx[2].Tiny);
			}

			if (dirty & /*size, Size*/ 6) {
				toggle_class(button, "small", /*size*/ ctx[1] === /*Size*/ ctx[2].Small);
			}

			if (dirty & /*size, Size*/ 6) {
				toggle_class(button, "medium", /*size*/ ctx[1] === /*Size*/ ctx[2].Medium);
			}

			if (dirty & /*size, Size*/ 6) {
				toggle_class(button, "large", /*size*/ ctx[1] === /*Size*/ ctx[2].Large);
			}
		},
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(button);
			mounted = false;
			dispose();
		}
	};
}

function instance($$self, $$props, $$invalidate) {
	let { primary = false } = $$props;

	//#region Size
	const Size = {
		Tiny: "tiny",
		Small: "small",
		Normal: "normal",
		Medium: "medium",
		Large: "large"
	};

	let { size = Size.Normal } = $$props;

	function click_handler(event) {
		bubble($$self, event);
	}

	$$self.$$set = $$props => {
		if ("primary" in $$props) $$invalidate(0, primary = $$props.primary);
		if ("size" in $$props) $$invalidate(1, size = $$props.size);
	};

	return [primary, size, Size, click_handler];
}

class Dpdhl_button extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>button{--button-color:var(--color-primary);color:var(--button-color);background-color:var(--color-secondary);border:var(--color-primary) solid thin;border-radius:var(--button-border-radius);padding:calc( var(--unit) * 0.5 );cursor:pointer}button.primary{border:var(--color-secondary) solid thin;background-color:var(--color-primary);color:var(--color-secondary)}button.tiny{padding:calc( var(--unit) * 0.5 )}button.small{padding:calc( var(--unit) * 0.75 )}button.medium{padding:calc( var(--unit) * 2 )}button.large{padding:calc( var(--unit) * 4 )}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			instance,
			create_fragment$2,
			safe_not_equal,
			{ primary: 0, size: 1 }
		);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}

			if (options.props) {
				this.$set(options.props);
				flush();
			}
		}
	}

	static get observedAttributes() {
		return ["primary", "size"];
	}

	get primary() {
		return this.$$.ctx[0];
	}

	set primary(primary) {
		this.$set({ primary });
		flush();
	}

	get size() {
		return this.$$.ctx[1];
	}

	set size(size) {
		this.$set({ size });
		flush();
	}
}

customElements.define("dpdhl-button", Dpdhl_button);

/* src/components/dpdhl-card/dpdhl-card.svelte generated by Svelte v3.37.0 */

function create_fragment$1(ctx) {
	let div;

	return {
		c() {
			div = element("div");

			div.innerHTML = `<header><slot name="header">No header was provided</slot></header> 

    <main><slot name="content">No Content was providedd</slot></main> 

    <footer><slot name="footer">No Footer was provided</slot></footer>`;

			this.c = noop;
			attr(div, "class", "dpdhl-card");
		},
		m(target, anchor) {
			insert(target, div, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(div);
		}
	};
}

class Dpdhl_card extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>.dpdhl-card{background:#FFFFFF;box-shadow:0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1);border-radius:4px;padding:calc( var(--unit) * 2 );min-height:300px;display:flex;flex-direction:column;flex-wrap:nowrap;justify-content:flex-start;align-content:stretch;align-items:flex-start;gap:calc( var(--unit) * 1)}header{flex:0 1 auto;align-self:start}main{flex:1 1 auto;align-self:start}footer{flex:0 1 auto;align-self:end}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			null,
			create_fragment$1,
			safe_not_equal,
			{}
		);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("dpdhl-card", Dpdhl_card);

/* src/themes/theme-provider/theme-provider.svelte generated by Svelte v3.37.0 */

function create_fragment(ctx) {
	let slot;

	return {
		c() {
			slot = element("slot");
			this.c = noop;
		},
		m(target, anchor) {
			insert(target, slot, anchor);
		},
		p: noop,
		i: noop,
		o: noop,
		d(detaching) {
			if (detaching) detach(slot);
		}
	};
}

class Theme_provider extends SvelteElement {
	constructor(options) {
		super();
		this.shadowRoot.innerHTML = `<style>:root{--unit:16px;--color-black:#000000;--color-white:#ffffff;--color-postyellow:#FFCC00;--color-dhlred:#D40511;--color-gray80:#333333;--color-gray60:#666666;--color-gray45:#8c8c8c;--color-gray30:#b2b2b2;--color-gray20:#cccccc;--color-gray10:#e5e5e5;--color-gray08:#ebebeb;--color-gray05:#f2f2f2;--color-primary:var(--color-dhlred);--color-secondary:var(--color-white);--font-size-normal:14px;--font-size-medium:18px;--font-size-large:24px;--font-family:"DeliveryRegular";--button-border-radius:6px;--button-padding:var(--unit);--button-color:var(--color-secondary)}:global(*){font-family:var(--font-family);font-size:var(--font-size-normal)}@font-face{font-family:"DeliveryRegular";src:url("../fonts/delivery/Delivery_W_Rg.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryBold";src:url("../fonts/delivery/Delivery_W_Bd.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryBoldItalic";src:url("../fonts/delivery/Delivery_W_BdIt.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryBlackCondensed";src:url("../fonts/delivery/Delivery_W_CdBlk.woff2") format("woff2");font-display:swap}@font-face{font-family:'DeliveryLightCondensed';src:url('../fonts/delivery/Delivery_W_CdLt.woff2') format("woff2");font-display:swap}@font-face{font-family:"DeliveryItalic";src:url("../fonts/delivery/Delivery_W_It.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryLight";src:url("../fonts/delivery/Delivery_W_Lt.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryLightItalic";src:url("../fonts/delivery/Delivery_W_LtIt.woff2") format("woff2");font-display:swap}</style>`;

		init(
			this,
			{
				target: this.shadowRoot,
				props: attribute_to_object(this.attributes),
				customElement: true
			},
			null,
			create_fragment,
			safe_not_equal,
			{}
		);

		if (options) {
			if (options.target) {
				insert(options.target, this, options.anchor);
			}
		}
	}
}

customElements.define("theme-dpdhl", Theme_provider);

export { Dpdhl_button as DPDHLButton, Dpdhl_card as DPDHLCard, Theme_provider as ThemeProvider };
