<script context="module" lang="ts">
	export const ITEMS = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { makeEvent } from '../../x/util/dispatch';

	const items = [];
	let selectedItem = writable(null);

	// TODO: adding type throws a parsing error
	let root // : HTMLDivElement; 
	function handleSelect(value) {
		root.dispatchEvent(makeEvent('select', value))
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

<div class="container" bind:this={root}>
	<slot></slot>
</div>

<style>
    .container {
        display:        flex;
        flex-direction: column;
        gap:            var(--radio-group__items-gap, 1.5rem);
    }
</style>