<script>
	import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
	import '@sprinteins/dpdhl-uilib'

</script>


<Meta title="11_Components/Toast" component={null} />

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/tools/icon-library.html -->
<Template let:args>
   <dpdhl-toast isOpen={true} type="error" title="Toast Title" message="And here we go with a more detailed message.">
	  <span slot="icon">Icon</span>
   </dpdhl-toast>
</Template>

<style>

</style>

<Story name="Primary" args={{
	width:  64,
	height: 64,
	color: '#000000',
}}/>
