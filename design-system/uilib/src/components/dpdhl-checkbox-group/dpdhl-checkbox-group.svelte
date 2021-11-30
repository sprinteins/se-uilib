<script context="module" lang="ts">
	export const ITEMS = {};
</script>

<script lang="ts">
	import { setContext, onDestroy } from 'svelte';
	import { writable } from 'svelte/store';
	import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

	const items = [];
	let selectedItems = writable([]);

	const component = get_current_component()
	const svelteDispatch = createEventDispatcher()

	export function dispatch(name, detail = null) {
		svelteDispatch(name, detail)
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
	}

    function handleSelect(items) {
        dispatch('select', items)
    }

	setContext(ITEMS, {
		registerItem: item => {
			items.push(item);
			onDestroy(() => {
				const i = items.indexOf(item);
				items.splice(i, 1);
				selectedItems.update(current => 
					current.includes(item) 
					? current.filter(i => i !== item)
					: current);
			});
		},
		selectItem: item => {
            selectedItems.update(current => {
                let selected = [...current];
                if (current.includes(item)) {
                    selected = selected.filter(i => i !== item)
                } else {
                    selected = [...selected, item]
                }
                return selected;
            })
            handleSelect($selectedItems)
		},
		selectedItem: selectedItems,
	});
</script>

<svelte:options tag="dpdhl-checkbox-group" />

<div class="container">
	<slot></slot>
</div>

<style>
    .container {
        display:        flex;
        flex-direction: column;
        gap:            1rem;
    }
</style>
<!-- 
<script lang="ts">
    import type { CheckboxItem } from './checkbox-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"
    import { createEventDispatcher } from 'svelte';
    import { get_current_component } from "svelte/internal";

    const component = get_current_component()
    const svelteDispatch = createEventDispatcher()

    export function dispatch(name, detail) {
        svelteDispatch(name, detail)
        component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
    }

    let selected = [];
	
    function handleSelect(event) {
        let selectedItem = event.detail;
        if (selected.includes(selectedItem)) {
            selected = selected.filter(item => item !== selectedItem)
        } else {
            selected = [...selected, selectedItem]
        }
        dispatch('select', { selected })
    }

    const _disabled = false
    const _error = false

    export let items: CheckboxItem[] = []

</script>

<svelte:options tag="dpdhl-checkbox-group" />

<span class="container">
    {#each items as item}
        <dpdhl-checkbox
			on:check={handleSelect}
			name="checkbox-example"
            label={item.label}
            value={item.value}/>
    {/each}
</span>


<style>
    .container {
        display:        flex;
        flex-direction: column;
        gap:            1rem;
    }

</style> -->
