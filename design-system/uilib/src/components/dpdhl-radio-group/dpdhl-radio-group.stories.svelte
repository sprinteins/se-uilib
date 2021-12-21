
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLRadioGroup, DPDHLRadioItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";

    function handleSelect(event) {
        selectedItem = event.detail
        console.log(event.detail)
    }
</script>


<Meta 
title="11_Components/Radio Group" 
component={null}
argTypes={{
    itemsGap: {
        name: "Gap between items [rem]", 
    }
}}/>

<Template let:args>
    <!-- TODO: svelte-tags <dpdhl-radio-item> don't work. -->
    <div style="--radio-group__items-gap: {args.itemsGap}rem;">
        <dpdhl-radio-group on:select={handleSelect}>
            <dpdhl-radio-item value="option1">Option 1</dpdhl-radio-item>
            <dpdhl-radio-item value="option2">Option 2</dpdhl-radio-item>
            <dpdhl-radio-item value="option3" disabled={true}>Disabled option</dpdhl-radio-item>
            <dpdhl-radio-item value="option4" error={true}>Error option</dpdhl-radio-item>
            <dpdhl-radio-item value="option5">Long option - This text explains the basic theory underlying core remote sensing semulacre processing operations and provides extensive hands-on exercises using propositional logic.</dpdhl-radio-item>
        </dpdhl-radio-group>
    </div>

    <p>Selected: {selectedItem}</p>

</Template>

<style></style>

<Story name="Primary" args={{
    itemsGap: 1.5
}}/>

