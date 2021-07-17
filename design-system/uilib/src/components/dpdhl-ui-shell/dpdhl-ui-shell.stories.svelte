<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'


    let open = false
    let time = "00:00"
    setInterval(calcTime, 10*1*1000)
    calcTime();

    function calcTime(){
        const d = new Date();
        const h = d.getHours().toString().padStart(2,'0')
        const m = d.getMinutes().toString().padStart(2,'0')
        time = `${h}:${m}`
    }

</script>


<Meta 
    title="Components/UI Shell" 
    component={null} 
    argTypes={{
        topHeight:{
            name: 'Top Height [em]',
            control: {
                type: 'range',
                min: 1,
                max: 10,
                step: 1,
            },
        },
        navWidth:{
            name: 'Nav Width [em]',
            control: {
                type: 'range',
                min: 1,
                max: 10,
                step: 1,
            },
        },
        contentHeight:{
            name: 'Content Height [em]',
            control: {
                type: 'range',
                min: 1,
                max: 100,
                step: 1,
            },
        },
    }}
/>

<Template let:args>
    <dpdhl-ui-shell>

        <div slot="top" class="top" style={`height: ${args.topHeight}em`}>
            Slot: Top
        </div>

        <div slot="nav" style={`width: ${args.navWidth}em`}>
            Slot: Nav
        </div>

        <div slot="content" style={`height: ${args.contentHeight}em`}>
            Slot: Content
        </div>


    </dpdhl-ui-shell>

</Template>

<Story name="Primary" args={{
    topHeight: 4,
    navWidth: 10,
    contentHeight: 30,
}} />

<style>

    div[slot="top"]{
        background-color: var(--color-gray30);
        height:           100%;
        width:            100%;
        display:          grid;
        place-items:      center;
    }

    div[slot="nav"]{
        background-color: var(--color-gray10);
        height:           100%;
        width:            100%;
        display:          grid;
        place-items:      center;
    }

    div[slot="content"]{
        background-color: var(--color-gray20);
        height:           100%;
        width:            100%;
        display:          grid;
        place-items:      center;
    }


    .sidebar-toggler{
        width:  2em;
        height: 2em;

        transform:  rotate(0deg);
        cursor:     pointer;
        transition: transform 0.2s;
    }
    .sidebar-toggler.open {
        transform: rotate(90deg);
    }
    

    h4 {
        text-align: center;
    }
    .left,
    .right,
    .middle{
        display:         flex;
        flex-direction:  row;
        gap:             1em;
        align-items:     center;
        justify-content: center;
    }
    
    .left img{
        height: 4em;
    }
</style>



<Story name="Example" args={{
    logosrc: "https://logoipsum.com/logo/logo-10.svg",
    title: "Page Title",
}} let:args>
    <dpdhl-ui-shell>

        <dpdhl-app-bar slot="top">
            <div slot="left" class="left">
                <dpdhl-icon
                    class:open
                    class="sidebar-toggler" 
                    width="32" 
                    height="32" 
                    icon="menu_burger" 
                    on:click={() => open = !open }
                />
                <img src={args.logosrc} alt="logo" />
                <h3>{args.title}</h3>
            </div>

            <div slot="middle" class="middle">
                <dpdhl-input placeholder="Suche"/>
            </div>

            <div slot="right" class="right">
                <h4>{time} Uhr</h4>
                <dpdhl-icon icon="exception" width=24 height=24 />
                <dpdhl-icon icon="helpline" width=24 height=24 />
                <dpdhl-icon icon="user_circle" width=24 height=24 />
            </div>
        </dpdhl-app-bar>

        <nav slot="nav">
            <dpdhl-sidebar open={open?'':undefined} >
                <dpdhl-sidebar-item label="Product Launches" link="https://www.deutschepost.de" icon="product_launches" />
                <dpdhl-sidebar-item label="Send Parcel"      link="https://www.deutschepost.de" icon="send_parcel" />
                <dpdhl-sidebar-item label="Public Sector"    link="https://www.deutschepost.de" icon="public_sector" />
                <dpdhl-sidebar-item label="Coffee Break"     link="https://www.deutschepost.de" icon="coffee_break" />
                <dpdhl-sidebar-item label="Departed"         link="https://www.deutschepost.de" icon="departed" />
            </dpdhl-sidebar>
        </nav>

        <main slot="content">
            <h4>Content</h4>
        </main>


    </dpdhl-ui-shell>

</Story>
