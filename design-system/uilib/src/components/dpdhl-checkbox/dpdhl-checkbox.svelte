<svelte:options tag={"dpdhl-checkbox"} />

<script lang="ts">

	import { makeEvent } from '../../x/util/dispatch'
	import { CheckboxState } from './checkbox-state'

	/**
	 * A Checkbox Component
	 * @component
	 */

	export let value;

	export let name = "";
	$: _name = name;

	export let state = CheckboxState.none;
	$: _state = state;

	$: _checked = _state === CheckboxState.checked;
	$: _indeterminate = _state === CheckboxState.indeterminate;

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
		root.dispatchEvent(makeEvent('check'))
	}
 
</script>

<span bind:this={root}>
	<input
		{value}
		id={_name}
		name={_name}
		type="checkbox"
		bind:checked={_checked}
		on:click={handleClick}
		bind:indeterminate={_indeterminate}
		class:disabled={_disabled}
		class:indeterminate={_indeterminate}
		class:error={_error}
	/>
</span>


<style>
	input {
		position: 			relative;
		cursor: 			pointer;
		width: 				1.5rem;
		height: 			1.5rem;
		-moz-appearance:		none;
	}

	/* box */
	input:before {
		content: 			"";
		display: 			block;
		position: 			absolute;
		width: 				1.5rem;
		height: 			1.5rem;
		top: 				0;
		left: 				0;
		border: 			1px solid var(--color-gray45);
		border-radius:			3px;
		background-color:		white;
	}

	/* box checked */
	input:checked:before {
		border: 			1px solid var(--color-postyellow);
		background-color: 		var(--color-postyellow);
	}
	/* check */
	input:checked:after {
		content: 			"";
		display: 			block;
		width: 				0.4375rem;
		height: 			0.625rem;
		border: 			solid var(--color-white);
		transform: 			rotate(45deg);
		position: 			absolute;
		top: 				0.3125rem;
		left: 				0.5625rem;
		border-width: 			0 1px 1px 0;
		-webkit-transform: 		rotate(45deg);
		-ms-transform: 			rotate(45deg);
	}

	/* box disabled */
	input.disabled:not(:checked):before {
		background-color: 		var(--color-gray10);
		cursor: 			not-allowed;
		border: 			1px solid var(--color-gray10);
		color: 				grey;
	}
	/* box checked disabled */
	input.disabled:checked:before {
		background-color: 		var(--color-gray10);
		cursor: 			not-allowed;
		color: 				grey;
		border: 			1px solid var(--color-gray10);
	}
	/* check disabled */
	input.disabled:checked:after {
		cursor: 			not-allowed;
		content: 			"";
		display: 			block;
		width: 				0.4375rem;
		height: 			0.625rem;
		border: 			solid var(--color-gray60);
		position: 			absolute;
		top: 				0.3125rem;
		left: 				0.5625rem;
		transform: 			rotate(45deg);
		border-width: 			0 1px 1px 0;
		-webkit-transform: 		rotate(45deg);
		-ms-transform: 			rotate(45deg);
	}

	input.indeterminate:before {
		border: 		1px solid var(--color-postyellow);
		background-color: 	var(--color-postyellow);
	}

	/* indeterminate  */
	input.indeterminate:after {
		content: 		"";
		display: 		block;
		width: 			0.5rem;
		height: 		0.2rem;
		border: 		solid var(--color-white);
		position: 		absolute;
		top: 			0.8rem;
		left: 			0.5625rem;
		border-width: 		1px 0 0 0;
	}

	/* indeterminate  */
	input.indeterminate.error:after {
		content: 		"";
		display: 		block;
		width: 			0.5rem;
		height: 		0.2rem;
		border: 		solid var(--color-dhlred);
		position: 		absolute;
		top: 			0.8rem;
		left: 			0.5625rem;
		border-width: 		1px 0 0 0;
	}

	/* error */
	input.error:before {
		border: 		1px solid var(--color-dhlred);
		background-color: 	var(--color-dhlred-light);
	}
	input.error:checked:after {
		content: 		"";
		display: 		block;
		width: 			0.4375rem;
		height: 		0.6rem;
		border: 		solid var(--color-dhlred);
		transform: 		rotate(45deg);
		position: 		absolute;
		top: 			0.3125rem;
		left: 			0.5625rem;
		border-width: 		0 1px 1px 0;
		-webkit-transform: 	rotate(45deg);
		-ms-transform: 		rotate(45deg);
	}
</style>
