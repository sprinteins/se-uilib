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

  export let error = true;
  $: _error = error;
</script>

<span>
  <label class="checkbox coloured">
    <input 
	  	{value}
      id={_name}
      name={_name}
      type="checkbox"
      bind:checked={_checked}
      on:click
      disabled={_disabled}
      indeterminate={_indeterminate}
      class:disabled={_disabled}
      class:indeterminate={_indeterminate}
      class:error={_error} />
    <span class="box">
      <span class="check" />
    </span>
    {_label}
  </label>
</span>

<style>

  /* Hide native checkbox */
  input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    margin: 0;
    z-index: -1;
    width: 0;
    height: 0;
    overflow: hidden;
    left: 0;
    pointer-events: none;
  }

  .checkbox {
    display: inline-block;
    transform: translateZ(0);
  }

  .box {
    vertical-align: middle;
    position: relative;
    top: 0.1875em;
  }
  .box:before {
    position: absolute;
    left: 0.5em;
    top: 0.125em;
    content: "";
    background-color: rgba(0, 0, 0, 0.5);
    height: 0.25em;
    width: 0.25em;
    border-radius: 100%;
    z-index: 1;
    opacity: 0;
    margin: 0;
  }
  .check {
    position: relative;
    display: inline-block;
    width: 1.25em;
    height: 1.25em;
    border: 1px solid var(--color-gray50);
    border-radius: 3px;
    overflow: hidden;
    z-index: 1;
  }
  .check:before {
    position: absolute;
    content: "";
    transform: rotate(45deg);
    display: block;
	margin-top: -0.125em;
    margin-left: 0.5em;
    width: 0;
    height: 0;
    animation: checkbox-off var(--checkbox-ripple-length)  forwards ease-out;
  }
  input[type="checkbox"]:focus + .box .check:after {
    opacity: 0.2;
  }
  input[type="checkbox"]:checked + .box .check:before {
    box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px, 0px 32px 0 20px,
      -5px 5px 0 10px, 20px -12px 0 11px;
    animation: checkbox-on var(--checkbox-ripple-length) forwards ease-out;
  }

  /* Ripple effect on click */
  input[type="checkbox"]:not(:checked) + .box:before,
  input[type="checkbox"]:not(:checked) + .box .check:after {
    animation: rippleOff var(--checkbox-animation-length) forwards ease-out;
  }
  input[type="checkbox"]:checked + .box:before,
  input[type="checkbox"]:checked + .box .check:after {
    animation: rippleOn var(--checkbox-animation-length) forwards ease-out;
  }

  /* Style for disabled inputs */
  input[type="checkbox"][disabled]:not(:checked) ~ .box .check:before {
		background-color: var(--color-gray20);
		cursor: not-allowed;
		opacity: 0.7;
  }
  input[type="checkbox"][disabled] + .box .check:after {
    background-color: rgba(0, 0, 0, 0.84);
    transform: rotate(-45deg);
  }

  /* Default style for input (not disabled/error) */
  .coloured .box .check {
    color: var(--color-postyellow);
  }
  .coloured .box:before {
    background-color: var(--color-postyellow);
  }
  .coloured input[type="checkbox"]:checked + .box .check {
    color: var(--color-postyellow);
		border: 1px solid var(--color-postyellow);
  }

  /* Animations */
  @keyframes checkbox-on {
    0% {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px;
    }
    50% {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 20px 2px 0 11px;
    }
    100% {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px;
    }
  }
  @keyframes checkbox-off {
    0% {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;
    }
    25% {
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 20px -12px 0 11px, 0 0 0 0 inset;
    }
    50% {
      transform: rotate(45deg);
      margin-top: -0.25em;
      margin-left: 0.375em;
      width: 0;
      height: 0;
      box-shadow: 0 0 0 10px, 10px -10px 0 10px, 32px 0px 0 20px,
        0px 32px 0 20px, -5px 5px 0 10px, 15px 2px 0 11px, 0 0 0 0 inset;
    }
    51% {
      transform: rotate(0deg);
      margin-top: -0.125em;
      margin-left: -0.125em;
      width: 1.5em;
      height: 1.5em;
      box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
        0px 0px 0 10px inset;
    }
    100% {
      transform: rotate(0deg);
      margin-top: -0.125em;
      margin-left: -0.125em;
      width: 1.5em;
      height: 1.5em;
      box-shadow: 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0, 0 0 0 0,
        0px 0px 0 0px inset;
    }
  }
  @keyframes rippleOn {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scale(13, 13);
    }
  }
  @keyframes rippleOff {
    0% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
      transform: scale(13, 13);
    }
  }
</style>
