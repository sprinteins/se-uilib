<svelte:options tag={"dpdhl-radio-button"} />

<script lang="ts">

	/**
	 * A Radio Button Component
	 * @component
	 */

	import { createEventDispatcher } from 'svelte';
    import { get_current_component } from "svelte/internal";

    const component = get_current_component()
    const svelteDispatch = createEventDispatcher()

    export function dispatch(name, detail) {
        svelteDispatch(name, detail)
        component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
    }
	
	export let value = "";
	$: _value = value;

	export let selected = false;
	$: _selected = selected;

	export let disabled = false;
	$: _disabled = disabled;

	export let error = false;
	$: _error = error;

	function handleClick(event) {
		if (_disabled) {
			event.preventDefault();
		} else {
			dispatch('select', {
				value: _value
			})
		};
	}

</script>


<span class="item" on:click={handleClick}>
	<input 
		checked={_selected} 
		type="checkbox" 
		name="amount" 
		value={_value} />
	<span 
		class="checkmark" 
		class:disabled={_disabled}
		class:error={_error}>
	</span>
	<dpdhl-typography variant="body1" class="label">
		<slot></slot>
	</dpdhl-typography>
</span>


<style>

	/* Hide the default radio button */
	.item input {
		position:		absolute;
		opacity:		0;
		height:			0;
		width:			0;
		cursor:			pointer;
	}

	.item {
		display: 				block;	
		position: 				relative;
		cursor: 				pointer;
		-webkit-user-select:	none;
		-moz-user-select:		none;
		-ms-user-select:		none;
		user-select:			none;
		height:					2rem;
	}

	.label {
		position: absolute;
		padding-top: 	0.125rem;
		padding-left: 	2.5rem;
		font-size: 		1rem;
	}

	.checkmark {
		position: 		absolute;
		top:			0;
		left:			0;
		height:			1.375rem;
		width:			1.375rem;
		color:			var(--color-postyellow);
		border-radius:	50%;
		border:			1px solid var(--color-gray45);
	}

	.checkmark.error {
		border-color: var(--color-dhlred);
	}

	.checkmark.disabled {
		background-color: var(--color-gray08);
	}

	.item:hover input ~ .checkmark {
		background-color: var(--color-gray08);
	}

	/* Checkmark when checked */
	.item input:checked ~ .checkmark {
		color: var(--color-postyellow);
	}

	/* Checkmark when not checked */
	.checkmark:after {
		content:	"";
		position:	absolute;
		display:	none;
	}

	/* Show the mark when checked */
	.item input:checked ~ .checkmark:after {
		display:	block;
		color:		var(--color-postyellow);
	}

	/* Style the circle */
	.item .checkmark:after {
		top:			0.375rem;
		left:			0.375rem;
		width:			0.625rem;
		height:			0.625rem;
		border-radius:	50%;
		background:		var(--color-postyellow);
	}

	.item .checkmark.disabled:after {
		background:		var(--color-gray20);
	}

</style>
