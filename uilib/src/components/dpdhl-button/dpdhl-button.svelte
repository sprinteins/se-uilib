<script context="module" lang="ts">
    export enum Size {
        Tiny   = 'Tiny',
        Small  = 'Small',
        Normal = 'Normal',
        Medium = 'Medium',
        Large  = 'Large',
    }

    export enum Type {
        Primary    = 'Primary',
        Text       = 'Text',
        Secondary  = 'Secondary',
        Postyellow = 'Postyellow',
    }
</script>
<script lang="ts">
     /**
      * A Button Component
      * @component
      */

    export const disabled = false;

    export let primary:boolean = false
    export let size: Size = Size.Normal
    /**
     * Type of the button: Primary, Secondary, Text, Postyellow
     */
    export let type: Type = Type.Secondary
    
</script>
<svelte:options tag={"dpdhl-button"}/>


<button
    on:click 

    class:primary    = { type === Type.Primary }
    class:secondary  = { type === Type.Secondary }
    class:text       = { type === Type.Text }
    class:postyellow = { type === Type.Postyellow }

    class:tiny       = { size === Size.Tiny}
    class:small      = { size === Size.Small}
>
    <slot />
</button>

<style>

    button {
        cursor:        pointer;
        color:         var(--color-black);
        border-radius: var(--border-radius);
        padding:       1rem;
        min-width:     11rem;
        
    }

    button:hover {
        filter: brightness(115%);
    }

    button.primary {
        border:           none;
        color:            var(--color-white);
        background-color: var(--color-dhlred);
    }

    button.secondary {
        border:           var(--color-dhlred) 0.2rem solid;
        color:            var(--color-dhlred);
        background-color: var(--color-white);
    }

    button.text {
        border:     none;
        color:      var(--color-dhlred);
        background: none;
    }

    button.postyellow {
        border:           none;
        background-color: var(--color-postyellow);
    }
    
    button.small{
        padding-top:    0.75rem;
        padding-bottom: 0.75rem;
    }

    button.tiny {
        padding-top:    0.5rem;
        padding-bottom: 0.5rem;
    }

</style>
