<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import DPHLButton from './dpdhl-button.svelte';
    import { Size } from './dpdhl-button.svelte';
</script>
  
<Meta title="Components/Button" component={DPHLButton}/>

<Template let:args>
  <DPHLButton {...args}>{args.label}</DPHLButton>
</Template>
  
<Story name="Primary" args={{
      primary: true,
      label:"Primary",
}}/>
  
<Story name="Secondary" args={{
      primary: false,
      label:"Normal",
}}/>

<Story name="Tiny" args={{
      primary: false,
      label:"Tiny",
      size: Size.Tiny,
}}/>

<Story name="Small" args={{
      primary: false,
      label:"Small",
      size: Size.Small,
}}/>

<Story name="Medium" args={{
      primary: false,
      label:"Medium",
      size: Size.Medium,
}}/>

<Story name="Large" args={{
      primary: false,
      label:"Large",
      size: Size.Large,
}}/>