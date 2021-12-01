
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLRadioGroup, DPDHLRadioItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";

    function handleSelect(event) {
        selectedItem = event.detail
    }
</script>


<Meta title="11_Components/Radio Group" component={null}/>

<Template let:args>
    <div>
        <DPDHLRadioGroup on:select={handleSelect}>
            <DPDHLRadioItem value="option1">Option 1</DPDHLRadioItem>
            <DPDHLRadioItem value="option2">Option 2</DPDHLRadioItem>
            <DPDHLRadioItem value="option3" disabled={true}>Disabled option</DPDHLRadioItem>
            <DPDHLRadioItem value="option4" error={true}>Error option</DPDHLRadioItem>
            <DPDHLRadioItem value="option5">Long option - This text explains the basic theory underlying core remote sensing semulacre processing operations and provides extensive hands-on exercises using propositional logic.</DPDHLRadioItem>
        </DPDHLRadioGroup>
    </div>

    <p>Selected: {selectedItem}</p>

</Template>

<style></style>

<Story name="Primary" args={{}}/>

