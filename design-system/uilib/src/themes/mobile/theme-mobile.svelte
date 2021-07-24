<script>

</script>

<svelte:options tag={'dpdhl-theme-mobile'} />

<dpdhl-theme-desktop>
    <slot />
</dpdhl-theme-desktop>


<style>
    :host, :root {
    }

    /* TODO: check if :root is still needed  */
    /* It was needed because of the difference in html and angular */
    /* eslint-disable-next-line */
    :root *,
    :host * {
        --button__font-family: var(--font-regular);
        --button__min-width:   3rem;
    }


</style>