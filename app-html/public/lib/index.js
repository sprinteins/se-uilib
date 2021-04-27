
(function(l, r) { if (l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (window.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(window.document);
(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.DpdhlUiLib = {}));
}(this, (function (exports) { 'use strict';

    function noop() { }
    function add_location(element, file, line, column, char) {
        element.__svelte_meta = {
            loc: { file, line, column, char }
        };
    }
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

    function append(target, node) {
        target.appendChild(node);
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
    function text(data) {
        return document.createTextNode(data);
    }
    function space() {
        return text(' ');
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
    function custom_event(type, detail) {
        const e = document.createEvent('CustomEvent');
        e.initCustomEvent(type, false, false, detail);
        return e;
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

    function dispatch_dev(type, detail) {
        document.dispatchEvent(custom_event(type, Object.assign({ version: '3.37.0' }, detail)));
    }
    function append_dev(target, node) {
        dispatch_dev('SvelteDOMInsert', { target, node });
        append(target, node);
    }
    function insert_dev(target, node, anchor) {
        dispatch_dev('SvelteDOMInsert', { target, node, anchor });
        insert(target, node, anchor);
    }
    function detach_dev(node) {
        dispatch_dev('SvelteDOMRemove', { node });
        detach(node);
    }
    function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
        const modifiers = options === true ? ['capture'] : options ? Array.from(Object.keys(options)) : [];
        if (has_prevent_default)
            modifiers.push('preventDefault');
        if (has_stop_propagation)
            modifiers.push('stopPropagation');
        dispatch_dev('SvelteDOMAddEventListener', { node, event, handler, modifiers });
        const dispose = listen(node, event, handler, options);
        return () => {
            dispatch_dev('SvelteDOMRemoveEventListener', { node, event, handler, modifiers });
            dispose();
        };
    }
    function attr_dev(node, attribute, value) {
        attr(node, attribute, value);
        if (value == null)
            dispatch_dev('SvelteDOMRemoveAttribute', { node, attribute });
        else
            dispatch_dev('SvelteDOMSetAttribute', { node, attribute, value });
    }
    function validate_slots(name, slot, keys) {
        for (const slot_key of Object.keys(slot)) {
            if (!~keys.indexOf(slot_key)) {
                console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
            }
        }
    }

    /* src/components/dpdhl-button/dpdhl-button.svelte generated by Svelte v3.37.0 */

    const file$2 = "src/components/dpdhl-button/dpdhl-button.svelte";

    function create_fragment$2(ctx) {
    	let button;
    	let slot;
    	let mounted;
    	let dispose;

    	const block = {
    		c: function create() {
    			button = element("button");
    			slot = element("slot");
    			this.c = noop;
    			add_location(slot, file$2, 24, 4, 592);
    			toggle_class(button, "primary", /*primary*/ ctx[0]);
    			toggle_class(button, "tiny", /*size*/ ctx[1] === Size.Tiny);
    			toggle_class(button, "small", /*size*/ ctx[1] === Size.Small);
    			toggle_class(button, "medium", /*size*/ ctx[1] === Size.Medium);
    			toggle_class(button, "large", /*size*/ ctx[1] === Size.Large);
    			add_location(button, file$2, 15, 0, 381);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, button, anchor);
    			append_dev(button, slot);

    			if (!mounted) {
    				dispose = listen_dev(button, "click", /*click_handler*/ ctx[2], false, false, false);
    				mounted = true;
    			}
    		},
    		p: function update(ctx, [dirty]) {
    			if (dirty & /*primary*/ 1) {
    				toggle_class(button, "primary", /*primary*/ ctx[0]);
    			}

    			if (dirty & /*size, Size*/ 2) {
    				toggle_class(button, "tiny", /*size*/ ctx[1] === Size.Tiny);
    			}

    			if (dirty & /*size, Size*/ 2) {
    				toggle_class(button, "small", /*size*/ ctx[1] === Size.Small);
    			}

    			if (dirty & /*size, Size*/ 2) {
    				toggle_class(button, "medium", /*size*/ ctx[1] === Size.Medium);
    			}

    			if (dirty & /*size, Size*/ 2) {
    				toggle_class(button, "large", /*size*/ ctx[1] === Size.Large);
    			}
    		},
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(button);
    			mounted = false;
    			dispose();
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$2.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    var Size;

    (function (Size) {
    	Size["Tiny"] = "Tiny";
    	Size["Small"] = "Small";
    	Size["Normal"] = "Normal";
    	Size["Medium"] = "Medium";
    	Size["Large"] = "Large";
    })(Size || (Size = {}));

    function instance$2($$self, $$props, $$invalidate) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("dpdhl-button", slots, []);
    	let { primary = false } = $$props;
    	let { size = Size.Normal } = $$props;
    	const writable_props = ["primary", "size"];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<dpdhl-button> was created with unknown prop '${key}'`);
    	});

    	function click_handler(event) {
    		bubble($$self, event);
    	}

    	$$self.$$set = $$props => {
    		if ("primary" in $$props) $$invalidate(0, primary = $$props.primary);
    		if ("size" in $$props) $$invalidate(1, size = $$props.size);
    	};

    	$$self.$capture_state = () => ({ Size, primary, size });

    	$$self.$inject_state = $$props => {
    		if ("primary" in $$props) $$invalidate(0, primary = $$props.primary);
    		if ("size" in $$props) $$invalidate(1, size = $$props.size);
    	};

    	if ($$props && "$$inject" in $$props) {
    		$$self.$inject_state($$props.$$inject);
    	}

    	return [primary, size, click_handler];
    }

    class Dpdhl_button extends SvelteElement {
    	constructor(options) {
    		super();
    		this.shadowRoot.innerHTML = `<style>button{--button-color:var(--color-primary);cursor:pointer;color:var(--button-color);background-color:var(--color-secondary);border:var(--color-primary) solid thin;border-radius:var(--button-border-radius);padding:calc( var(--unit) * 0.5 )}button.primary{border:var(--color-secondary) solid thin;background-color:var(--color-primary);color:var(--color-secondary)}button.tiny{padding:calc( var(--unit) * 0.5 )}button.small{padding:calc( var(--unit) * 0.75 )}button.medium{padding:calc( var(--unit) * 2 )}button.large{padding:calc( var(--unit) * 4 )}</style>`;

    		init(
    			this,
    			{
    				target: this.shadowRoot,
    				props: attribute_to_object(this.attributes),
    				customElement: true
    			},
    			instance$2,
    			create_fragment$2,
    			safe_not_equal,
    			{ primary: 0, size: 1 }
    		);

    		if (options) {
    			if (options.target) {
    				insert_dev(options.target, this, options.anchor);
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

    const file$1 = "src/components/dpdhl-card/dpdhl-card.svelte";

    function create_fragment$1(ctx) {
    	let div;
    	let header;
    	let slot0;
    	let t1;
    	let main;
    	let slot1;
    	let t3;
    	let footer;
    	let slot2;

    	const block = {
    		c: function create() {
    			div = element("div");
    			header = element("header");
    			slot0 = element("slot");
    			slot0.textContent = "No header was provided";
    			t1 = space();
    			main = element("main");
    			slot1 = element("slot");
    			slot1.textContent = "No Content was providedd";
    			t3 = space();
    			footer = element("footer");
    			slot2 = element("slot");
    			slot2.textContent = "No Footer was provided";
    			this.c = noop;
    			attr_dev(slot0, "name", "header");
    			add_location(slot0, file$1, 3, 8, 48);
    			add_location(header, file$1, 2, 4, 31);
    			attr_dev(slot1, "name", "content");
    			add_location(slot1, file$1, 7, 8, 132);
    			add_location(main, file$1, 6, 4, 117);
    			attr_dev(slot2, "name", "footer");
    			add_location(slot2, file$1, 11, 8, 219);
    			add_location(footer, file$1, 10, 4, 202);
    			attr_dev(div, "class", "dpdhl-card");
    			add_location(div, file$1, 1, 0, 1);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, div, anchor);
    			append_dev(div, header);
    			append_dev(header, slot0);
    			append_dev(div, t1);
    			append_dev(div, main);
    			append_dev(main, slot1);
    			append_dev(div, t3);
    			append_dev(div, footer);
    			append_dev(footer, slot2);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(div);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment$1.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance$1($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("dpdhl-card", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<dpdhl-card> was created with unknown prop '${key}'`);
    	});

    	return [];
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
    			instance$1,
    			create_fragment$1,
    			safe_not_equal,
    			{}
    		);

    		if (options) {
    			if (options.target) {
    				insert_dev(options.target, this, options.anchor);
    			}
    		}
    	}
    }

    customElements.define("dpdhl-card", Dpdhl_card);

    /* src/themes/theme-provider/theme-provider.svelte generated by Svelte v3.37.0 */

    const file = "src/themes/theme-provider/theme-provider.svelte";

    function create_fragment(ctx) {
    	let slot;

    	const block = {
    		c: function create() {
    			slot = element("slot");
    			this.c = noop;
    			add_location(slot, file, 6, 0, 61);
    		},
    		l: function claim(nodes) {
    			throw new Error("options.hydrate only works if the component was compiled with the `hydratable: true` option");
    		},
    		m: function mount(target, anchor) {
    			insert_dev(target, slot, anchor);
    		},
    		p: noop,
    		i: noop,
    		o: noop,
    		d: function destroy(detaching) {
    			if (detaching) detach_dev(slot);
    		}
    	};

    	dispatch_dev("SvelteRegisterBlock", {
    		block,
    		id: create_fragment.name,
    		type: "component",
    		source: "",
    		ctx
    	});

    	return block;
    }

    function instance($$self, $$props) {
    	let { $$slots: slots = {}, $$scope } = $$props;
    	validate_slots("theme-dpdhl", slots, []);
    	const writable_props = [];

    	Object.keys($$props).forEach(key => {
    		if (!~writable_props.indexOf(key) && key.slice(0, 2) !== "$$") console.warn(`<theme-dpdhl> was created with unknown prop '${key}'`);
    	});

    	return [];
    }

    class Theme_provider extends SvelteElement {
    	constructor(options) {
    		super();
    		this.shadowRoot.innerHTML = `<style>:host{--unit:16px;--color-black:#000000;--color-white:#ffffff;--color-postyellow:#FFCC00;--color-dhlred:#D40511;--color-gray80:#333333;--color-gray60:#666666;--color-gray45:#8c8c8c;--color-gray30:#b2b2b2;--color-gray20:#cccccc;--color-gray10:#e5e5e5;--color-gray08:#ebebeb;--color-gray05:#f2f2f2;--color-primary:var(--color-dhlred);--color-secondary:var(--color-white);--font-size-normal:14px;--font-size-medium:18px;--font-size-large:24px;--font-family:"DeliveryRegular";--button-border-radius:6px;--button-padding:var(--unit);--button-color:var(--color-secondary)}:global(*){font-family:var(--font-family);font-size:var(--font-size-normal)}@font-face{font-family:"DeliveryRegular";src:url("../fonts/delivery/Delivery_W_Rg.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryBold";src:url("../fonts/delivery/Delivery_W_Bd.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryBoldItalic";src:url("../fonts/delivery/Delivery_W_BdIt.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryBlackCondensed";src:url("../fonts/delivery/Delivery_W_CdBlk.woff2") format("woff2");font-display:swap}@font-face{font-family:'DeliveryLightCondensed';src:url('../fonts/delivery/Delivery_W_CdLt.woff2') format("woff2");font-display:swap}@font-face{font-family:"DeliveryItalic";src:url("../fonts/delivery/Delivery_W_It.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryLight";src:url("../fonts/delivery/Delivery_W_Lt.woff2") format("woff2");font-display:swap}@font-face{font-family:"DeliveryLightItalic";src:url("../fonts/delivery/Delivery_W_LtIt.woff2") format("woff2");font-display:swap}</style>`;

    		init(
    			this,
    			{
    				target: this.shadowRoot,
    				props: attribute_to_object(this.attributes),
    				customElement: true
    			},
    			instance,
    			create_fragment,
    			safe_not_equal,
    			{}
    		);

    		if (options) {
    			if (options.target) {
    				insert_dev(options.target, this, options.anchor);
    			}
    		}
    	}
    }

    customElements.define("theme-dpdhl", Theme_provider);

    exports.DPDHLButton = Dpdhl_button;
    exports.DPDHLCard = Dpdhl_card;
    exports.ThemeProvider = Theme_provider;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
