<script>
      import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
      import DPDHLCard from './dpdhl-card.svelte'
      import { DPDHLButton } from '../dpdhl-button'
</script>

  
<Meta title="Components/Card" component={null}/>

<Template let:args>
      <DPDHLCard class="card">  
            <h2 slot="header">
                  Card Header
            </h2>
            <div slot="content">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                  Mauris sem lacus, sagittis ut ornare pulvinar, bibendum eget purus.
            </div>
            <div slot="footer">
                  <DPDHLButton>Secondary Action</DPDHLButton>
                  <DPDHLButton primary="true">Main Action</DPDHLButton>
            </div>
      </DPDHLCard>
</Template>
  
<Story name="Primary" args={{}}/>
  