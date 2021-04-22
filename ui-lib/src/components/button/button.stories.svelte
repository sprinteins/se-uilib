<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import Button from './Button.svelte';
  </script>
  
  <Meta title="Example/Button" component={Button}/>
  
  <Template let:args>
    <Button {...args}/>
  </Template>
  
  <Story name="Primary" args={{
      primary: true,
      label:"Primary",
}}/>
  
  <Story name="Secondary" args={{
      primary: false,
      label:"Normal",
}}/>