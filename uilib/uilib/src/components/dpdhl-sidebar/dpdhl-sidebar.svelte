<script lang="ts">
    import {onMount} from 'svelte'
    import type { SidebarItem } from './sidebar-item'
    import {EventRegister} from './dpdhl-sidebar-item.svelte'
    import '../dpdhl-icon'
    
    const size = 32

    export let open = undefined
    $: _open = open !== undefined

    let container: HTMLElement
    onMount(()=>{
        container.addEventListener(EventRegister, onRegisterItem)
    })

    let items: SidebarItem[] = []
    function onRegisterItem(event: CustomEvent){
        const details = event.detail as SidebarItem
        items = [...items, details]
    }

    

</script>
<svelte:options tag="dpdhl-sidebar" />

<main class:open={_open}  bind:this={container}>
    <ul>
        {#each items as item}
            <li>
                <a target="_blank" rel="noreferrer noopener" href={item.link}> 
                    {#if item.icon}
                        <dpdhl-icon width={size} height={size} icon={item.icon}></dpdhl-icon>
                    {/if}
                    {item.label} 
                </a>
            </li>
        {/each}
    </ul>

    <div class="items">
        <slot />
    </div>
</main>

<style>
    main{
        --width: 23.5em;

        position: relative;
        top:      0;
        left:     calc(-1 * (var(--width) + 1em));
        transition: left 0.2s;

        height:      100%;
        width:       23.5em;
        padding-top: 3em;

        box-shadow: var(--shadow);
    }
    main.open{
        left: 0;
    }
    ul{
        list-style: none;
        margin:     0;
        padding:    0;

        display:        flex;
        flex-direction: column;
        /* gap:            2em; */
    }

    li{
        margin:  0;
        padding: 0;

        padding-top:    1.0em;
        padding-left:   1.5em;
        padding-bottom: 1.0em;

        margin-left:  1em;
        margin-right: 1em;

        border-bottom:    1px solid var(--color-gray10);
        background-color: var(--color-white);

    }
    li a {
        display:        flex;
        flex-direction: row;
        gap:            1em;
        align-items:    center;

    }
    li:hover{
        filter: brightness(95%);
    }

    dpdhl-icon{
        width:  2em;
        height: 2em;
    }
    a{
        color:           var(--color-black);
        text-decoration: none;
    }
</style>