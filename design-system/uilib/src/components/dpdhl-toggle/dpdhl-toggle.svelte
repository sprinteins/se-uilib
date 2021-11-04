<svelte:options tag={"dpdhl-toggle"} />

<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { get_current_component } from "svelte/internal";

	/**
	 * A Toggle Component
	 * @component
	 */

	export let name = "";
	$: _name = name;

	export let checked = false;
	$: _checked = checked;


	const component = get_current_component()
	const svelteDispatch = createEventDispatcher()
	
	const dispatch = (name, detail = null) => {
		svelteDispatch(name, detail)
		component.dispatchEvent && component.dispatchEvent(new CustomEvent(name, { detail }))
	}

	function handleClick(event) {
		dispatch('check')
	}
  
</script>

<label class="switch">
	<input 
		id={_name}
		name={_name}
		type="checkbox"
		bind:checked={_checked}
		on:click={handleClick}
	>
	<span class="slider"></span>
</label>

<style>
	.switch {
		position: 	relative;
		display: 	inline-block;
		width: 		2.125rem;
		height: 	0.875rem;
		margin: 	0.375rem;
	}

	/* Hide default HTML checkbox */
	.switch input {
		opacity: 	0;
		width: 		0;
		height: 	0;
	} 

	.slider {
		position: 			absolute;
		cursor: 			pointer;
		top: 				0;
		left: 				0;
		right: 				0;
		bottom: 			0;
		background-color: 	var(--color-gray30);
		-webkit-transition: .4s;
		transition: 		.4s;
		border-radius: 		2.125rem;
	}

	.slider:before {
		position: 			absolute;
		content: 			"";
		height: 			1.25rem;
		width: 				1.25rem;
		left: 				-0.125rem;
		bottom: 			-0.125rem;
		background-color: 	white;
		-webkit-transition: .4s;
		transition: 		.4s;
		border-radius: 		50%;
		box-shadow: 		0 3px 5px rgba(0,0,0,0.12), 0 3px 5px rgba(0,0,0,0.24);
	}

	input:checked + .slider {
		background-color: var(--color-green-dark);
	}

	input:focus + .slider {
		box-shadow: 0 0 1px var(--color-green-dark);
	}

	input:checked + .slider:before {
		-webkit-transform: 	translateX(1.3125rem);
		-ms-transform: 		translateX(1.3125rem);
		transform: 			translateX(1.3125rem);
	}


</style>
