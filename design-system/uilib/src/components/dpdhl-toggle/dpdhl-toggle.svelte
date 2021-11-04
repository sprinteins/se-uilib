<svelte:options tag={"dpdhl-toggle"} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

	/**
	 * A Toggle Component
	 * @component
	 */

	export let value;

	export let name = "";
	$: _name = name;

	export let checked = false;
	$: _checked = checked;

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
			dispatch('check')
		};
	}
  
</script>

<label class="switch">
	<input type="checkbox">
	<span class="slider"></span>
</label>

<style>
	.switch {
		position: relative;
		display: inline-block;
		width: 34px;
		height: 14px;
		margin: 0.375rem;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 0;
		width: 0;
		height: 0;
	} 

	.slider {
		position: absolute;
		cursor: pointer;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: var(--color-gray30);
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 34px;
	}

	.slider:before {
		position: absolute;
		content: "";
		height: 20px;
		width: 20px;
		left: -2px;
		bottom: -2px;
		background-color: white;
		-webkit-transition: .4s;
		transition: .4s;
		border-radius: 50%;
		box-shadow: 0 3px 5px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.24);
		z-index: 100;
	}

	input:checked + .slider {
		background-color: var(--color-green-dark);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--color-green-dark);
	}

	input:checked + .slider:before {
		-webkit-transform: translateX(20px);
		-ms-transform: translateX(20px);
		transform: translateX(20px);
	}


</style>
