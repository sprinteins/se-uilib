<script lang="ts">
    import { onMount } from 'svelte'
	import { makeEvent } from '../../x/util/dispatch';
    import "../dpdhl-icon"
    import { KeyItemAdded } from './dpdhl-radio-item.svelte'
    
    export let placeholder = ""
    $: placholderItem = {
        label: placeholder,
        value: undefined,
		disabled: false,
		error: false
    }

    interface Item {
        label: string
        value: unknown,
		disabled: boolean,
		error: boolean
    }

    let container: HTMLElement
    let items: Item[] = []
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
            const value = el.getAttribute('value')
			// const disabled = el.getAttribute('disabled')
			// const error = el.getAttribute('error')
			const disabled = false;
			const error = false
			console.log('error: ', error)
            if(items){ 
                items[ei] = {
                    label,
                    value,
					disabled,
					error
                }
            }
        });
    }

    let open = true;
    function toggleOpen(){
        open = !open;
    }

    let selectedItem: Item = placholderItem;
    onMount(() => {
        selectedItem = placholderItem;
    })

    let root: HTMLDivElement;
    function onItemClick(item: Item){
        selectedItem = item;
        root.dispatchEvent(makeEvent('select', item.value))
    }

</script>
<svelte:options tag="dpdhl-radio-group" />

<div class="root" class:open bind:this={root}>

	{#each items as item}
		<dpdhl-radio-button 
			on:select={() => onItemClick(item)}
			selected={selectedItem === item}
			value={item.value}
			disabled={item.disabled}
			error={item.error}>
			{item.label}
		</dpdhl-radio-button>
	{/each}
</div>


<div bind:this={container} class="container">
    <slot />
</div>

<style>
	.container {
        display:        flex;
        flex-direction: column;
        gap:            var(--radio-group__items-gap, 1.5rem);
    }

</style>