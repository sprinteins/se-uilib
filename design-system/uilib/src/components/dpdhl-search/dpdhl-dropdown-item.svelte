<script context='module' lang='ts'>
    export const KeyItemAdded = 'itemadded'
</script>
<script lang='ts'>
    import type { Item } from "./item";

    export let item: Item;
    export let selectedItem: Item;
    export let selectedItems: Item[];
    export let multiplechoice: Item;
    export let onItemClick: (item: Item) => {};
    const _item = item;
    const _selectedItem = selectedItem;
    const _selectedItems = selectedItems;
    const _multiplechoice = multiplechoice;
    const _onItemClick = onItemClick;

</script>
<svelte:options tag="dpdhl-dropdown-item" />

<span>
    <li on:click={() => _onItemClick(_item)}>
        <dpdhl-copy class="item-label">
            {_item.label}
        </dpdhl-copy>
        {#if _multiplechoice && _selectedItems.includes(item)}
            <dpdhl-icon icon="checkmark" width=16 color="var(--color-black)" />
        {/if}
        {#if !_multiplechoice && _item === _selectedItem}
            <dpdhl-icon icon="checkmark" width=16 color="var(--color-black)" />
        {/if}
    </li>
</span>