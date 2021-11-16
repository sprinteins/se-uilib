<script lang="ts">
	import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
	import "@sprinteins/dpdhl-uilib";
	import { action } from '@storybook/addon-actions'
import { CheckboxState } from "./checkbox-state";
</script>

<Meta 
	title="11_Components/Checkbox" 
	component={null} 
	argTypes={{
        state: {
            options: [
				CheckboxState.none, 
				CheckboxState.checked, 
				CheckboxState.indeterminate
			],
      		control: { 
				type: 'radio' 
			}
        },
    }}
/>


<Template let:args />

<Story
	name="Primary"
	args={{
		disabled: false,
		error: false,
		state: CheckboxState.checked
	}}
	let:args
>
  	<main>
		<dpdhl-checkbox
			on:check={action("Main Action")}
			name="checkbox-example"
			disabled={args.disabled}
			state={args.state}
			error={args.error}>
		</dpdhl-checkbox>
  	</main>
</Story>

<style></style>
