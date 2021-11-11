<script lang="ts">
    import type { RadioButtonItem } from './radio-button-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"
    import { makeEvent } from '../../x/util/dispatch'
    import { createEventDispatcher } from 'svelte';
    import { get_current_component } from "svelte/internal";

    const component = get_current_component()
    const svelteDispatch = createEventDispatcher()

    export function dispatch(name, detail) {
        svelteDispatch(name, detail)
        component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
    }

    let selected = '20';
	
	function onChange(value) {
		selected = value;
        dispatch('select', {
			value
		})
	}

    const _disabled = false
    const _error = false

    export let items: RadioButtonItem[] = []

</script>

<svelte:options tag="dpdhl-radio-group" />

<span class="container">
    {#each items as item}
        <span class="item" on:click={() => onChange(item.value)}>
            <input 
                checked={selected===item.value} 
                type="checkbox" 
                name="amount" 
                value={item.value} />
            <span 
                class="checkmark" 
                class:disabled={_disabled}
                class:error={_error}>
            </span>
            <dpdhl-typography variant="body1" class="label">{item.label}</dpdhl-typography>
        </span>
    {/each}
</span>


<style>
    .container {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

	/* Hide the browser's default radio button */
	.item input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Customize the container */
	.item {
		display: block;	
		position: relative;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
		height: 24px;
	}

	.label {
		position: absolute;
		padding-top: 2px;
		padding-left: 40px;
		font-size: 16px;
	}

	/* Create a custom radio button */
	.checkmark {
		position: absolute;
		top: 0;
		left: 0;
		height: 22px;
		width: 22px;
		color: var(--color-postyellow);
		border-radius: 50%;
		border: 1px solid var(--color-gray45);
	}

	.checkmark.error {
		border-color: var(--color-dhlred);
	}

	.checkmark.disabled {
		background-color: var(--color-gray10);
	}

	/* On mouse-over, add a grey background color */
	.item:hover input ~ .checkmark {
		background-color: #ccc;
	}

	/* When the radio button is checked, display a checkmark */
	.item input:checked ~ .checkmark {
		color: var(--color-postyellow);
	}

	/* Checkmark when not checked */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the circle when checked */
	.item input:checked ~ .checkmark:after {
		display: block;
		color: var(--color-postyellow);
	}

	/* Style the circle */
	.item .checkmark:after {
		top: 6px;
		left: 6px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-postyellow);
	}

		/* Style the circle */
	.item .checkmark.disabled:after {
		background: var(--color-gray20);
	}


</style>
