<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'
</script>


<Meta title="Components/Input/Text" component={null}/>

<Template let:args>
    <p><dpdhl-input/></p>
    <p><dpdhl-input placeholder={args.placeholder} /></p>
    <p><dpdhl-input {...args} /></p>
    <p><dpdhl-input disabled {...args} /></p>
    <p><dpdhl-input value="CDx93B" {...args}  /></p>
    <p><dpdhl-input value="CDx93B" disabled {...args}  /></p>
    
    <p><dpdhl-input value="CDx93B" error {...args}  /></p>
    <p><dpdhl-input value="CDx93B" error errormsg="Incorrect value!" {...args}  /></p>
    
    <p><dpdhl-input value="CDx93B" success {...args}  /></p>
    <p><dpdhl-input value="CDx93B" success successmsg="Correct value." {...args}  /></p>
</Template>

<style>
    
</style>

<Story name="Primary" args={{
    label: 'Shipping Code',
    placeholder: 'Ab34-5',
    isRequired: false,
}}/>

