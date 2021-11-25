
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLRadioGroup, DPDHLRadioItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";

    function handleSelect(event) {
        selectedItem = event.detail
    }
</script>


<Meta title="11_Components/Radio Group 1" component={null}/>

<Template let:args>
    <div class="container">
        <DPDHLRadioGroup on:select={handleSelect}>
            <DPDHLRadioItem value="option1" label="Option 1">Menu 1 - a long one</DPDHLRadioItem>
            <DPDHLRadioItem value="option2" label="Option 2">Menu 2</DPDHLRadioItem>
            <DPDHLRadioItem value="option3" label="Option 3">Menu 3</DPDHLRadioItem>
        </DPDHLRadioGroup>
    </div>

    <p>Selected: {selectedItem}</p>

</Template>

<style>
    .container {
        padding-left: 1rem;
    }
</style>

<Story name="Primary" args={{}}/>

