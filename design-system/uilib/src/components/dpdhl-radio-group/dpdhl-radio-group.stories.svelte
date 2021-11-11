
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    $: selectedItemName = ""

    function handleSelectItem(event) {
        console.log(event.detail.name)
        selectedItemName = event.detail.name
    }

    const items = [
        { label:'Menu 1', value: 'menu-1' },
        { label:'Menu 2', value: 'menu-2' },
        { label:'Menu 3', value: 'menu-3' },
    ]
</script>


<Meta title="11_Components/Radio Group" component={null}/>

<Template let:args>
    <div class="container">
        <dpdhl-radio-group items={items} on:select={handleSelectItem} />
    </div>
    <p>Selected Item: {selectedItemName} </p>
</Template>

<Story name="Primary" args={{
    items:[
        { label:'Menu 1', value: 'menu-1' },
        { label:'Menu 2', value: 'menu-2' },
        { label:'Menu 3', value: 'menu-3' },
    ]
}}/>

<style>
    .container {
        padding-left: 1rem;
    }
</style>
