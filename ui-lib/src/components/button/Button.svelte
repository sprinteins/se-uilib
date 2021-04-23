<script>
    export let primary = false
    
    //#region Size
    
    const Size = {
        Tiny: 'tiny',
        Small: 'small',
        Normal: 'normal',
        Medium: 'medium',
        Large: 'large',
    }
    export let size = Size.Normal

    //#endregion Size

</script>
<svelte:options tag={"se-button"}/>


<button
    on:click 

    class:primary
    class:tiny   = {size === Size.Tiny}
    class:small  = {size === Size.Small}
    class:medium = {size === Size.Medium}
    class:large  = {size === Size.Large}
>
    <slot />
</button>

<style>

    button {
        color:            var(--color-primary);
        background-color: var(--color-secondary);
        
        border:        var(--color-primary) solid thin;
        border-radius: var(--button-border-radius);

        padding: var(--button-padding);

        cursor: pointer;
        
    }
    
    button.primary {
        border:           var(--color-secondary) solid thin;
        background-color: var(--color-primary);
        color:            var(--color-secondary);
    }

    button.tiny {
        padding: calc( var(--button-padding) * 0.5 );
    }

    button.small{
        padding: calc( var(--button-padding) * 0.75 );
    }

    button.medium {
        padding: calc( var(--button-padding) * 2 );
    }
    
    button.large {
        padding: calc( var(--button-padding) * 4 );
    }
</style>