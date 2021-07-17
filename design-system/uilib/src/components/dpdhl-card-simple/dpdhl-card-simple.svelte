<script lang="ts">
    import '../dpdhl-card'
    import '../dpdhl-button'
    import '../dpdhl-menu'
    import { Type } from '../dpdhl-button'
    import type { MenuItem } from '../dpdhl-menu/menu-item'

    export let title = ''
    export let content = ''
    export let button_label = ''
    export let menu_items: MenuItem[] = []

</script>
<svelte:options tag={'dpdhl-card-simple'} />
{@debug Type}
<dpdhl-card>
        <section slot="header" class="header">
            <h2 >
                { title }
            </h2>
            <span class="menu"> <dpdhl-menu items={menu_items} /> </span>
        </section>

        <div slot="content">
            { content }
        </div>
        <div slot="footer" class="footer">
            <dpdhl-button on:click type={Type.Text}> { button_label } </dpdhl-button>
        </div>
</dpdhl-card>


<style>

    .header{
        display:        flex;
        flex-direction: row;
        align-items:    center;
    }

    h2{
        display:   inline-block;
        flex-grow: 1;
    }
    
    .menu {
        flex-grow: 0;
    }

    .footer{
        text-align: left;
        --button__padding: 0;
        --button__text-align: left;
    }

    
</style>