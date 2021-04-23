<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Button from './Button.svelte';
</script>
  
<Meta title="Components/Button" component={Button}/>

<Template let:args>
  <Button {...args}>{args.label}</Button>
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