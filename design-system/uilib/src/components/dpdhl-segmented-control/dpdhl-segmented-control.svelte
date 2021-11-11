<script lang="ts">
    import type { SegmentedControlItem } from './segmented-control-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography";

    $: selectedItemId = 0;

	function handleClick(item, idx) {
        selectedItemId = idx;
        item.click(idx)
	}

    export let items: SegmentedControlItem[] = []

</script>

<svelte:options tag="dpdhl-segmented-control" />

<span class="container">
    {#each items as item, idx}
        <span class="item" on:click={() => handleClick(item, idx)} class:selected={idx === selectedItemId}>
            <dpdhl-typography variant="body1">
                {item.label}
            </dpdhl-typography>
        </span>
    {/each}
</span>


<style>

    .container {
        cursor:         pointer;
        display:        inline-grid;
        grid-auto-flow: column;
        border:         1px solid var(--color-postyellow);
        border-radius:  2px;
    }

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