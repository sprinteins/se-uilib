<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-segmented-control.svelte';

	const item = {};
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(item);
</script>

<svelte:options tag="dpdhl-segmented-control-item" />

<style>

	.item {
        padding:        0.75rem;
        font-weight:    700;
        font-size:      0.875rem;
        line-height:    0.5rem;
        border-right:   1px solid var(--color-postyellow);
    }

    .item:last-child {
        border-right: none;
    }

    .item.selected {
        background-color: var(--color-postyellow);
    }

    .item:hover {
        background-color: var(--color-postyellow);
    }

</style>

<span 
	class="item" 
	class:selected="{$selectedItem === item}" 
	on:click="{() => selectItem(item)}">
		<slot></slot>
</span>

