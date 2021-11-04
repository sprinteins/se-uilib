<script lang="ts">
    import type { SegmentedControlItem } from './segmented-control-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"
    import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

    $: selectedItemId = 0;

	const component = get_current_component()
	const svelteDispatch = createEventDispatcher()
	
	const dispatch = (name, detail = null) => {
		svelteDispatch(name, detail)
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
	}

	function handleClick(idx) {
        selectedItemId = idx;
		dispatch('select', {
			id: idx
		})
	}

    export let items: SegmentedControlItem[] = []

</script>

<svelte:options tag="dpdhl-segmented-control" />

<span class="container">
    {#each items as item, idx}
        <span class="item" on:click={() => handleClick(idx)} class:selected={idx === selectedItemId}>
            <dpdhl-typography variant="body1">
                {item.label}
            </dpdhl-typography>
        </span>
    {/each}
</span>


<style>

    .container {
        cursor: pointer;
        display: inline-grid;
        grid-auto-flow: column;
        border: 1px solid var(--color-postyellow);
    }

    .item {
        padding: 0.75rem;
        font-weight: 700;
        font-size: 14px;
        line-height: 8px;
        border-right: 1px solid var(--color-postyellow);
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