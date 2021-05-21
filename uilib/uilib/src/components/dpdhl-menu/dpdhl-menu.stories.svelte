
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    
    import 'dpdhl-uilib'


</script>


<Meta title="Components/Menu" component={null}/>

<Template let:args>
    <dpdhl-menu {...args} />
</Template>

<style>
    
</style>

<Story name="Primary" args={{
    items:[
        { label:'Menu 1', click: action('Menu 1') },
        { label:'Menu 2', click: action('Menu 2') },
        { label:'Menu 3', click: action('Menu 3') },
    ]
}}/>

