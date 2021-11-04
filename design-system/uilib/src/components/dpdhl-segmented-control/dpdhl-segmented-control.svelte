<script lang="ts">
    import type { SegmentedControlItem } from './segmented-control-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"

    export let items: SegmentedControlItem[] = []
</script>

<svelte:options tag="dpdhl-segmented-control" />

<span class="container">
    {#each items as item}
        <span class="item" on:click={item.click}>
            <dpdhl-typography variant="body1">
                {item.label}
            </dpdhl-typography>
        </span>
    {/each}
</span>


<style>

    .container {
        cursor: pointer;
        display: flex;
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

    .item:hover {
        background-color: var(--color-postyellow);
    }

    li {
        width:   calc( 100% - 0.5rem);
        padding: 0.5rem 0 0.5rem 0.5rem;
        
    }

    li:hover {
        background-color: var(--color-gray05);
    }
</style>