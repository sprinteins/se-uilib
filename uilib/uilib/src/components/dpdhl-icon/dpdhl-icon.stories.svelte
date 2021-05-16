<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    
    import 'dpdhl-uilib'
</script>


<Meta title="Components/Icon" component={null}/>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/tools/icon-library.html -->
<Template let:args>
   <dpdhl-icon width={args.width} height={args.height} icon="arrow_back" />
   <dpdhl-icon width={args.width} height={args.height} icon="plus_circle" />
   <dpdhl-icon width={args.width} height={args.height} icon="file_pdf" />
   <dpdhl-icon width={args.width} height={args.height} icon="copy" />
   <dpdhl-icon width={args.width} height={args.height} icon="public_sector" />
   <dpdhl-icon width={args.width} height={args.height} icon="consumer" />
</Template>

<style>
   
</style>

<Story name="Primary" args={{
    width:  64,
    height: 64,
}}/>
