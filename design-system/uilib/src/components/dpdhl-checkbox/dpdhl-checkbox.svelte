<svelte:options tag={"dpdhl-checkbox"} />

<script lang="ts">
  /**
   * A Checkbox Component
   * @component
   */

  export let value;

  export let label = "";
  $: _label = label;

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
</script>

<span>
  <label>
    <input
      {value}
      id={_name}
      name={_name}
      type="checkbox"
      bind:checked={_checked}
      on:click
      indeterminate={_indeterminate}
      class:disabled={_disabled}
      class:indeterminate={_indeterminate}
      class:error={_error}
    />
    {_label}
  </label>
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
    width: 7px;
    height: 10px;
    border: solid black;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 5px;
    left: 9px;
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
