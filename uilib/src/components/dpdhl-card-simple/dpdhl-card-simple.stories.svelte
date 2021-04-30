<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { action } from '@storybook/addon-actions';
    
    import DPDHLCardSimple from './dpdhl-card-simple.svelte'


</script>


<Meta title="Components/Card/Simple" component={DPDHLCardSimple}/>

<Template let:args>
    <div class="story-container">
          <div class="card-container" style="--story__height: {args.height}px; --story__width: {args.width}px;}">
                <DPDHLCardSimple
                    title={args.title}
                    content={args.content}
                    buttonLabel={args.buttonLabel}
                    on:click={action('Clicked Main Action')}
                />
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
</style>

<Story name="Primary" args={{
    width: 360,
    height: 380,
    title: "Card Header",
    content: "Amet nulla facilisi morbi tempus iaculis urna id volutpat " +
                   "lacus. Sed faucibus turpis in eu mi bibendum. Amet consectetur" +
                   "adipiscing elit pellentesque habitant morbi tristique.",
    buttonLabel: "Main Action"
}}/>

