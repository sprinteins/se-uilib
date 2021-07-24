<svelte:options tag="dpdhl-tr" />

<slot />




<style>
    :host {
        display: table-row;
    }

</style>


<svelte:head>
    <style>
        dpdhl-tbody dpdhl-tr:hover dpdhl-td,
        dpdhl-tbody dpdhl-tr:hover dpdhl-th {
            background-color: var(--color-gray05)
        }

        dpdhl-tbody dpdhl-td,
        dpdhl-tbody dpdhl-th {
            border-top: 1px solid var(--color-gray45);
        }
    </style>
</svelte:head>