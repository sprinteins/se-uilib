<svelte:options tag="dpdhl-tbody" />

<slot />

<style>
    :host {
        display: table-row-group;
        
        border-top: var(--color-gray30) 1px solid;
    }
</style>