<script context="module">
	export const ITEMS = {};
</script>

<script>
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';

	const items = [];
	const selectedItem = writable(null);

	setContext(ITEMS, {
		registerItem: item => {
			items.push(item);
			selectedItem.update(current => current || item);
			
			onDestroy(() => {
				const i = items.indexOf(item);
				items.splice(i, 1);
				selectedItem.update(current => current === item ? (items[i] || items[items.length - 1]) : current);
			});
		},

		selectItem: item => {
			const i = items.indexOf(item);
			selectedItem.set(item);
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