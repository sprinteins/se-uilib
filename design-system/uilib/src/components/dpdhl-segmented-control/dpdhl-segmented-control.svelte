<script context="module" lang="ts">
	export const ITEMS = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
    import { makeEvent } from '../../x/util/dispatch';

	const items = [];
	let selectedItem = writable(null);

    let container;

    function handleSelect(id) {
        console.log('id: ', id)
        container.dispatchEvent(makeEvent('select', id));
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

<div class="tabs" bind:this={container}>
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