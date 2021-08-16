<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import '@sprinteins/dpdhl-uilib'
</script>
  
<Meta title="11_Components/Button" component={null}/>

<Template let:args>
</Template>

<style>
      main {
            display:               grid; 
            grid-template-columns: 1fr 1fr 1fr 1fr 1fr; 
            grid-template-rows:    1fr 1fr 1fr 1fr 1fr; 
            gap: 1rem; 
      }

</style>

<Story name="Desktop" args={{disabled: false}} let:args>
      <main>
            <dpdhl-button disabled={args.disabled} type="primary">    Primary</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="secondary">  Secondary</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="ghost">      Ghost</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="text">       Text</dpdhl-button>
            <span>&nbsp;</span>

            <dpdhl-button disabled={args.disabled} type="primary"    size="small">Primary Small</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="secondary"  size="small">Secondary Small</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="ghost"      size="small">Ghost</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="text"       size="small">Text Small</dpdhl-button>
            <span>&nbsp;</span>

            <dpdhl-button disabled={args.disabled} type="primary"   size="tiny">Primary Tiny</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="secondary" size="tiny">Secondary Tiny</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="ghost"     size="tiny">Ghost</dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="text"      size="tiny">Text Tiny</dpdhl-button>
            <span>&nbsp;</span>

            <dpdhl-button disabled={args.disabled} type="primary">
                  <dpdhl-icon width=24 height=24  icon="search" />
                  <span>Search</span>
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="secondary">
                  <dpdhl-icon width=24 height=24  icon="search" />
                  <span>Search</span>
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="ghost">
                  <dpdhl-icon width=24 height=24  icon="search" />
                  <span>Search</span>
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="text">
                  <dpdhl-icon width=24 height=24  icon="search" />
                  <span>Search</span>
            </dpdhl-button>
            <span>&nbsp;</span>


            <dpdhl-button disabled={args.disabled} type="primary">
                  <span>Search</span>
                  <dpdhl-icon width=24 height=24 icon="search" />
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="secondary">
                  <span>Search</span>
                  <dpdhl-icon width=24 height=24 icon="search" />
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="ghost">
                  <span>Search</span>
                  <dpdhl-icon width=24 height=24 icon="search" />
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="text">
                  <span>Search</span>
                  <dpdhl-icon width=24 height=24  icon="search" />
            </dpdhl-button>
            <span>&nbsp;</span>

            <dpdhl-button disabled={args.disabled} type="primary">
                  <dpdhl-icon width=24 height=24  icon="search" />
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="secondary">
                  <dpdhl-icon width=24 height=24  icon="search" />
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="ghost">
                  <dpdhl-icon width=24 height=24  icon="search" />
            </dpdhl-button>
            <dpdhl-button disabled={args.disabled} type="text">
                  <dpdhl-icon width=24 height=24  icon="search" />
            </dpdhl-button>
            <span>&nbsp;</span>

      </main>
</Story>

<Story name="Mobile" args={{disabled: false}} let:args>
      <dpdhl-theme-mobile>
            <main>
                  <dpdhl-button disabled={args.disabled} type="primary">    Primary</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="secondary">  Secondary</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="ghost">      Ghost</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="text">       Text</dpdhl-button>
                  <span>&nbsp;</span>
                  

                  <dpdhl-button disabled={args.disabled} type="primary"    size="small">Primary Small</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="secondary"  size="small">Secondary Small</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="ghost"      size="small">Ghost</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="text"       size="small">Text Small</dpdhl-button>
                  <span>&nbsp;</span>

                  <dpdhl-button disabled={args.disabled} type="primary"   size="tiny">Primary Tiny</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="secondary" size="tiny">Secondary Tiny</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="ghost"     size="tiny">Ghost</dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="text"      size="tiny">Text Tiny</dpdhl-button>
                  <span>&nbsp;</span>

                  <dpdhl-button disabled={args.disabled} type="primary">
                        <dpdhl-icon width=24 height=24  icon="search" />
                        <span>Search</span>
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="secondary">
                        <dpdhl-icon width=24 height=24  icon="search" />
                        <span>Search</span>
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="ghost">
                        <dpdhl-icon width=24 height=24  icon="search" />
                        <span>Search</span>
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="text">
                        <dpdhl-icon width=24 height=24  icon="search" />
                        <span>Search</span>
                  </dpdhl-button>
                  <span>&nbsp;</span>
      
      
                  <dpdhl-button disabled={args.disabled} type="primary">
                        <span>Search</span>
                        <dpdhl-icon width=24 height=24 icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="secondary">
                        <span>Search</span>
                        <dpdhl-icon width=24 height=24 icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="ghost">
                        <span>Search</span>
                        <dpdhl-icon width=24 height=24 icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="text">
                        <span>Search</span>
                        <dpdhl-icon width=24 height=24  icon="search" />
                  </dpdhl-button>
                  <span>&nbsp;</span>
      
                  <dpdhl-button disabled={args.disabled} type="primary">
                        <dpdhl-icon width=24 height=24  icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="secondary">
                        <dpdhl-icon width=24 height=24  icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="ghost">
                        <dpdhl-icon width=24 height=24  icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="text">
                        <dpdhl-icon width=24 height=24  icon="search" />
                  </dpdhl-button>
                  <dpdhl-button disabled={args.disabled} type="icon">
                        <dpdhl-icon width=24 height=24  icon="search" />
                  </dpdhl-button>
                  
                  
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>
                  <span>&nbsp;</span>


            </main>
      </dpdhl-theme-mobile>
</Story>
