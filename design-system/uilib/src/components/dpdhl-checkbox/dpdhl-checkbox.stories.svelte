<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
	import { action } from '@storybook/addon-actions'
import { CheckboxState } from "./checkbox-state";
</script>

<Meta title="11_Components/Checkbox" component={null} />

<Template let:args />

<Story
	name="Primary"
	args={{
		disabled: false,
		error: false,

	}}
	let:args
>
  	<main>
		<dpdhl-checkbox
			on:check={action("Main Action")}
			name="checkbox-example"
			disabled={args.disabled}
			state={CheckboxState.indeterminate}
			error={args.error}>
		</dpdhl-checkbox>
  	</main>
</Story>

<style></style>
