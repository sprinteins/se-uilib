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
        padding:       var(--button__padding, 1rem);
        min-width:     var(--button__min-width, 11rem);
        line-height:   var(--button__line-height, 20px);
        
    }

    /*
     * we use [disabled].disable to create a stronger css rule
     * to overwrite the stylings
     */
    button[disabled].disabled,
    button[disabled].disabled:hover {
        /* filter: var(--button__disabled-filter, brightness(70%)); */
        /* background: var(--color-gray05); */
        color:      var(--color-gray20);
        /* border:     none; */
    }

    button:hover {
        filter: var(--button__hover-filter, brightness(115%)) ;
    }

    button.primary:active,
    button.secondary:active,
    button.text:active,
    button.postyellow:active{

        filter: var(--button__active, brightness(85%));
    }

    button.primary {
        border:     var(--button--primary__border, none);
        color:      var(--button--primary__color, var(--color-white));
        background: var(--button--primary__background, var(--color-dhlred));
    }

    button.primary.disabled {
        background: var(--color-gray05);
        color:      var(--color-gray20);
    }

    button.secondary {
        border:     var(--button--secondary__border, var(--color-dhlred) 0.2em solid);
        color:      var(--button--secondary__color, var(--color-dhlred));
        background: var(--button--secondary__background, var(--color-white));
    }

    button.secondary.disabled {
        border-color: var(--color-gray05);
    }

    button.text {
        border:     var(--button--text__border, none);
        color:      var(--button--text__color, var(--color-dhlred));
        background: var(--button--text__background, none);
    }
    button.text:hover {
        filter:     var(--button--text--hover__filter, unset);
        background: var(--button--text--hover__background, var(--color-gray08));
    }
    button.text:active{
        background: var(--button--text--active__background, var(--color-gray08)) ;
        filter:     var(--button--text--active__filter,     brightness(85%));
    }

    button.postyellow {
        border:     var(--button--postyellow__border, none);
        background: var(--button--postyellow__background, var(--color-postyellow));
    }

    button.postyellow.disabled {
        background: var(--color-gray05);
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
