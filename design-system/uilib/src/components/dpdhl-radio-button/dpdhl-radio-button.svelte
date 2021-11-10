<svelte:options tag={"dpdhl-radio-button"} />

<script lang="ts">

	import { makeEvent } from '../../x/util/dispatch'
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

	function handleClick(event) {
		if (_disabled) {
			event.preventDefault();
		} else {
			makeEvent('check', null)
		};
	}
  

</script>

<!-- <span>
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
</span> -->

<span class="container">
  <input type="checkbox" checked={true}>
  <span class="checkmark"></span>
</span>

<style>

/* Hide the browser's default radio button */
.container input {
	position: absolute;
	opacity: 0;
	cursor: pointer;
	height: 0;
	width: 0;
}

/* Customize the container*/
.container {
	display: block;
	position: relative;
	padding-left: 35px;
	margin-bottom: 12px;
	cursor: pointer;
	font-size: 22px;
	-webkit-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

/* Create a custom radio button */
.checkmark {
	position: absolute;
	top: 0;
	left: 0;
	height: 24px;
	width: 24px;
	color: var(--color-postyellow);
	border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container:hover input ~ .checkmark {
	background-color: #ccc;
}

/* When the radio button is checked, display a checkmark */
.container input:checked ~ .checkmark {
	border: 1px solid var(--color-gray40);
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
	top: 7px;
	left: 7px;
	width: 10px;
	height: 10px;
	border-radius: 50%;
	background: var(--color-postyellow);
}
</style>
