<script lang="ts">

    // export let text = ""
    export let variant = "body1"
    // $: content = `<${variant}>${text}</${variant}>`;
</script>

<svelte:options tag="dpdhl-typography" />
<!-- 
<span>
    {@html content}
</span> -->

{#if variant === "h1"}
    <h1> <slot /> </h1>

{:else if variant === "h2"}
    <h2> <slot /> </h2>

{:else if variant === "h3"}
    <h3> <slot /> </h3>

{:else if variant === "h4"}
    <h4> <slot /> </h4>

{:else if variant === "h5"}
    <h5> <slot /> </h5>

{:else if variant === "h6"}
    <h6> <slot /> </h6>

{:else if variant === "subtitle1"}
    <span class="subtitle1"> <slot /> </span>

{:else if variant === "subtitle2"}
    <span class="subtitle2"> <slot /> </span>

{:else if variant === "body1"}
    <span class="body1"> <slot /> </span>

{:else if variant === "body2"}
    <span class="body2"> <slot /> </span>

{:else if variant === "button"}
    <span class="button"> <slot /> </span>

{:else if variant === "caption"}
    <span class="caption"> <slot /> </span>

{:else if variant === "label"}
    <span class="label"> <slot /> </span>

{:else if variant === "tag"}
    <span class="tag"> <slot /> </span>

{:else}
    <span> <slot /> </span>

{/if}


<style>
    h1 {
        font-size:   2rem;
        font-family: var(--font-black-condensed);
        margin:      0;
        padding:     0;
    }
    h2 {
        font-size:   1.5rem;
        font-family: var(--font-black-condensed);
        margin:      0;
        padding:     0;
    }
    h3 {
        font-size:   1.25rem;
        font-family: var(--font-black-condensed);
        margin:      0;
        padding:     0;
    }
    h4 {
        font-size:   1.125rem;
        font-family: var(--font-black-condensed);
        margin:      0;
        padding:     0;
    }
    h5 {
        font-size:   1rem;
        font-family: var(--font-black-condensed);
        margin:      0;
        padding:     0;
    }
    h6 {
        font-size:   1rem;
        font-family: var(--font-regular);
        margin:      0;
        padding:     0;
    }
    .subtitle1 {
        font-size:   1rem;
        font-family: var(--font-light-condensed);
        margin:      0;
        padding:     0;
    }
    .subtitle2 {
        font-size:   0.875rem;
        font-family: var(--font-light-condensed);
        margin:      0;
        padding:     0;
    }
    .body1 {
        font-size:   1rem;
        font-family: var(--font-regular);
        margin:      0;
        padding:     0;
    }
    .body2 {
        font-size:   0.875rem;
        font-family: var(--font-regular);
        margin:      0;
        padding:     0;
    }
    .button {
        font-size:   1rem;
        font-family: var(--font-bold);
        margin:      0;
        padding:     0;
    }
    .caption {
        font-size:   0.75rem;
        font-family: var(--font-regular);
        margin:      0;
        padding:     0;
    }
    .label {
        font-size:   0.875rem;
        font-family: var(--font-bold);
        margin:      0;
        padding:     0;
    }
    .tag{
        font-size:   0.75rem;
        font-family: var(--font-bold);
        margin:      0;
        padding:     0;
    }
</style>