
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    let selected = ''

    function handleSelectItems(event) {
        selected = event.detail.selected
    }
</script>


<Meta title="11_Components/Checkbox Group" component={null}/>

<Template let:args>
    <div class="container">
        <dpdhl-checkbox-group items={args.items} on:select={handleSelectItems} />
    </div>
    <p>Selected Item: {selected} </p>
</Template>

<Story name="Primary" args={{
    items:[
        { label:'Option 1', value: 'option-1' },
        { label:'Option 2', value: 'option-2' },
        { label:'Option 3', value: 'option-3' },
    ]
}}/>

<style>

</style>
