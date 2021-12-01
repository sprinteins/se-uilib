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

    function handleSelect(value) {
        dispatch('select', value)
    }

	setContext(ITEMS, {
		registerItem: item => {
			items.push(item);
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
			selectedItem.set(item);
            handleSelect(item.value)
		},
		selectedItem: selectedItem,
	});
</script>

<svelte:options tag="dpdhl-radio-group" />

<div class="container">
	<slot></slot>
</div>

<style>
    .container {
        display:        flex;
        flex-direction: column;
        gap:            1.5rem;
    }
</style>