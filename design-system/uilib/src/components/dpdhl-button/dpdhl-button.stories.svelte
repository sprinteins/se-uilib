<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'
    import { Type } from './type'
    import { Size } from './size'
</script>
  
<Meta title="Components/Button" component={null}/>

<Template let:args>
</Template>

<style>
      main {
            display:        flex;
            flex-direction: column;
            gap:            1rem;
            margin:         1rem;
      }
</style>

<Story name="Desktop" args={{}}>
      <main>

            <dpdhl-button type="primary">    Primary</dpdhl-button>
            <dpdhl-button type="secondary">  Secondary</dpdhl-button>
            <dpdhl-button type="text">       Text</dpdhl-button>
            <dpdhl-button type="postyellow"> PostYellow</dpdhl-button>
            
            <dpdhl-button type="primary"   size="small">Primary Small</dpdhl-button>
            <dpdhl-button type="secondary" size="small">Secondary Small</dpdhl-button>
            <dpdhl-button type="text"      size="small">Text Small</dpdhl-button>
            <dpdhl-button type="postyellow"size="small">PostYellow Small</dpdhl-button>
            
            <dpdhl-button type="primary"   size="tiny">Primary Tiny</dpdhl-button>
            <dpdhl-button type="secondary" size="tiny">Secondary Tiny</dpdhl-button>
            <dpdhl-button type="text"      size="tiny">Text Tiny</dpdhl-button>
            <dpdhl-button type="postyellow"size="tiny">PostYellow Tiny</dpdhl-button>
      </main>
</Story>

<Story name="Mobile" args={{}}>
      <dpdhl-theme-mobile>
            <main>
                  <dpdhl-button type="primary">    Primary</dpdhl-button>
                  <dpdhl-button type="secondary">  Secondary</dpdhl-button>
                  <dpdhl-button type="text">       Text</dpdhl-button>
                  <dpdhl-button type="postyellow"> PostYellow</dpdhl-button>
                  
                  <dpdhl-button type="primary"   size="small">Primary Small</dpdhl-button>
                  <dpdhl-button type="secondary" size="small">Secondary Small</dpdhl-button>
                  <dpdhl-button type="text"      size="small">Text Small</dpdhl-button>
                  <dpdhl-button type="postyellow"size="small">PostYellow Small</dpdhl-button>
                  
                  <dpdhl-button type="primary"   size="tiny">Primary Tiny</dpdhl-button>
                  <dpdhl-button type="secondary" size="tiny">Secondary Tiny</dpdhl-button>
                  <dpdhl-button type="text"      size="tiny">Text Tiny</dpdhl-button>
                  <dpdhl-button type="postyellow"size="tiny">PostYellow Tiny</dpdhl-button>
            </main>
      </dpdhl-theme-mobile>
</Story>
