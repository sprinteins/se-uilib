<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
</script>

<Meta title="11_Components/Toggle" component={null} />

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
		<dpdhl-toggle
			on:check={() => console.log("Checked")}
			name="checkbox-example"
			disabled={args.disabled}
			checked={args.checked}
			error={args.error}>
		</dpdhl-toggle>
  	</main>
</Story>

<style></style>
