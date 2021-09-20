<script lang="ts">
    import type { MenuItem } from './menu-item'
    import "../dpdhl-icon";
    import "../dpdhl-typography"

    export let isOpen = false
    export let items: MenuItem[] = []
</script>

<svelte:options tag="dpdhl-menu" />

<svelte:body on:click={ () => { 
    if(!isOpen){
        return
    }
    isOpen = false
}} />

<button on:click|stopPropagation={( ) => {
    isOpen = !isOpen
}}>
    <span> <dpdhl-icon icon="more_horizontal" color="black" width=24 height=24 /> </span>
    {#if isOpen}
        <ul>
            {#each items as item}
                <li on:click={item.click}>
                    <dpdhl-typography variant="body1">
                        {item.label}
                    </dpdhl-typography>
                </li>
            {/each}
        </ul>
    {/if}
</button>


<style>
    span {
        cursor: pointer;
    }

    button{
        position:   relative;
        cursor:     pointer;
        outline:    none;
        background: none;
        border:     none;
    }

    ul {
        position: absolute;
        top:      20px;
        left:     0;
        width:    10rem;
        z-index:  6000;

        display:        flex;
        flex-direction: column;
        /* gap:            1rem; */
        /* padding:        1rem; */
        padding:        0;
        margin:         0;

        box-shadow:       0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1);
        list-style:       none;
        text-align:       left;
        background-color: var(--color-white);
        border-radius:    var(--border-radius);

    }

    li {
        width:   calc( 100% - 0.5rem);
        padding: 0.5rem 0 0.5rem 0.5rem;
        
    }

    li:hover {
        background-color: var(--color-gray05);
    }
</style>