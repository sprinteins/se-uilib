<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
	import { action } from '@storybook/addon-actions'
</script>

<Meta title="11_Components/Checkbox" component={null} />

<Template let:args />

<Story
	name="Primary"
	args={{
		disabled: false,
		indeterminate: false,
		error: false,
		checked: true,
	}}
	let:args
>
  	<main>
		<dpdhl-checkbox
			on:check={action("Main Action")}
			name="checkbox-example"
			disabled={args.disabled}
			checked={args.checked}
			indeterminate={args.indeterminate}
			error={args.error}>
		</dpdhl-checkbox>
  	</main>
</Story>

<style></style>
