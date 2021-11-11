<script lang="ts">
    import type { RadioButtonItem } from './radio-button-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"
    import { makeEvent } from '../../x/util/dispatch'

    $: selectedItemValue = "";

	function handleClick(value) {
        selectedItemValue = value;
		makeEvent('select', {
			value
		})
	}

    export let items: RadioButtonItem[] = []

</script>

<svelte:options tag="dpdhl-radio-group" />

<span class="container">
    {#each items as item}
        <span class="item" on:click={() => handleClick(item.value)}>
            <dpdhl-typography variant="body1">
                {item.label}
            </dpdhl-typography>
        </span>
    {/each}
</span>


<style>

    .container {
        display: flex;
        flex-direction: column;
    }

    .item {
        padding:        0.75rem;
        font-weight:    700;
        font-size:      14px;
        line-height:    8px;
        cursor:         pointer;
    }

    .item:last-child {
        border-right:   none;
    }

    .item.selected {
        background-color: var(--color-postyellow);
    }

    .item:hover {
    
    }

</style>