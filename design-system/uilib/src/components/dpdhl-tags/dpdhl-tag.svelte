<svelte:options tag="dpdhl-tag" />
<script lang="ts">
    import "../dpdhl-typography";
    type TagType = "default" | "success" | "pending" | "error" | "attention" | "alternative"
    export let type: TagType = "default"
</script>

<span class={type}>
    <dpdhl-typography variant="tag">
        <slot />
    </dpdhl-typography>
</span>

<style>
    span {
        height:        var(--tag__height, 1.5rem);
        font-size:     var(--tag__font-size, 0.75rem);
        font-style:    var(--tag__font-style, normal);
        font-weight:   var(--tag__font-weight, 900);
        border-radius: var(--tag__border-radius, 2px);
        padding:       var(--tag__padding, 0 0.5rem);
        display:       var(--tag__display, inline-grid);
        place-items:   var(--tag__place-items, center);
    }

    span.default {
        color:            var(--tag--default__color, var(--color-gray50));
        background-color: var(--tag--default__background-color, var(--color-gray20));
    }

    span.success {
        color:            var(--tag--success__color, var(--color-green-bright));
        background-color: var(--tag--success__background--color, rgba(var(--color-green-bright-rgb), 0.35));
    }

    span.pending {
        color:            var(--tag--pending__color, var(--color-yellow-dark) );
        background-color: var(--tag--pending__background--color, var(--color-yellow-bright));
    }

    span.error {
        color:            var(--tag--success__color, var(--color-dhlred) );
        background-color: var(--tag--success__background--color, var(--color-dhlred-bright));
    }

    span.attention {
        color:            var(--tag--attention__color, var(--color-orange) );
        background-color: var(--tag--attention__background--color, var(--color-orange-bright));
    }

    span.alternative {
        color:            var(--tag--alternative__color, var(--color-blue) );
        background-color: var(--tag--alternative__background--color, var(--color-blue-bright));
    }


</style>