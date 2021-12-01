<svelte:options tag={"dpdhl-checkbox"} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

	/**
	 * A Checkbox Component
	 * @component
	 */

	export let value;

	export let name = "";
	$: _name = name;

	export let checked = false;
	$: _checked = checked;

	export let indeterminate = false;
	$: _indeterminate = indeterminate;

	export let disabled = false;
	$: _disabled = disabled;

	export let error = false;
	$: _error = error;

	const component = get_current_component()
	const svelteDispatch = createEventDispatcher()
	const dispatch = (name, detail = null) => {
		svelteDispatch(name, detail)
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
	}

	function handleClick(event) {
		if (_disabled) {
			event.preventDefault();
		} else {
			dispatch('check', value)
		};
	}
  

</script>

<span class="container">
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
	<span class="label">
		<!-- <dpdhl-typography> -->
			<slot></slot>
		<!-- </dpdhl-typography> -->
	</span>
</span>

<style>

	.container {
		display: flex;
		flex-direction: row;
	}
	.label {
		margin-left: 1rem;
		line-height: 24px;
		padding-top: 0.34rem;
		word-wrap: 	normal;
	}
	input {
		position: 		relative;
		cursor: 		pointer;
		height: 		1.5rem;
		-moz-appearance:	none;
	    margin-right: 		1rem;
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
		border-radius: 		3px;
		background-color: 	white;
	}

	/* box checked */
	input:checked:before {
		border: 			1px solid var(--color-postyellow);
		background-color: 	var(--color-postyellow);
	}
	/* check */
	input:checked:after {
		content: 			"";
		display: 			block;
		width: 				0.4375rem;
		height: 			0.625rem;
		border: 			solid var(--color-white);
		border-width: 		0 1px 1px 0;
		-webkit-transform: 	rotate(45deg);
		-ms-transform: 		rotate(45deg);
		transform: 			rotate(45deg);
		position: 			absolute;
		top: 				0.3125rem;
		left: 				0.5625rem;
	}

	/* box disabled */
	input.disabled:not(:checked):before {
		background-color: 	var(--color-gray10);
		cursor: 			not-allowed;
		border: 			1px solid var(--color-gray10);
		color: 				grey;
	}
	/* box checked disabled */
	input.disabled:checked:before {
		background-color: 	var(--color-gray10);
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
		border-width: 		0 1px 1px 0;
		-webkit-transform: 	rotate(45deg);
		-ms-transform: 		rotate(45deg);
		transform: 			rotate(45deg);
		position: 			absolute;
		top: 				0.3125rem;
		left: 				0.5625rem;
	}

	input.indeterminate:before {
		border: 			1px solid var(--color-postyellow);
		background-color: 	var(--color-postyellow);
	}

	/* indeterminate  */
	input.indeterminate:after {
		content: 		"";
		display: 		block;
		width: 			0.5rem;
		height: 		0.2rem;
		border: 		solid var(--color-white);
		border-width: 	1px 0 0 0;
		position: 		absolute;
		top: 			0.8rem;
		left: 			0.5625rem;
	}

	/* indeterminate  */
	input.indeterminate.error:after {
		content: 		"";
		display: 		block;
		width: 			0.5rem;
		height: 		0.2rem;
		border: 		solid var(--color-dhlred);
		border-width: 	1px 0 0 0;
		position: 		absolute;
		top: 			0.8rem;
		left: 			0.5625rem;
	}

	/* error */
	input.error:before {
		border: 			1px solid var(--color-dhlred);
		background-color: 	var(--color-dhlred-light);
	}
	input.error:checked:after {
		content: 		"";
		display: 		block;
		width: 			0.4375rem;
		height: 		0.6rem;
		border: 		solid var(--color-dhlred);
		border-width: 	0 1px 1px 0;
		-webkit-transform: 	rotate(45deg);
		-ms-transform: 		rotate(45deg);
		transform: 			rotate(45deg);
		position: 			absolute;
		top: 				0.3125rem;
		left: 				0.5625rem;
	}
</style>
