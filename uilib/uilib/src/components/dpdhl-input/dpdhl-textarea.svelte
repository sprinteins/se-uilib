<script lang="ts">
    export let label = ''
    export let placeholder = ''
    export let disabled
    export let value = ''
    export let width: number
    export let height: number
    export let description = ''

    $: _disabled = disabled !== undefined
</script>

<svelte:options tag="dpdhl-textarea" />

<div class="container">
    <label>
        <span class="label">{label}</span>
        <textarea 
            style="--width:{width}px; --height:{height}px;"
            {value}
            {width}
            {height}
            disabled={_disabled} 
            {placeholder}
        ></textarea>
    </label>
    
    {#if description}
        <span class="description">{description}</span>
    {/if}
</div>

<style>
    .container{
        position: relative
    }
    .label{
        position: absolute;
        top:      1em;
        left:     1.25em;
        
        font-size:        0.5em;
        padding:          0.2em;
        color:            var(--color-gray45);
        background-color: var(--color-white);
    }
    .description{
        font-size:        0.75em;
        padding:          0.2em;
        color:            var(--color-gray45);
        background-color: var(--color-white);
    }
    textarea{
        width: var(--width, 400px);
        height: var(--height, 400px);

        padding-top:    1.5em;
        padding-left:   0.75em;
        padding-bottom: 0.75em;
        border-radius:  var(--border-radius);
        border:         1px solid var(--color-gray45);
    }
    textarea:hover{
        border: 1px solid var(--color-black);
    }
    textarea:active,
    textarea:focus, 
    textarea:not(:disabled):focus-visible {
        border-color: var(--color-black);
        box-shadow:   inset 0px 0px 0px 1px var(--color-black);
        outline:      none;
    }

    textarea:disabled {
        border-color:     var(--color-gray30);
        background-color: unset;
    }
</style>