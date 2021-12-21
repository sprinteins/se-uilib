<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
	import { action } from "@storybook/addon-actions";

</script>

<Meta title="11_Components/Radio Button" component={null} />

<Template let:args />

<Story
	name="Primary"
	args={{
		disabled: false,
		error: false,
		checked: true,
	}}
	let:args
>
  	<main>
		<dpdhl-radio-button
			on:select={action("Selected")}
			name="checkbox-example"
			disabled={args.disabled}
			selected={args.checked}
			error={args.error}>
			<span slot="label">Label</span>
		</dpdhl-radio-button>
  	</main>
</Story>

<style></style>
