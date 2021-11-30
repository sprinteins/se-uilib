<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-radio-group.svelte';

    export let value = "";
    export let label = "";

    const item = { value };
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(item);

</script>

<svelte:options tag="dpdhl-radio-item" />

<dpdhl-radio-button 
    on:select={() => selectItem(item)}
    selected={$selectedItem === item}
    value={value}>
    <slot></slot>
</dpdhl-radio-button>


