<script lang="ts">
import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
import '@sprinteins/dpdhl-uilib'
</script>
  
<Meta title="11_Components/Checkbox" component={null}/>

<Template let:args>
</Template>

<style>
	main {
		display:               grid; 
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
		grid-template-rows:    1fr 1fr 1fr 1fr 1fr; 
		gap: 1rem; 
	}
	.label {
		margin-left: 0.85em;
		margin-top: 0.36em;
	}

</style>

<Story 
	name="Primary" 
	args={{
      	disabled: false, 
      	indeterminate: false, 
      	error: false, 
      	checked: false,
		withLabel: true,
	  	label: "Label"
	}} 
	let:args>
      	<main>
            <dpdhl-checkbox 
            name="my-checkbox" 
            disabled={args.disabled}
            checked={args.checked}
            indeterminate={args.indeterminate}
            error={args.error}>    
				{#if args.withLabel} 
					<span slot="label" class="label">{args.label}</span>
				{/if}
			</dpdhl-checkbox>
      	</main>
</Story>
