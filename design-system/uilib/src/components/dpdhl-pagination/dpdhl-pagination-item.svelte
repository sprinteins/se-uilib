<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-pagination.svelte';

	const item = {};
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(item);
</script>

<svelte:options tag="dpdhl-pagination-item" />

<style>

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

<span 
	class="item" 
	class:selected="{$selectedItem === item}" 
	on:click="{() => selectItem(item)}">
		<slot></slot>
</span>

