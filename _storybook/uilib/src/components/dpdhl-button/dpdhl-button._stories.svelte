<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import DPHLButton from './dpdhl-button.svelte';
    import { Type } from './type'
    import { Size } from './size'
</script>
  
<Meta title="Components/Button" component={DPHLButton}/>

<Template let:args>
  <DPHLButton {...args}>{args.label}</DPHLButton>
</Template>

<Story name="Primary" args={{
      type:  Type.Primary,
      label: "Primary",
}}/>
  
<Story name="Secondary" args={{
      type:  Type.Secondary,
      label: "Secondary",
}}/>

<Story name="Text" args={{
      type:  Type.Text,
      label: "Text",
}}/>

<Story name="Postyellow" args={{
      type:  Type.Postyellow,
      label: "Text",
}}/>

<Story name="Small" args={{
      type: Type.Primary,
      label:"Small",
      size: Size.Small,
}}/>

<Story name="Tiny" args={{
      type: Type.Primary,
      label:"Tiny",
      size: Size.Tiny,
}}/>
