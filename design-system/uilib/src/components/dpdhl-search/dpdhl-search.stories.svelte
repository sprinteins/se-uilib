<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";
    let selectedItems = "";
</script>


<Meta title="11_Components/Search" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/select.html -->
<Template let:args>
</Template>


<Story name="Select one" args={{}}>
    <dpdhl-search 
        placeholder="Select field" 
        on:selectOne={(event) =>  selectedItem = event.detail}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-search>
    <div>Selected : {selectedItem}</div>
</Story>

<Story name="Select multiple mit Chips" args={{}}>
    <dpdhl-search 
        placeholder="Select field" 
        multiplechoice={true}
        on:selectMany={(event) =>  console.log("SELECT many: ", event.detail)}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-search>
    <div>Selected : {selectedItems}</div>
</Story>

<Story name="Search one" args={{}}>
    <dpdhl-search 
        search={true}
        placeholder="Select field" 
        on:selectOne={(event) =>  selectedItem = event.detail}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-search>
    <div>Selected : {selectedItem}</div>
</Story>

<Story name="Search multiple mit Chips" args={{}}>
    <dpdhl-search 
        search={true}
        placeholder="Select field" 
        multiplechoice={true}
        on:selectMany={(event) =>  console.log("SELECT many: ", event.detail)}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-search>
    <div>Selected : {selectedItems}</div>
</Story>


<style>

</style>
