<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'
</script>
  
<Meta title="11_Components/Checkbox" component={null}/>

<Template let:args>
</Template>

<style>
      main {
   
      }

</style>

<Story name="Primary" args={{disabled: false, indeterminate: false, error: false}} let:args>
      <main>
            <dpdhl-checkbox label="Label">    
            <span>&nbsp;</span>
      </main>
</Story>

    <!-- disabled={args.disabled} 
                  indeterminate={args.indeterminate} 
                  error={args.error}  -->