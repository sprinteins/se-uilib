<svelte:options tag={"dpdhl-checkbox"} />

<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import { get_current_component } from "svelte/internal"
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
      dispatch('check')
    };
  }
  

</script>

<span>
  <input
    {value}
    id={_name}
    name={_name}
    type="checkbox"
    bind:checked={_checked}
    on:click={handleClick}
    indeterminate={_indeterminate}
    class:disabled={_disabled}
    class:indeterminate={_indeterminate}
    class:error={_error}
  />
</span>

<style>
  input[type="checkbox"] {
    position: relative;
    cursor: pointer;
  }
  input[type="checkbox"]:before {
    content: "";
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    left: 0;
    border: 1px solid var(--color-gray45);
    border-radius: 3px;
    background-color: white;
  }
  input[type="checkbox"]:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 1.5rem;
    height: 1.5rem;
    top: 0;
    left: 0;
    border: 1px solid var(--color-postyellow);
    border-radius: 3px;
    background-color: var(--color-postyellow);
  }
  input[type="checkbox"]:checked:after {
    content: "";
    display: block;
    width: 0.4375rem;
    height: 0.625rem;
    border: solid black;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 0.3125rem;
    left: 0.5625rem;
  }
	input[type="checkbox"].disabled:not(:checked)::before {
		background-color: var(--color-gray10);
		cursor: not-allowed;
		color: grey;
  }
	input[type="checkbox"].disabled:checked::before {
		background-color: var(--color-gray10);
		cursor: not-allowed;
		color: grey;
		border: 1px solid var(--color-gray10);
  }
	input[type="checkbox"].disabled:checked:after {
		cursor: not-allowed;
  }

</style>
