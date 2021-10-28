<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";
    let selectedItems = "";
</script>


<Meta title="11_Components/Autocomplete" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/search.html -->
<Template let:args>
</Template>

<Story name="One" args={{}}>
    <dpdhl-autocomplete 
        placeholder="Select field" 
        on:selectOne={(event) =>  selectedItem = event.detail}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-autocomplete>
    <div>Selected : {selectedItem}</div>
</Story>

<Story name="Multiple" args={{}}>
    <dpdhl-autocomplete 
        placeholder="Select field" 
        multiplechoice={true}
        on:selectMany={(event) =>  console.log("SELECT many: ", event.detail)}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-autocomplete>
    <div>Selected : {selectedItems}</div>
</Story>


<style>

</style>
