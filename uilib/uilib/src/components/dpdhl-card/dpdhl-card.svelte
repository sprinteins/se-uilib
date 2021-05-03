
<div class="card"> 
    <header>
        <slot name="header">No header was provided</slot>
    </header>

    <main>
        <slot name="content">No Content was providedd</slot>
    </main>

    <footer>
        <slot name="footer">No Footer was provided</slot>
    </footer>
</div>
<svelte:options tag={'dpdhl-card'} />

<style>
    .card {
        /* font-family: var(--font); */
        font-family: "DeliveryRegular";

        background:    var(--color-white);
        box-shadow:    0px 0px 1px rgba(0, 0, 0, 0.1), 0px 2px 12px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.1);
        border-radius: var(--border-radius);

        padding:       2em;
        height:        100%;
        width:         100%; 
        
        display:         flex;
        flex-direction:  column;
        flex-wrap:       nowrap;
        justify-content: flex-start;
        align-content:   stretch;
        align-items:     flex-start;
        gap:             1em;
    }

    header,
    main,
    footer {
        display: inline-block;
        width:   100%;
    }

    header {
        flex:       0 1 auto;
        align-self: start;
    }

    main {
        flex:       1 1 auto;
        align-self: start;
        }

    footer {
        flex:       0 1 auto;
        align-self: start;
    }
</style>