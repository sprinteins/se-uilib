<script lang="ts">

    export let title = ''
    export let footer = ''

</script>

<svelte:options tag="dpdhl-table" />

{#if title}<h4>{title}</h4>{/if}
<table class="table">
    <slot name="head" class="head"></slot>
    <slot name="body" class="body"></slot>
</table>
{#if footer}<p class="footer">{footer}</p>{/if}


<style>
    table {
        border-top:      var(--color-gray45) 0.3rem solid;
        border-bottom:   var(--color-gray45) 0.3rem solid;
        border-collapse: separate;
        border-spacing:  0;
    }

    .footer{
        color: var(--color-gray60);
    }

</style>
