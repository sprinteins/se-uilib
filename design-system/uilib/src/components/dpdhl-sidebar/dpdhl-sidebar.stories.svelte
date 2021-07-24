<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'    
    import '@sprinteins/dpdhl-uilib'


    let open = true
    // function toggleSidebar(){
    //     open = !open;
    // }


</script>


<Meta title="11_Components/Sidebar" component={null} />

<Template let:args>
    <div class="container">
        <dpdhl-icon
            class:open
            class="sidebar-toggler" 
            width="32" 
            height="32" 
            icon="menu_burger" 
            on:click={() => open = !open }
        />
        <dpdhl-sidebar open={open?'':undefined} >
            <dpdhl-sidebar-item label="Product Launches" link="https://www.deutschepost.de" icon="product_launches" />
            <dpdhl-sidebar-item label="Send Parcel"      link="https://www.deutschepost.de" icon="send_parcel" />
            <dpdhl-sidebar-item label="Public Sector"    link="https://www.deutschepost.de" icon="public_sector" />
            <dpdhl-sidebar-item label="Coffee Break"     link="https://www.deutschepost.de" icon="coffee_break" />
            <dpdhl-sidebar-item label="Departed"         link="https://www.deutschepost.de" icon="departed" />
        </dpdhl-sidebar>
    </div>
</Template>


<style>
    .container{
        display:        flex;
        flex-direction: column;
        height:         100%;
    }
    .sidebar-toggler{
        width:  2em;
        height: 2em;

        transform:  rotate(90deg);
        cursor:     pointer;
        transition: transform 0.2s;
    }
    .sidebar-toggler.open {
        transform: rotate(0);
    }
    dpdhl-sidebar{
        flex-grow: 1;
    }

</style>

<Story name="Primary" args={{}}/>
