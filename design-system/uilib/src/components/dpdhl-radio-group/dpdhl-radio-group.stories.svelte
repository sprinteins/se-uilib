
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    let selected = ''

    function handleSelectItem(event) {
        selected = event.detail.value
    }
</script>


<Meta title="11_Components/Radio Group" component={null}/>

<Template let:args>
    <div class="container">
        <dpdhl-radio-group items={args.items} on:select={handleSelectItem} />
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
