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
    class:icon       = { type === Type.Icon}

    class:tiny       = { size === Size.Tiny}
    class:small      = { size === Size.Small}
>
    <slot>No content provided</slot>
</button>

<style>

    button {
        display:         var(--button__display, flex);
        flex-direction:  var(--button__flex-direction, row);
        gap:             var(--button__gap, 0.5rem);
        justify-content: var(--button__justify-content, center);
        align-items:     var(--button__align-item, center);

        font-size:     var(--button__font-size, var(--font-size));
        font-family:   var(--button__font-family, var(--font-bold));
        font-weight:   var(--button__font-weight, normal);
        color:         var(--button__color, var(--color-black));
        text-align:    var(--button__text-align, center);

        cursor:        var(--button__cursor, pointer);

        border:        var(--button__border, none);
        border-radius: var(--button__border-radius, var(--border-radius));
        min-width:     var(--button__min-width, 6rem);
        line-height:   var(--button__line-height, 20px);
        box-sizing:    var(--button__box-sizing, border-box);
        height:        var(--button__height, 2.5rem);
        padding:       var(--button__padding, 0 0.75rem);
        
    }

    button.primary {
        color:         var(--button--primary__color, var(--color-gray90));
        background:    var(--button--primary__background, var(--color-postyellow));
        --icon__color: var(--button--primary__icon-color, var(--color-gray90));
    }
    button.primary:hover {
        background:    var(--button--primary--hover__background, var(--color-gray60));
        color:         var(--button--primary--hover__color, var(--color-white));
        --icon__color: var(--button--primary--hover__icon-color, var(--color-white));
    }
    button.primary:active:not(.disabled) {
        filter: var(--button--primary--active, brightness(85%));
    }
    button.primary.disabled {
        background:    var(--button--primary--disabled__background, var(--color-gray20));
        color:         var(--button--primary--disabled__color, var(--color-gray50));
        --icon__color: var(--button--primary--disabled__icon-color, var(--color-gray50));
    }

    button.secondary {
        background:    var(--button--secondary__background, var(--color-gray20));
        color:         var(--button--secondary__color, var(--color-gray90));
        --icon__color: var(--button--secondary__icon-color, var(--color-gray90));
    }
    button.secondary:hover{
        background:    var(--button--secondary--hover__background, var(--color-gray60));
        color:         var(--button--secondary--hover__color, var(--color-white));
        --icon__color: var(--button--secondary--hover__icon-color, var(--color-white));
    }
    button.secondary:active:not(.disabled) {
        filter: var(--button--secondary--active, brightness(85%));
    }
    button.secondary.disabled {
        background:    var(--button--secondary--disabled__background, var(--color-gray20));
        color:         var(--button--secondary--disabled__color, var(--color-gray50));
        --icon__color: var(--button--secondary--disabled__icon-color, var(--color-gray50));
    }

    button.ghost {
        border:        var(--button--ghost__border, var(--color-dhlred) 0.1rem solid);
        background:    var(--button--ghost__background, var(--color-white));
        color:         var(--button--ghost__color, var(--color-dhlred));
        --icon__color: var(--button-ghost__icon-color, var(--color-dhlred));
    }
    button.ghost:hover{
        background:    var(--button--ghost--hover__background, var(--color-dhlred));
        color:         var(--button--ghost--hover__color, var(--color-white));
        --icon__color: var(--button--ghost--hover__icon-color, var(--color-white));
    }
    button.ghost:active:not(.disabled){
        filter: var(--button--ghost--active, brightness(85%));
    }

    button.ghost.disabled {
        border:        var(--button--ghost--disabled__border, var(--color-gray20) 0.1rem solid);
        background:    var(--button--ghost--disabled__background, var(--color-white));
        color:         var(--button--ghost--disabled__color, var(--color-gray50));
        --icon__color: var(--button--ghost--disabled__icon-color, var(--color-gray50));
    }

    button.text {
        border:        var(--button--text__border, transparent 0.1rem solid);
        background:    var(--button--text__background, none);
        color:         var(--button--text__color, var(--color-dhlred));
        --icon__color: var(--button--text__icon-color, var(--color-dhlred));
    }
    button.text:hover {
        border:        var(--button--text--hover__border, var(--color-dhlred) 0.1rem solid);
        background:    var(--button--text--hover__background, var(--color-white));
        color:         var(--button--text--hover__color, var(--color-dhlred));
        --icon__color: var(--button--text--hover__icon-color, var(--color-dhlred));
    }
    button.text:active:not(.disabled){
        filter: var(--button--text--active, brightness(85%));
    }
    button.text.disabled {
        border:        var(--button--text--disabled__border, none);
        background:    var(--button--text--disabled__background, transparent);
        color:         var(--button--text--disabled__color, var(--color-gray50));
        --icon__color: var(--button--text--disabled__icon-color, var(--color-gray50));
    }
    
    button.icon {
        border:        var(--button--icon__border, none);
        background:    var(--button--icon__background, none);
        color:         var(--button--icon__color, var(--color-black));
        --icon__color: var(--button--icon__icon-color, var(--color-black));
    }
    button.icon:active:not(.disabled){
        filter: var(--button--icon--active, brightness(85%));
    }
    button.icon.disabled {
        --icon__color: var(--button--icon--disabled__icon-color, var(--color-gray50));
    }
    
    
    button.small{
        height: 2rem;
    }

    button.tiny {
        height: 1.5rem;
    }
    
    button:disabled {
        cursor: not-allowed;
    }

</style>
