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
    <div class="container">
        <div>
            <dpdhl-select 
                placeholder="Select field" 
                multipleChoice={true} 
                on:selectOne={(event) =>  selected = event.detail} 
                on:selectMany={(event) =>  console.log("SELECT many: ", event.detail)}>
                <dpdhl-select-item label="Option A" value={"option-a"}/>
                <dpdhl-select-item label="Option B" value={"option-b"}/>
                <dpdhl-select-item label="Option C" value={"option-c"}/>
            </dpdhl-select>
            <div>Selected : {selected}</div>
        </div>
    </div>

</Story>


<style>

    .container {
        display: flex;
        flex-direction: row;
    }
    .actions{
       text-align: right;
    }
</style>
