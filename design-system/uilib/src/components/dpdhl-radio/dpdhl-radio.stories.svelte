<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
	import { action } from "@storybook/addon-actions";

</script>

<Meta title="11_Components/Radio" component={null} />

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
		<dpdhl-radio
			on:select={action("Selected")}
			name="radio-example"
			disabled={args.disabled}
			selected={args.checked}
			error={args.error}>
			<span>Label</span>
		</dpdhl-radio>
  	</main>
</Story>

<style></style>
