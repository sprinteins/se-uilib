<script lang="ts">
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import "@sprinteins/dpdhl-uilib";

	$: checked = false;

	function handleCheck() {
		checked = !checked
	}

</script>

<Meta title="11_Components/Checkbox" component={null} />

<Template let:args />

<Story
  name="Primary"
  args={{
    disabled: false,
    indeterminate: false,
    error: false,
    withLabel: true,
    label: "Label",
  }}
  let:args
>
  <main>
    <dpdhl-checkbox
		 	on:check={handleCheck}
      name="checkbox-example"
      disabled={args.disabled}
      checked={checked}
      indeterminate={args.indeterminate}
      error={args.error}
    >
      {#if args.withLabel}
        <span slot="label" class="label">{args.label}</span>
      {/if}
    </dpdhl-checkbox>
		<div class="checked">Checked: {checked}</div>
  </main>
</Story>

<style>
  .label {
    margin-left: 1rem;
    padding-top: 1rem;
		line-height: 1rem;
  }
	.checked {
		margin-top: 1rem;
	}
</style>
