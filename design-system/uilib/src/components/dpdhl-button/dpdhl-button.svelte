<script lang="ts">

    import { Size } from './size'
    import { Type } from './type'

    /**
      * A Button Component
      * @component
      */

    export let disabled = false
    $: _disabled = disabled

    export let size: Size = Size.Normal
    /**
     * Type of the button: Primary, Secondary, Text, Postyellow
     */
    export let type: string = Type.Secondary
    
</script>
<svelte:options tag={'dpdhl-button'}/>


<button
    on:click 
    disabled={_disabled}
    class:disabled={_disabled}

    class:primary    = { type === Type.Primary }
    class:secondary  = { type === Type.Secondary }
    class:text       = { type === Type.Text }
    class:postyellow = { type === Type.Postyellow }
    class:ghost      = { type === Type.Ghost }

    class:tiny       = { size === Size.Tiny}
    class:small      = { size === Size.Small}
>
    <slot>No content provided</slot>
</button>

<style>

    button {
        font-size:     var(--button__font-size, var(--font-size));
        font-family:   var(--button__font-family, var(--font-bold));
        font-weight:   var(--button__font-weight, normal);
        color:         var(--button__color, var(--color-black));
        text-align:    var(--button__text-align, center);

        cursor:        var(--button__cursor, pointer);

        border-radius: var(--button__border-radius, var(--border-radius));
        padding:       var(--button__padding, 0.75rem);
        min-width:     var(--button__min-width, 6rem);
        line-height:   var(--button__line-height, 20px);
        box-sizing:    var(--button__box-sizing, border-box);
        
    }

    button.primary {
        border:     var(--button--primary__border, none);
        color:      var(--button--primary__color, var(--color-gray90));
        background: var(--button--primary__background, var(--color-postyellow));
    }
    button.primary:hover {
        background: var(--button--primary--hover__background, var(--color-gray60));
        color:      var(--button--primary--hover__color, var(--color-white));
    }
    button.primary:active {
        filter: var(--button--primary--active, brightness(85%));
    }
    button.primary.disabled {
        background: var(--color-gray20);
        color:      var(--color-gray50);
    }

    button.secondary {
        border:     var(--button--secondary__border, none);
        color:      var(--button--secondary__color, var(--color-gray90));
        background: var(--button--secondary__background, var(--color-gray20));
    }
    button.secondary:hover{
        background: var(--button--primary--hover__background, var(--color-gray60));
        color:      var(--button--primary--hover__color, var(--color-white));
    }
    button.secondary:active{
        filter: var(--button--secondary--active, brightness(85%));
    }
    button.secondary.disabled {
        background: var(--button--secondary--disabled__background, var(--color-gray20));
        color:      var(--button--secondary--disabled__color, var(--color-gray50));
    }

    button.ghost {
        border:     var(--button--ghost__border, var(--color-dhlred) 0.1rem solid);
        color:      var(--button--ghost__color, var(--color-dhlred));
        background: var(--button--ghost__background, var(--color-white));
    }
    button.ghost:hover{
        background: var(--button--ghost--hover__background, var(--color-dhlred));
        color:      var(--button--ghost--hover__color, var(--color-white));
    }
    button.ghost:active{
        filter: var(--button--ghost--active, brightness(85%));
    }

    button.ghost.disabled {
        border:     var(--button--ghost--disabled__border, var(--color-gray20) 0.1rem solid);
        background: var(--button--ghost--disabled__background, var(--color-white));
        color:      var(--button--ghost--disabled__color, var(--color-gray50));
    }

    button.text {
        border:     var(--button--text__border, none);
        color:      var(--button--text__color, var(--color-dhlred));
        background: var(--button--text__background, none);
    }
    button.text:hover {
        border:     var(--button--text--hover__border, var(--color-dhlred) 0.1rem solid);
        color:      var(--button--text--hover__color, var(--color-dhlred));
        background: var(--button--text--hover__background, var(--color-white));
    }
    button.text:active{
        filter: var(--button--text--active, brightness(85%));
    }
    button.text.disabled {
        border:     var(--button--text--disabled__border, none);
        color:      var(--button--text--disabled__color, var(--color-gray50));
        background: var(--button--text--disabled__background, transparent);
    }
    
    
    button.small{
        padding-top:    var(--button--small__padding-top, 0.5em);
        padding-bottom: var(--button--small__padding-bottom, 0.5em);
    }

    button.tiny {
        padding-top:    var(--button--tiny__padding-top, 0.2em);
        padding-bottom: var(--button--tiny__padding-bottom, 0.2em);
    }

</style>
