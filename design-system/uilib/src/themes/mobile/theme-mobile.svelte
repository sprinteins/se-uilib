<script>
    import "../desktop"
</script>

<svelte:options tag={'dpdhl-theme-mobile'} />

<dpdhl-theme-desktop>
    <slot />
</dpdhl-theme-desktop>


<style>
    /* TODO: check if :root is still needed  */
    /* It was needed because of the difference in html and angular */
    /* eslint-disable-next-line */
    :root *,
    :host * {
        --button__min-width: 0;
    }


</style>