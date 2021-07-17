<script lang="ts">
    import { onMount } from 'svelte'
    import { KeyLabelChange, KeyTabAdded } from './dpdhl-tab.svelte'

    const keyActivate = 'active'
    
    let container: HTMLSpanElement
    let labels: string[] = []
    let assignedElements: HTMLElement[] = []
    onMount(()=>{
        // pure html already has the slots, angular add them later
        registerTabs();
        container.addEventListener(KeyTabAdded, registerTabs)
    })

    

    function registerTabs(){
        const slot = container.childNodes[0] as HTMLSlotElement

        assignedElements = slot.assignedElements() as HTMLElement[]


        // TODO: unify `forEaches`
        assignedElements.forEach( (el, ei)  => {
            const alreadyRegistered = el.hasAttribute('registered')
            if( alreadyRegistered ){
                return;
            }
            el.setAttribute('registered','');
            

            // Label
            const label = el.getAttribute('label')
            if(label){ 
                labels[ei] = label;
            }
            
            // event
            // el.addEventListener(KeyLabelChange, onLabelChange.bind(undefined, ei))
        
            // activate tab
            if(el.hasAttribute(keyActivate)){ 
                activateTab(ei)
            }
        });
    }

    // function onLabelChange(index:number, event: CustomEvent){
    //     const newLabel = event.detail
    //     labels[index] = newLabel
    // }

    let activeIndex = -1
    function activateTab(index){
        assignedElements.forEach(el => el.removeAttribute(keyActivate))
        assignedElements[index].setAttribute(keyActivate,keyActivate)
        activeIndex = index
    }


</script>

<svelte:options tag="dpdhl-tabs" />

<ul>
    {#each labels as label, index}
        <li 
            on:click={() => activateTab(index)}
            class:active={activeIndex === index}
        >
            <span class="label">
                {label}
            </span>
        </li>
    {/each}
    <li class="spacer">&nbsp;</li>
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

        padding:        0.5em;
        padding-bottom: 1.25em;
        flex-grow:      0;
        border-bottom:  1px var(--color-black) solid;
        text-align:     left;
        
    }
    li.spacer{
        flex-grow: 1;
    }
    li.active {
        padding-bottom: 0.3em;
        border-bottom:  unset;
        
    }
    .label{
        display: inline-block;
        height:  100%;
        padding: 0 1em;
    }
    li.active .label{
        border-bottom:  0.25em var(--color-dhlred) solid;
        transition:     border-bottom 0.1s linear;
    }

</style>
