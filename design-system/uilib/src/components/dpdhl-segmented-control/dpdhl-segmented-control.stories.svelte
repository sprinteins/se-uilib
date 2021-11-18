
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLSegmentedControl, DPDHLSegmentedControlItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    $: selected = 0;

    function handleSelect(id) {
        selected = id;
    }
</script>


<Meta title="11_Components/Segmented Control" component={null}/>

<Template let:args>
    <!-- <div class="container">
        <dpdhl-segmented-control>
            <dpdhl-segmented-control-item>Menu 1 - a long one</dpdhl-segmented-control-item> 
            <dpdhl-segmented-control-item>Menu 2</dpdhl-segmented-control-item>
            <dpdhl-segmented-control-item>Menu 3</dpdhl-segmented-control-item>
        </dpdhl-segmented-control>
    </div> -->

    <div class="container">
        <DPDHLSegmentedControl>
            <DPDHLSegmentedControlItem>Item 1</DPDHLSegmentedControlItem>
            <DPDHLSegmentedControlItem>Item 2</DPDHLSegmentedControlItem>
            <DPDHLSegmentedControlItem>Item 3</DPDHLSegmentedControlItem>
        </DPDHLSegmentedControl>
    </div>

    <p>Selected:{selected}</p>

</Template>

<style>
    .container {
        padding-left: 1rem;
    }
</style>

<Story name="Primary" args={{}}/>

