<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'
    import DPDHLAppBar from './dpdhl-app-bar.svelte'
</script>


<Meta title="11_Components/App Bar" component={DPDHLAppBar}/>

<Template let:args>
    <dpdhl-app-bar>
        <h3 slot="left">Page Title (Left Slot)</h3>
        <h4 slot="middle">Middle Slot</h4>
        <h4 slot="right">11:12 (Right Slot)</h4>
    </dpdhl-app-bar>
</Template>

<style lang="scss">
    h4 {
        text-align: center;
    }
    dpdhl-app-bar.story-example .left,
    dpdhl-app-bar.story-example .right,
    dpdhl-app-bar.story-example .middle{
        display:         flex;
        flex-direction:  row;
        gap:             1em;
        align-items:     center;
        justify-content: center;
    }
    
    dpdhl-app-bar.story-example .left img{
        height: 4em;
    }
</style>

<Story name="Primary" args={{}}/>

<Story name="Example" >
    <dpdhl-app-bar class="story-example">
        <div slot="left" class="left">
            <dpdhl-icon icon="menu_burger" width=32  />
            <dpdhl-paragraph-header>Title</dpdhl-paragraph-header>
        </div>

        <div slot="middle" class="middle">
            <dpdhl-input placeholder="Suche"/>
        </div>
 
        <div slot="right" class="right">
            <h4>11:12 Uhr</h4>
            <dpdhl-icon icon="exception" width=24 height=24 />
            <dpdhl-icon icon="helpline" width=24 height=24 />
            <dpdhl-icon icon="user_circle" width=24 height=24 />
        </div>
    </dpdhl-app-bar>
</Story>
