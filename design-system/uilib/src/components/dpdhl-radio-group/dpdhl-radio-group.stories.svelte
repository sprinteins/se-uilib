<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let selected = "";
</script>


<Meta title="11_Components/Radio Group" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/select.html -->
<Template let:args>
</Template>


<Story name="Primary" args={{}}>
    <dpdhl-radio-group placeholder="Select field" on:select={(event) =>  selected = event.detail}>
        <dpdhl-radio-item label="Option A" value={"option-a"} disabled={false}/>
        <dpdhl-radio-item label="Option B" value={"option-b"} disabled={false}/>
        <dpdhl-radio-item label="Option C" value={"option-c"} disabled={true}/>
    </dpdhl-radio-group>
    <div>Selected : {selected}</div>
</Story>


<style></style>

