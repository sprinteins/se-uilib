
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'
    import { DPDHLCheckboxGroup, DPDHLCheckboxItem } from './index'

    let selected = []

    function handleSelectItems(event) {
        selected = event.detail;
    }
</script>


<Meta 
title="11_Components/Checkbox Group" 
component={null}
argTypes={{
    itemsGap: {
      name: "Gap between items [rem]", 
    },
}}/>

<Template let:args>
    <div style="--checkbox-group__items-gap: {args.itemsGap}rem;">
        <DPDHLCheckboxGroup on:select={handleSelectItems}>
            <DPDHLCheckboxItem value="option1">Option 1</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option2">Option 2</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option3" disabled={true}>Disabled option</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option4" indeterminate={true}>Indeterminate option</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option5" error={true}>Error option</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option6">Long option - This text explains the basic theory underlying core remote sensing semulacre processing operations and provides extensive hands-on exercises using propositional logic.</DPDHLCheckboxItem>
        </DPDHLCheckboxGroup>
    </div>
    <p>Selected Items: {selected.length && selected.join(', ')} </p>
</Template>


<Story name="Primary" args={{
    itemsGap: 1.5
}}/>

<style></style>
