<script context='module' lang='ts'>
    export const KeyItemAdded = 'itemadded'
</script>
<script lang='ts'>
    import { onMount } from 'svelte'

    let contentRef: HTMLElement
    function tabAdded(){
        if(!contentRef) { return }
        contentRef.dispatchEvent(new CustomEvent(KeyItemAdded,{
            bubbles: true,
            composed: true,
        }))
    }
    onMount(tabAdded);
</script>
<svelte:options tag="dpdhl-select-item" />

<span>
    <slot />
</span>