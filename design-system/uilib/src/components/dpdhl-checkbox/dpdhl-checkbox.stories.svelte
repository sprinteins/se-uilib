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

</style>

<Story name="Primary" args={{disabled: false, indeterminate: false, error: true, checked: false}} let:args>
      <main>
            <dpdhl-checkbox 
            label="Label"
            name="my-checkbox" 
            disabled={args.disabled}
            checked={args.checked}
            indeterminate={args.indeterminate}
            error={args.error}
            />    
            <span>&nbsp;</span>
      </main>
</Story>
