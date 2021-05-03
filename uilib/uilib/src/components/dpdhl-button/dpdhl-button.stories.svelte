<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import 'dpdhl-uilib';
    import { Type } from './type'
    import { Size } from './size'
</script>
  
<Meta title="Components/Button" component={null}/>

<Template let:args>
  <dpdhl-button {...args}>{args.label}</dpdhl-button>
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
