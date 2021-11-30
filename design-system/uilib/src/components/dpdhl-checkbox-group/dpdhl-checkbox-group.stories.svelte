
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'
    import { DPDHLCheckboxGroup, DPDHLCheckboxItem } from './index'

    let selected = []

    function handleSelectItems(event) {
        console.log(event.detail)
        selected = event.detail.selected
    }
</script>


<Meta title="11_Components/Checkbox Group" component={null}/>

<Template let:args>
    <div class="container">
        <DPDHLCheckboxGroup on:select={handleSelectItems}>
            <DPDHLCheckboxItem value="option1">Menu 1 - a long one</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option2">Menu 2</DPDHLCheckboxItem>
            <DPDHLCheckboxItem value="option3">Menu 3</DPDHLCheckboxItem>
        </DPDHLCheckboxGroup>
    </div>

    <p>Selected Items: {selected.join(', ')} </p>

</Template>


<Story name="Primary" args={{}}/>

<style>
    .container {
        padding-left: 1rem;
    }
</style>
