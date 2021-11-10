<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
</script>

<Meta title="11_Components/Radio Button" component={null} />

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
		<dpdhl-radio-button
			on:check={() => console.log("Checked")}
			label="Label"
			name="checkbox-example"
			disabled={args.disabled}
			checked={args.checked}
			indeterminate={args.indeterminate}
			error={args.error}>
		</dpdhl-radio-button>
  	</main>
</Story>

<style></style>
