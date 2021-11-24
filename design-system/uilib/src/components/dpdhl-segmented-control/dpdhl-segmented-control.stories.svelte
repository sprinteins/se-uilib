
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLSegmentedControl, DPDHLSegmentedControlItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = 0;

    function handleSelect(event) {
        selectedItem = event.detail
    }
</script>


<Meta title="11_Components/Segmented Control" component={null}/>

<Template let:args>
    <div class="container">
        <DPDHLSegmentedControl on:select={handleSelect}>
            <DPDHLSegmentedControlItem>Menu 1 - a long one</DPDHLSegmentedControlItem>
            <DPDHLSegmentedControlItem>Menu 2</DPDHLSegmentedControlItem>
            <DPDHLSegmentedControlItem>Menu 3</DPDHLSegmentedControlItem>
        </DPDHLSegmentedControl>
    </div>

    <p>Selected: {selectedItem}</p>

</Template>

<style>
    .container {
        padding-left: 1rem;
    }
</style>

<Story name="Primary" args={{}}/>

