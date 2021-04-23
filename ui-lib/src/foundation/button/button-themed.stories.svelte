<!-- <script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { ThemeDPDHL } from '../../themes/theme-dpdhl'
    import { Button } from '../../components/button'
//     import '../../themes/theme-dpdhl/theme-dpdhl.svelte'
  </script>
  
  <Meta title="Foundation/Button (Themed)" />
  
  <Template let:args>
        <Button />
        <se-button ></se-button>
      <button primary={args.primary} size={args.size}>
            Unthemed Button
      </button>
    <ThemeDPDHL>
          <button primary={args.primary} size={args.size}>
            {args.label}
            </button>
    </ThemeDPDHL>
  </Template>
  
<Story name="Primary" args={{
      primary: true,
      label:"Primary",
}}/>
  
<Story name="Normal" args={{
      label:"Normal",
}}/>

<Story name="Medium" args={{
      label:"Medium",
      size: "medium"
}}/>

<Story name="Large" args={{
      label:"Large",
      size: "large"
}}/> -->