<script>
      import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
      import 'dpdhl-uilib'
</script>

  
<Meta title="Components/Card/001 Base" component={null}/>

<Template let:args>
      <div class="story-container">
            <div class="card-container" style="--story__height: {args.height}px; --story__width: {args.width}px;}">
                  <dpdhl-card>  
                        <h2 slot="header">
                              Card Header
                        </h2>
                        <div slot="content">
                              Amet nulla facilisi morbi tempus iaculis 
                              urna id volutpat lacus. Sed faucibus turpis in 
                              eu mi bibendum. Amet consectetur adipiscing elit 
                              pellentesque habitant morbi tristique.
                        </div>
                        <div slot="footer" class="footer" >
                              <dpdhl-button type="Text"> Main Action </dpdhl-button>
                        </div>
                  </dpdhl-card>
            </div>
      </div>
</Template>

<style>
      .card-container {
            width:  var(--story__width, 360px);
            height: var(--story__height, 380px);
      }

      .story-container {
            width:       100%;
            height:      100%;
            display:     grid;
            place-items: center;
            
      }

      .footer{
            text-align: left;
            --button__padding: 0;
            --button__text-align: left;
      }
</style>
  
<Story name="Primary" args={{
      width: 360,
      height: 380,
}}/>
  
