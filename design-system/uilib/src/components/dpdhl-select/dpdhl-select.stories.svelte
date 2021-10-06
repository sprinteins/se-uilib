<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let selected = "";
</script>


<Meta title="11_Components/Select" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/select.html -->
<Template let:args>
</Template>


<Story name="Primary" args={{}}>
    <dpdhl-select placeholder="Select field" on:select={(event) =>  selected = event.detail}>
        <dpdhl-select-item label="Option A" value={"option-a"}/>
        <dpdhl-select-item label="Option B" value={"option-b"}/>
        <dpdhl-select-item label="Option C" value={"option-c"}/>
    </dpdhl-select>
    <div>Selected : {selected}</div>
</Story>


<style>
</style>
