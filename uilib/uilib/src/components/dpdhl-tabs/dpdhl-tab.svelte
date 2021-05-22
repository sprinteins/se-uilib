<script lang="ts" context="module">
    export const KeyLabelChange = 'label'
</script>
<script lang="ts">
    import { onMount } from 'svelte'

    export let label = ''
    export let active: boolean

    let contentRef: HTMLSpanElement
    $: onLabelChange(label)
    onMount(() => onLabelChange(label))
    function onLabelChange(newLabel: string) {
        if(!contentRef) { return }
        contentRef.dispatchEvent(new CustomEvent(KeyLabelChange,{
            bubbles: true,
            composed: true,
            detail: newLabel,
        }))
    }

</script>


<svelte:options tag="dpdhl-tab" />


<span class="content" bind:this={contentRef} class:active>
    <slot />
</span>

<style>
    .content{
        display: none;
    }

    .content.active{
        display: unset;
    }

</style>