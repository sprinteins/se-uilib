<script context="module" lang="ts">
    export enum Size {
        Tiny   = 'Tiny',
        Small  = 'Small',
        Normal = 'Normal',
        Medium = 'Medium',
        Large  = 'Large',
    }
</script>
<script lang="ts">

    export let primary:boolean = false
    export let size: Size = Size.Normal
    
</script>
<svelte:options tag={"dpdhl-button"}/>


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
        --button-color: var(--color-primary);

        cursor:           pointer;
        color:            var(--button-color);
        background-color: var(--color-secondary);        
        border:           var(--color-primary) solid thin;
        border-radius:    var(--button-border-radius);
        padding:          calc( var(--unit) * 0.5 );
        
    }
    
    button.primary {
        border:           var(--color-secondary) solid thin;
        background-color: var(--color-primary);
        color:            var(--color-secondary);
    }

    button.tiny {
        padding: calc( var(--unit) * 0.5 );
    }

    button.small{
        padding: calc( var(--unit) * 0.75 );
    }

    button.medium {
        padding: calc( var(--unit) * 2 );
    }
    
    button.large {
        padding: calc( var(--unit) * 4 );
    }





</style>
