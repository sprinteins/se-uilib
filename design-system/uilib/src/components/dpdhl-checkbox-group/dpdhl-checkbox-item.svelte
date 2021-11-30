<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-checkbox-group.svelte';

    export let value = "";

    const item = { value };
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);

	registerItem(item);

</script>

<svelte:options tag="dpdhl-checkbox-item" />

<dpdhl-checkbox 
    on:check={() => selectItem(item)}
    checked={$selectedItem === item}
    value={value}>
    <slot></slot>
</dpdhl-checkbox>


