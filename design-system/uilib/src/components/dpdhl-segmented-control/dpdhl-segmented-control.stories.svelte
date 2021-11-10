
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'

    $: selectedItemId = 0

    function handleSelectItem(event) {
        console.log(event.detail.id)
        selectedItemId = event.detail.id
    }
</script>


<Meta title="11_Components/Segmented Control" component={null}/>

<Template let:args>
    <div class="container">
        <dpdhl-segmented-control items={args.items} on:select={handleSelectItem} />
    </div>
</Template>

<Story name="Primary" args={{
    items:[
        { label:'Menu 1 - a long one', click: (e) => handleSelectItem(e) },
        { label:'Menu 2', click: (e) => handleSelectItem(e) },
        { label:'Menu 3', click: (e) => handleSelectItem(e) },
    ]
}}/>

<style>
    .container {
        padding-left: 1rem;
    }
</style>
