<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-checkbox-group.svelte';

    export let value = "";

	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(value);

</script>

<svelte:options tag="dpdhl-checkbox-item" />

<dpdhl-checkbox 
    on:check={() => selectItem(value)}
    checked={$selectedItem === value}
    value={value}>
    <slot></slot>
</dpdhl-checkbox>


