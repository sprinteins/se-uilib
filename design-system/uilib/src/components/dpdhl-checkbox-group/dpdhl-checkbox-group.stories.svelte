
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'
    import { DPDHLCheckboxGroup, DPDHLCheckboxItem } from './index'

    let selected = []

    function handleSelectItems(event) {
        selected = event.detail;
    }
</script>


<Meta title="11_Components/Checkbox Group" component={null}/>

<Template let:args>
    <div>
        <DPDHLCheckboxGroup on:select={handleSelectItems}>
            <DPDHLCheckboxItem value="option1">Option 1 - This text explains the basic theory underlying core remote sensing semulacre processing operations and provides extensive hands-on exercises using propositional logic.</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option2">Option 2</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option3">Option 3</DPDHLCheckboxItem>
        </DPDHLCheckboxGroup>
    </div>
    <p>Selected Items: {selected.length && selected.join(', ')} </p>
</Template>


<Story name="Primary" args={{}}/>

<style></style>
