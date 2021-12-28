<svelte:options tag="dpdhl-radio" />

<script lang="ts">
	import { makeEvent } from "../../x/util/dispatch";

	/**
	 * A Radio Button Component
	 * @component
	 */
	
	export let value = "";
	$: _value = value;

	export let selected = false;
	$: _selected = selected;

	export let disabled = false;
	$: _disabled = disabled;

	export let error = false;
	$: _error = error;

	let root: HTMLDivElement;
	function handleClick(event) {
		if (_disabled) {
			event.preventDefault();
			return;
		}
		root.dispatchEvent(makeEvent('check', _value ))	
	}

</script>

<main bind:this={root}>
<div class="item" on:click={handleClick} class:disabled={_disabled}>
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
	<div class="label">
		<slot></slot>
	</div>
</div>
</main>

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
		-webkit-user-select:		none;
		-moz-user-select:		none;
		-ms-user-select:		none;
		user-select:			none;
	}

	.item.disabled {
		cursor: not-allowed;
	}

	.label {
		padding-top:	0.125rem;
		padding-left:	2.5rem;
		font-size:	1rem;
	}

	.checkmark {
		position: 		absolute;
		top:			0;
		left:			0;
		height:			1.375rem;
		width:			1.375rem;
		color:			var(--color-postyellow);
		border-radius:		50%;
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
		border-radius:		50%;
		background:		var(--color-postyellow);
	}

	.item .checkmark.disabled:after {
		background:		var(--color-gray20);
	}

</style>
