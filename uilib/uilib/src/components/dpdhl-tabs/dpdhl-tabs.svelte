<script lang="ts">
    import { onDestroy, onMount } from 'svelte'
    import { KeyLabelChange } from './dpdhl-tab.svelte';

    // const eventActivate = "activate"
    const keyActivate = "active";
    
    let container: HTMLSpanElement;
    let labels: string[] = [];
    let assignedElements: HTMLElement[] = []
    onMount(()=>{
        const slot = container.childNodes[0] as HTMLSlotElement
        assignedElements = slot.assignedElements() as HTMLElement[];
        assignedElements.forEach( (el, ei) => el.addEventListener(KeyLabelChange, onLabelChange.bind(undefined, ei)))
        assignedElements.forEach( (el, ei) => {
            if(!el.hasAttribute(keyActivate)){ return; }

            activateTab(ei);
            return false;
        } )
    })

    function onLabelChange(index:number, event: CustomEvent){
        const newLabel = event.detail;
        labels[index] = newLabel
    }

    let activeIndex = -1;
    function activateTab(index){
        assignedElements.forEach(el => el.removeAttribute(keyActivate))
        assignedElements[index].setAttribute(keyActivate,keyActivate)
        activeIndex = index;
    }


</script>

<svelte:options tag="dpdhl-tabs" />

<ul>
    {#each labels as label, index}
        <li 
            on:click={() => activateTab(index)}
            class:active={activeIndex === index}
        >
            {label}
        </li>
    {/each}
</ul>

<span bind:this={container}>
<slot />
</span>

<style>
    ul {
        list-style:     none;
        display:        flex;
        flex-direction: row;
        padding:        0;
        margin:         0;
        margin-bottom:  1em;
    }
    li{
        cursor:         pointer;
        text-align:     center;

        padding:        1em;
        padding-bottom: 1.25em;
        border-bottom:  1px var(--color-black) solid;
        flex-grow:      1;
        
        
    }
    li.active {
        padding-bottom: unset;
        border-bottom:  0.25em var(--color-dhlred) solid;
        transition:     border 0.1s linear;
    }
</style>
