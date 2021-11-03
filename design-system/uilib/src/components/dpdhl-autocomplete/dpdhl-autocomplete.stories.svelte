<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

	let selectedItem = "";
	let selectedItems = [];
</script>

<Meta
	title="11_Components/Autocomplete"
	component={null}
	argTypes={{
		containerWidth: {
			name: "Container Width [px]",
			control: {
				type: "range",
				min: 100,
				max: 500,
				step: 1,
			},
		},
	}}
/>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/search.html -->
<Template let:args>
</Template>

<Story
	let:args
	name="Select one"
	args={{
		containerWidth: 300,
		withHelperText: true,
		helperText: "Helper text",
		error: false,
	}}
>
    <div style="width: {args.containerWidth}px;}">
        <dpdhl-autocomplete 
            placeholder="Search for item" 
            helpertext="Helper text"
		    on:selectOne={(event) => (selectedItem = event.detail)}
		    error={false}>
            <dpdhl-autocomplete-item label="Option A" value={"option-a"}/>
            <dpdhl-autocomplete-item label="Option B" value={"option-b"}/>
            <dpdhl-autocomplete-item label="Option C" value={"option-c"}/>
        </dpdhl-autocomplete>
        <div>Selected : {selectedItem}</div>
    </div>
</Story>

<Story
	let:args
	name="Select multiple"
	args={{
		containerWidth: 300,
		withHelperText: true,
		helperText: "Helper text",
		error: true,
	}}
>
	<div style="width: {args.containerWidth}px;}">
        <dpdhl-autocomplete 
            placeholder="Search for item"
            helpertext="Helper text"
			multiple={true}
			error={false}
			on:selectMany={(event) => (selectedItems = event.detail)}>
            <dpdhl-autocomplete-item label="Option A" value={"option-a"}/>
            <dpdhl-autocomplete-item label="Option B" value={"option-b"}/>
            <dpdhl-autocomplete-item label="Option C" value={"option-c"}/>
        </dpdhl-autocomplete>
        <div>Selected: {selectedItems.length && selectedItems.map((item) => (
            item.value).join(", "))}</div>
    </div>
</Story>


<style>

</style>
