<script lang="ts">
    export let rows: {[key: string]: unknown}[] = []
    let title ="Title 1";
</script>

<svelte:options tag="dpdhl-table" />

<table>
    <slot name="head"></slot>
    <slot name="body"></slot>
</table>


