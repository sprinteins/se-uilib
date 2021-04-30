<script lang="ts">
    import { Size } from './size'
    import { Type } from './type'

     /**
      * A Button Component
      * @component
      */

    export const disabled = false;
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
        font-size:     var(--button__font-size, var(--font-size));
        font-weight:   var(--button__font-weight, bold);
        color:         var(--button__color, var(--color-black));
        text-align:    var(--button__text-align, center);

        cursor:        var(--button__cursor, pointer);

        border-radius: var(--button__border-radius, var(--border-radius));
        padding:       var(--button__padding, 1em);
        min-width:     var(--button__min-width, 11em);
        line-height:   var(--button__line-height, 20px);
        
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
        border:           var(--color-dhlred) 0.2em solid;
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
        padding-top:    0.5em;
        padding-bottom: 0.5em;
    }

    button.tiny {
        padding-top:    0.2em;
        padding-bottom: 0.2em;
    }

</style>
