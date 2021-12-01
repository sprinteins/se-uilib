<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-radio-group.svelte';

    export let value        = "";
    export let disabled     = false;
    export let error        = false;

    const item = { value };
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(item);

</script>

<svelte:options tag="dpdhl-radio-item" />

<dpdhl-radio-button 
    on:select={() => selectItem(item)}
    selected={$selectedItem === item}
    {value}
    {disabled}
    {error}>
    <slot></slot>
</dpdhl-radio-button>


