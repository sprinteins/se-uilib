<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

    let selected = "";
</script>


<Meta title="11_Components/Radio Group" component={null} />

<Template let:args>
</Template>


<Story name="Primary" args={{}}>
    <dpdhl-radio-group on:select={(event) => selected = event.detail}>
        <dpdhl-radio-item label="Option A" value="option-a" />
        <dpdhl-radio-item label="Option B" value="option-b" disabled={true}/>
        <dpdhl-radio-item label="Option C" value="option-c" error={true}/>
    </dpdhl-radio-group>
    <div class="selected">Selected: {selected}</div>
</Story>


<style>
    .selected {
        margin-top: 1rem;
    }
</style>

