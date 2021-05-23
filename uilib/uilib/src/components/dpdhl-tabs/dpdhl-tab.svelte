<script lang="ts" context="module">
    export const KeyLabelChange = 'label'
    export const KeyTabAdded = 'tabadded'
</script>
<script lang="ts">
    import { onMount } from 'svelte'

    export let label = ''
    export let active: boolean

    let contentRef: HTMLSpanElement
    $: onLabelChange(label)
    
    const id = Math.random().toString();

    onMount(() => onLabelChange(label))
    
    function onLabelChange(newLabel: string) {
        if(!contentRef) { return }
        // console.debug('🐞 tab::dispatching event', {newLabel,contentRef} );
        contentRef.dispatchEvent(new CustomEvent(KeyLabelChange,{
            bubbles: true,
            composed: true,
            detail: {
                id,
                label: newLabel,
            },
        }))
    }

    function tabAdded(){
        if(!contentRef) { return }
        console.debug('🐞 tab::tab added');
        contentRef.dispatchEvent(new CustomEvent(KeyTabAdded,{
            bubbles: true,
            composed: true,
        }))
    }
    onMount(tabAdded);

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