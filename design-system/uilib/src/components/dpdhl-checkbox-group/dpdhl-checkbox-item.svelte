<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-checkbox-group.svelte';

    export let value            = "";
    export let disabled         = false;
    export let indeterminate    = false;
    export let error            = false;

	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(value);

</script>

<svelte:options tag="dpdhl-checkbox-item" />

<dpdhl-checkbox 
    on:check={() => selectItem(value)}
    checked={$selectedItem === value}
    {value}
    {disabled}
    {indeterminate}
    {error}>
    <slot></slot>
</dpdhl-checkbox>


