<script context="module" lang="ts">
    export enum ChipType {
        Normal  = "Normal",
        Primary = "Primary",
        Tag     = "Tag",
    }
</script>
<script lang="ts">
    /**
     * A Chip Component
     * @component
    */
   
    import { isNil } from "../../x/util";

    export let label = ""
    export let type: ChipType = ChipType.Normal;

    export let disabled
    $: _disabled = !isNil(disabled);

    export let active
    $: _active = !isNil(active)

</script>

<span 
    class="chip"
    class:normal   = { type === ChipType.Normal }
    class:primary  = { type === ChipType.Primary }
    class:active   = { _active }
    class:disabled = { _disabled }
>


<span>
    {label}
</span>

</span>
<svelte:options tag="dpdhl-chip" />


<style>

    .chip {
        border:        1px var(--color-gray45) solid;
        border-radius: var(--border-radius);

        padding: 0.5em;
    }

    .normal.disabled {
        color: var(--color-gray45)
    }
    

    .active{
        background-color: var(--chip__active-bg-color, var(--color-gray10));
    }

    .primary {
        background-color: var(--chip__primary-bg-color, var(--color-primary) );
        color:            var(--chip__primary-color,    var(--color-white) );
    }
    .primary.disabled{
        filter: brightness( 75%  )
    }

    

</style>