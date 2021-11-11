
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    let selectedItemName = ""

    function handleSelectItem(event) {
        console.log(event.detail.name)
        selectedItemName = event.detail.name
    }
</script>


<Meta title="11_Components/Radio Group" component={null}/>

<Template let:args>
    <div class="container">
        <dpdhl-radio-group items={args.items} on:select={(event) => selectedItemName = event.detail.name} />
    </div>
    <p>Selected Item: {selectedItemName} </p>
</Template>

<Story name="Primary" args={{
    items:[
        { label:'Option 1', value: 'option-1' },
        { label:'Option 2', value: 'option-2' },
        { label:'Option 3', value: 'option-3' },
    ]
}}/>

<style>
    .container {
        padding-left: 1rem;
    }
</style>
