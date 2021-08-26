<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'
</script>


<Meta title="11_Components/Input/Text" component={null}/>

<Template let:args>
    <p><dpdhl-input/></p>
    <p><dpdhl-input placeholder={args.placeholder} /></p>
    <p><dpdhl-input {...args} /></p>
    <p><dpdhl-input disabled {...args} /></p>
    <p><dpdhl-input value="CDx93B" {...args}  /></p>
    <p><dpdhl-input value="CDx93B" disabled {...args}  /></p>
    
    <p><dpdhl-input value="CDx93B" error {...args}  /></p>
    <p><dpdhl-input value="CDx93B" error message="Incorrect value!" {...args}  /></p>
    
    <p><dpdhl-input value="CDx93B" success {...args}  /></p>
    <p><dpdhl-input value="CDx93B" success message="Correct value." {...args}  /></p>
    <p>
        <dpdhl-input message="Custom Icon">
            <dpdhl-icon slot="start-icon" icon="checkmark_circle" color="black" width=24 />
        </dpdhl-input>
    </p>
</Template>

<style>
    
</style>

<Story name="Primary" args={{
    label: 'Shipping Code',
    placeholder: 'Ab34-5',
    isRequired: false,
}}/>

