<script context="module" lang="ts">
	export const ITEMS = {};
</script>

<script lang="ts">
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

	export let count = 12;
	export let defaultpage = 2;
	export let maxpages = 10;

	$: from = 0;
	$: to = from + maxpages;

	$: selectedItem = defaultpage || 1;

	const component = get_current_component()
	const svelteDispatch = createEventDispatcher()

	export function dispatch(name, detail = null) {
		svelteDispatch(name, detail)
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
	}

    function handleSelect(id) {
        dispatch('select', id)
    }

	function setPaginationBoundaries() {
		let margin = Math.floor(maxpages/2);
		let first = selectedItem - margin;
		// if (count - first < maxpages) {
		// 	first = count - maxpages;
		// }
		from = first <= 0 ? 1 : first;
		const last = from + maxpages - 1;
		to = last > count ? count : last;
		console.log('from: ', from)
		console.log('to: ', to)
	}

	function selectItem(idx) {
		selectedItem = idx;
		handleSelect(idx);
		setPaginationBoundaries();
	}
</script>

<svelte:options tag="dpdhl-pagination" />

<div class="pagination-list">
	{#each Array(count) as _, idx}
		<span 
			class="item" 
			class:selected="{selectedItem === idx + 1}" 
			on:click="{() => selectItem(idx + 1)}">
				{idx + 1}
				<slot></slot>
		</span>
	{/each}
</div>

<style>
    .pagination-list {
        cursor:         pointer;
        display:        inline-grid;
        grid-auto-flow: column;
	}

	.item {
        padding:        0.75rem;
        font-weight:    700;
        font-size:      0.875rem;
        line-height:    0.5rem;
    }

    .item.selected {
        border-bottom: 2px solid var(--color-dhlred);
    }

    .item:hover {
        background-color: var(--color-dhlred-light);
    }
</style>