<script lang="ts">
    import { onMount } from 'svelte'
	import { makeEvent } from '../../x/util/dispatch'
    import "../dpdhl-icon"
    import { KeyItemAdded } from './dpdhl-checkbox-item.svelte'
    
    export let placeholder = ""
    $: placholderItem = {
        label: placeholder,
        value: undefined,
		disabled: false,
		error: false,
		indeterminate: false
    }

    interface Item {
        label: string
        value: unknown,
		disabled: boolean,
		error: boolean,
		indeterminate: boolean
    }

    let container: HTMLElement
    let items: Item[] = []
	let selectedItems: Item[] = []
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
            const label = el.getAttribute('label')
            const value = el.getAttribute('value')
			const disabled = el.getAttribute('disabled') === "true";
			const error = el.getAttribute('error') === "true";
			const indeterminate = el.getAttribute('indeterminate') === "true";
            if(items){ 
                items[ei] = {
                    label,
                    value,
					disabled,
					error,
					indeterminate
                }
            }
        });
    }

    let selectedItem: Item = placholderItem;
    onMount(() => {
        selectedItem = placholderItem;
    })

    let root: HTMLDivElement;
    function onItemClick(item: Item) {
		console.log(item)
		// selectedItems.update(current => {
        //         let selected = [...current];
        //         if (current.includes(item)) {
        //             selected = selected.filter(i => i !== item)
        //         } else {
        //             selected = [...selected, item]
        //         }
        //         return selected;
        //     })
		console.log('selected: ', selectedItems);
		if (selectedItems.includes(item)) {
			selectedItems = [...selectedItems.filter(i => i !== item)]
		} else {
			selectedItems = [...selectedItems, item]
		}
		console.log('selected: ', selectedItems);
        root.dispatchEvent(makeEvent('select', selectedItems))
    }

</script>
<svelte:options tag="dpdhl-checkbox-group" />

<div bind:this={root} class="root">
	{#each items as item}
		<dpdhl-checkbox
			on:check={() => onItemClick(item)}
			selected={selectedItems.includes(item)}
			value={item.value}
			disabled={item.disabled}
			error={item.error}>
			{item.label}
		</dpdhl-checkbox>
	{/each}
</div>


<div bind:this={container}>
    <slot />
</div>

<style>
	.root {
        display:        flex;
        flex-direction: column;
        gap:            var(--radio-group__items-gap, 1.5rem);
    }

</style>