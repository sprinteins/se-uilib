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

    let selected = '20';
	
    function handleSelect(event) {
        selected = event.detail.value
        dispatch('select', {
			value: event.detail.value
		})
    }

    const _disabled = false
    const _error = false

    export let items: CheckboxItem[] = []

</script>

<svelte:options tag="dpdhl-checkbox-group" />

<span class="container">
    {#each items as item}
        <dpdhl-checkbox 
            on:select={handleSelect}
            selected={selected===item.value}
            value={item.value}
            label={item.label}/>
    {/each}
</span>


<style>
    .container {
        display:        flex;
        flex-direction: column;
        gap:            1rem;
    }

</style>
