
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

        --padding:     1.5rem;
        padding:       var(--padding);
        height:        calc( 100% - 2 * var(--padding) );
        width:         calc( 100% - 2 * var(--padding) );

        display:               flex;
        flex-direction:        column;
        justify-content:       space-between;
        gap:                   1rem;
    }


</style>