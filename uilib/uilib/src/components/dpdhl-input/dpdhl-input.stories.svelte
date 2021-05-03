<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { action } from '@storybook/addon-actions';
    
    import 'dpdhl-uilib'


</script>


<Meta title="Components/Input" component={null}/>

<Template let:args>
    <dpdhl-input {...args} />
</Template>

<style>
    
</style>

<Story name="Primary" args={{
    label: 'Username',
    placeholder: 'john'
}}/>

