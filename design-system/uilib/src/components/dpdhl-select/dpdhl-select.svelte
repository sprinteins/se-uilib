<script lang="ts">
    import { onMount } from 'svelte'
    import "../dpdhl-icon"

    import { KeyItemAdded } from './dpdhl-select-item.svelte'
    export let placeholder = ""

    let container: HTMLElement
    let labels: string[] = []
    let assignedElements: HTMLElement[] = []

    onMount(() => {
        registerItems();
        container.addEventListener(KeyItemAdded, registerItems)
    })    

    function registerItems(){
        const slot = container.childNodes[0] as HTMLSlotElement

        assignedElements = slot.assignedElements() as HTMLElement[]

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
            // if(el.hasAttribute(keyActivate)){ 
            //     activateTab(ei)
            // }
        });
    }

    let open = true;
    function toggleOpen(){
        open = !open;
    }

</script>
<svelte:options tag="dpdhl-select" />

<div class="select" class:open>
    <div class="dropdown" on:click={toggleOpen}>
        <span class="placeholder">
            <dpdhl-copy >{placeholder}</dpdhl-copy>
        </span>
        <span class="chevron">
            <dpdhl-icon width=16 height=16 color="var(--color-black)" icon="chevron_down" />
        </span>

    </div>


    <ul>
        {#each labels as label}
            <li>
                <dpdhl-copy>{label}</dpdhl-copy>
            </li>
        {/each}
    </ul>
</div>


<div bind:this={container} class="container">
    <slot />
</div>

<style>

    .select{
        border-radius: var(--border-radius);
        border-color:  var(--color-black);
        border-width:  1px;
        border-style:  solid;
        display:       inline-block;
        padding:       0 0.5rem;
        min-width:     10rem;

    }

    .dropdown {
        display:        flex;
        flex-direction: row;
        padding:        0.5rem;
        cursor:         pointer;
    }

    .placeholder{
        flex-grow: 1;
    }

    .chevron{
        flex-grow:  0;
        display:    inline-block;
        text-align: center;
        max-width:  1rem;
        overflow:   hidden;
        align-self: center;

        transition: transform 0.25s;
    }

    .open .chevron{
        transform: rotate(-180deg);
        
    }

    .container {
        display: none;
    }


    ul {
        display: none;
        margin:  0;
        padding: 0;
        
    }
    .open ul{
        display: unset;
    }

    li{
        padding: 0.5rem;
    }

    li:hover{
        background-color: var(--color-gray08);
    }

    li:focus{
        background-color: var(--color-gray10);
        
        border-top:    thin solid var(--color-gray20);
        border-bottom: thin solid var(--color-gray20);
    }

</style>