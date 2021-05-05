<script lang="ts">
    export let title = ""
    export let footer = ""
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

<!-- Styling slotted elements -->
<svelte:head>
    <style lang="scss">

        dpdhl-table {
            td, th {
                padding-top:    1em;
                padding-bottom: 1em;
                padding-right:  3em;
                padding-left:   0;
                text-align: left;
            }
           
            thead th {
                font-family: var(--font-bold);
                font-weight: normal;
            }

            tbody td,
            tbody th,{
                border-top: var(--color-gray30) 1px solid;
            }

            tbody tr:hover td,
            tbody tr:hover th,{
                background-color: var(--color-gray05)
            }
        }

    </style>
</svelte:head>
<!-- 
    FOOTNOTE: `:global()` does not work for web-components
-->