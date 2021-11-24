<script context="module" lang="ts">
	export const ITEMS = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

	const items = [];
	let selectedItem = writable(null);

	const component = get_current_component()
	const svelteDispatch = createEventDispatcher()

	export function dispatch(name, detail = null) {
		svelteDispatch(name, detail)
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
	}

    function handleSelect(id) {
        dispatch('select', id)
    }

	setContext(ITEMS, {
		registerItem: item => {
			items.push(item);
			selectedItem.update(current => current || item);
			onDestroy(() => {
				const i = items.indexOf(item);
				items.splice(i, 1);
				selectedItem.update(current => 
					current === item 
					? (items[i] || items[items.length - 1]) 
					: current);
			});
		},
		selectItem: item => {
			const i = items.indexOf(item);
			selectedItem.set(item);
            handleSelect(i)
		},
		selectedItem: selectedItem,
	});
</script>

<svelte:options tag="dpdhl-segmented-control" />

<div class="tabs">
    <div class="tab-list">
	    <slot></slot>
    </div>
</div>

<style>
    .tab-list {
        cursor:         pointer;
        display:        inline-grid;
        grid-auto-flow: column;
        border:         1px solid var(--color-postyellow);
        border-radius:  2px;
	}
</style>