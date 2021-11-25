<script lang="ts">
	import { getContext } from 'svelte';
	import { ITEMS } from './dpdhl-radio-group.svelte';

    export let value = "";
    export let label = "";

    const item = { value, label };
	const { registerItem, selectItem, selectedItem } = getContext(ITEMS);
    console.log('selectedItem: ', selectedItem);
    console.log('value: ', value);
	registerItem(item);
</script>

<svelte:options tag="dpdhl-radio-item" />


<!-- <span 
	class="item" 
	class:selected="{$selectedItem === item}" 
	on:click="{() => selectItem(item)}">
		<slot></slot>
</span> -->

<dpdhl-radio-button 
    on:select={() => selectItem(item)}
    selected={selectedItem.value === value}
    value={value}
    label={label}/>

<!-- <dpdhl-radio-button 
    on:select={handleSelect}
    selected={selected===item.value}
    value={item.value}
    label={item.label}/> -->
