<svelte:options tag={"dpdhl-radio-button"} />

<script lang="ts">

	import { makeEvent } from '../../x/util/dispatch'
	/**
	 * A Radio Button Component
	 * @component
	 */

	export let label = "";
	$: _label = label;

	export let name = "";
	$: _name = name;

	export let checked = false;
	$: _checked = checked;

	export let disabled = false;
	$: _disabled = disabled;

	export let error = false;
	$: _error = error;

	function handleClick(event) {
		if (_disabled) {
			event.preventDefault();
		} else {
			makeEvent('check', null)
		};
	}

</script>


<container class="container" on:click={handleClick}>
	{#if _label}
        <span class="label">{_label}</span>
	{/if}
	<input 
		type="checkbox" 
		bind:checked={_checked} 
		id={_name}
		name={_name}
		class:error={_error}>
	<span class="checkmark" class:disabled={_disabled}></span>
</container>


<style>
	/* Hide the browser's default radio button */
	.container input {
		position: absolute;
		opacity: 0;
		cursor: pointer;
		height: 0;
		width: 0;
	}

	/* Customize the container */
	.container {
		display: block;	
		position: relative;
		cursor: pointer;
		-webkit-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
		user-select: none;
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

	.checkmark.disabled {
		border-color: var(--color-dhlred);
	}

	/* On mouse-over, add a grey background color */
	.container:hover input ~ .checkmark {
		background-color: #ccc;
	}

	/* When the radio button is checked, display a checkmark */
	.container input:checked ~ .checkmark {
		color: var(--color-postyellow);
	}

	/* Checkmark when not checked */
	.checkmark:after {
		content: "";
		position: absolute;
		display: none;
	}

	/* Show the circle when checked */
	.container input:checked ~ .checkmark:after {
		display: block;
		color: var(--color-postyellow);
	}

	/* Style the circle */
	.container .checkmark:after {
		top: 6px;
		left: 6px;
		width: 10px;
		height: 10px;
		border-radius: 50%;
		background: var(--color-postyellow);
	}


</style>
