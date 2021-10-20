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
    indeterminate: true,
    error: false,
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
    </dpdhl-checkbox>
		<div class="caption">Checked: {checked}</div>
		<div class="caption">Indeterminate: {args.indeterminate}</div>
  </main>
</Story>

<style>
	.caption {
		margin-top: 1rem;
	}
</style>
