<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { action } from '@storybook/addon-actions';
    import { ThemeDPDHL } from '../../themes/theme-dpdhl'
    import { ThemeBase } from '../../themes/theme-base'
    import { Button } from '../../components/button'
  </script>
  
  <Meta title="Components/Button" />
  
  <Template let:args>
            
      <p>
            <ThemeBase>
                  <Button on:click={action('theme base')}>
                        Theme Base
                  </Button>
            </ThemeBase>
      </p>

      <p>
            <ThemeDPDHL>
                  <Button on:click={action('theme dpdhl')}>
                        Theme DPDHL
                  </Button>
                  <Button on:click={action('theme dpdhl')} primary>
                        Theme DPDHL
                  </Button>
                  <Button on:click={action('theme dpdhl')} primary size="tiny">
                        Theme DPDHL Tiny
                  </Button>
                  <Button on:click={action('theme dpdhl')} primary size="small">
                        Theme DPDHL Small
                  </Button>
                  <Button on:click={action('theme dpdhl')} primary size="normal">
                        Theme DPDHL Normaal
                  </Button>
                  <Button on:click={action('theme dpdhl')} primary size="medium">
                        Theme DPDHL Medium
                  </Button>
                  <Button on:click={action('theme dpdhl')} primary size="large">
                        Theme DPDHL Large
                  </Button>
            </ThemeDPDHL>
      </p>
  </Template>
  
<Story name="Themed" args={{
      primary: true,
      label:"Primary",
}}/>
  