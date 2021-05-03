<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { action } from '@storybook/addon-actions';
    
    import 'dpdhl-uilib'


</script>


<Meta title="Components/Card/002 Simple" component={null}/>

<Template let:args>
    <div class="story-container">
          <div class="card-container" style="--story__height: {args.height}px; --story__width: {args.width}px;}">
                <dpdhl-card-simple
                    title={args.title}
                    content={args.content}
                    buttonlabel={args.buttonLabel}
                    button_label={args.buttonLabel}
                    menu_items={args.menuItems}
                    on:click={action('Main Action')}
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
    buttonLabel: "Main Action",
    menuItems: [
        { label:"Menu 1", click: action("Menu 1") },
        { label:"Menu 2", click: action("Menu 2") },
        { label:"Menu 3", click: action("Menu 3") },
    ]
}}/>

