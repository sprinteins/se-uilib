<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

 
</script>


<Meta title="11_Components/Select" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/select.html -->
<Template let:args>
</Template>


<Story name="Primary" args={{}}>
    <dpdhl-select placeholder="Select field">
        <dpdhl-select-item label="Option A"/>
        <dpdhl-select-item label="Option B"/>
        <dpdhl-select-item label="Option C"/>
    </dpdhl-select>
</Story>


<style>
   .actions{
       text-align: right;
   }
</style>
