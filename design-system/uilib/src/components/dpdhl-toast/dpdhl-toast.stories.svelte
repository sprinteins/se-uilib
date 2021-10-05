<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import '@sprinteins/dpdhl-uilib'
	import { Type } from './type'

    let open = true;

	function handleClose() {
		open = false
    }

</script>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/tools/icon-library.html -->
<Template let:args>
   <dpdhl-toast {open} on:closeToast={handleClose} type="error" title="Toast Title" message="And here we go with a more detailed message.">
	  <span slot="icon">Icon</span>
   </dpdhl-toast>
</Template>

<style>

</style>

<Meta 
    title="11_Components/Toast" 
    component={null} 
    argTypes={{
        type: {
            options: [Type.Error, Type.Notification],
			control: { type: 'select' }
    }}}
/>

<Story 
	name="Primary" 
	args={{
		isOpen: false,
		type: Type.Error,
		title: "Toast Title",
		message: 'And here we go with a more detailed message.',
	}}

/>
