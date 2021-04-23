<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import DPHLButton from './dpdhl-button.svelte';
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
      size: "tiny",
}}/>

<Story name="Small" args={{
      primary: false,
      label:"Small",
      size: "small",
}}/>

<Story name="Medium" args={{
      primary: false,
      label:"Medium",
      size: "medium",
}}/>

<Story name="Large" args={{
      primary: false,
      label:"Large",
      size: "large",
}}/>