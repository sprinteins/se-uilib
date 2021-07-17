<svelte:options tag="dpdhl-quotation" />

<p>
    <slot />
</p>

<style>
    p {
        font-family: var(--font-regular);
        font-weight: normal;
        font-size:   1rem;
        color:       var(--color-dhlred);
    }
</style>