<script lang="ts">
    import { onMount } from 'svelte'
    import { makeEvent } from '../../x/util/dispatch';
    import "../dpdhl-icon"
    import { KeyItemAdded } from './dpdhl-search-item.svelte'
    
    export let multiplechoice = true


    export let placeholder = ""
    $: placholderItem = {
        label: placeholder,
        value: undefined,
    }

    interface Item {
        label: string
        value: unknown
    }

    let container: HTMLElement
    let items: Item[] = []
    let assignedElements: HTMLElement[] = []

    $: filterText = ''
    $: filteredItems = items.filter(item => {
        // replace multiple empty spaces in filterText with a single empty space
        const inputText = filterText.toString().toLowerCase().replace(/  +/g, ' ');
        return item.label.toLowerCase().replace(/  +/g, ' ').indexOf(inputText) !== -1
    });

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
            const value = el.getAttribute('value')
            if(items){ 
                items[ei] = {
                    label,
                    value
                }
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

    let selectedItem: Item = placholderItem;
    $: selectedItems = [];
    // let selectedItems: Item[] = []

    onMount(() => {
        if (!multiplechoice) {
            selectedItem = placholderItem;
        } else {
            selectedItems = []
        }

    })

    let root: HTMLDivElement;

    function onItemClick(item: Item){
        console.debug('[DEBUG] ', {fn:"onItemClick", item} )
        if (multiplechoice) {
            if (selectedItems.includes(item)) 
                selectedItems = selectedItems.filter(m => m.value !== item.value);
            else 
                selectedItems = [...selectedItems, item]
            root.dispatchEvent(makeEvent('selectMany', item.value))
        } else {
            selectedItem = item;
            open = false
            root.dispatchEvent(makeEvent('selectOne', item.value))
        }
    }

    $: console.debug('[DEBUG] ', {selectedItem} )
    $: console.debug('[DEBUG] ', {placholderItem} )
    let id = ""

</script>
<svelte:options tag="dpdhl-search" />

<div class="root" class:open bind:this={root}>

    <div class="select" >
        <div class="dropdown">
            <span class="placeholder">
                {#if !multiplechoice}
                    {#if selectedItem}
                        <dpdhl-copy>{selectedItem.label}</dpdhl-copy>
                    {/if}
                {:else}
                    <dpdhl-copy>
                        {#each selectedItems as chip}
                            <dpdhl-chip>
                                {chip.label} 
                                <dpdhl-icon 
                                    class="close-icon" 
                                    icon="cancel" 
                                    height=16 
                                    width=16 
                                />
                            </dpdhl-chip>
                        {/each}
                    </dpdhl-copy>
                {/if} 
            </span>
            <input id={id} {placeholder} bind:value={filterText}/>
            <span class="chevron" on:click={toggleOpen}>
                <dpdhl-icon width=16 height=16 color="var(--color-dhlred)" icon="chevron_down" />
            </span>
        </div>

    </div>

    <ul>
        {#each filteredItems as item}
            <li on:click={() => onItemClick(item)}>
                <dpdhl-copy class="item-label">
                    {item.label}
                </dpdhl-copy>
                {#if multiplechoice && selectedItems.includes(item)}
                    <dpdhl-icon icon="checkmark" width=16 color="var(--color-black)" />
                {/if}
                {#if !multiplechoice && item === selectedItem}
                    <dpdhl-icon icon="checkmark" width=16 color="var(--color-black)" />
                {/if}
            </li>
        {/each}
    </ul>
</div>


<div bind:this={container} class="container">
    <slot />
</div>

<style>
    :host {
        --border-color: var(--color-gray45);
    }

    .root{
        position: relative;
        display:  inline-block;
    }

    .select{
        border-radius: var(--border-radius);
        border-color:  var(--border-color);
        border-width:  1px;
        border-style:  solid;
        display:       inline-block;
        box-sizing:    border-box;
        padding:       0;
        min-width:     10rem;
        position:      relative;

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

        transition: transform 0.1s;
    }

    .open .chevron{
        transform: rotate(-180deg);
        
    }

    .container {
        display: none;
    }
    .item-label{
        flex-grow: 1;
    }

    ul {
        display:    none;
        margin:     0;
        padding:    0;
        width:      100%;
        background: var(--color-white);
        position:   absolute;
        box-sizing: border-box;

        border-width:            1px;
        border-style:            solid;
        border-radius:           var(--border-radius);
        border-color:            var(--border-color);
        border-top:              none;
        border-top-left-radius:  0;
        border-top-right-radius: 0;
    }

    .open ul {
        display: block;
    }

    .open .select {
        border-bottom:              none;
        border-bottom-left-radius:  0;
        border-bottom-right-radius: 0;
    }

    .open .dropdown{
        margin-bottom: 0.5rem;
    }

    li{
        padding:        0.5rem;
        cursor:         pointer;
        display:        flex;
        flex-direction: row;
        border-top:     1px solid var(--color-gray20);
    }
    li:last-of-type {
        border-bottom-left-radius:  calc( var(--border-radius) - 1px );
        border-bottom-right-radius: calc( var(--border-radius) - 1px );
    }
    li:hover{
        background-color: var(--color-steel-gray-medium);
    }
    li:focus{
        border-top:    thin solid var(--color-gray20);
        border-bottom: thin solid var(--color-gray20);
    }

</style>