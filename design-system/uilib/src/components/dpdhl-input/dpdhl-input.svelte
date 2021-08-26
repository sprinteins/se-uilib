<script lang="ts">
    import { onMount } from "svelte"
import { randomID } from "../../x/util";
    import '../dpdhl-icon'


    export let label = ''
    export let placeholder = ''
    export let value: string | number = ''
    
    
    export let disabled
    $: _disabled = disabled !== undefined

    export let error
    $: _error = error !== undefined

    export let success
    $: _success = success !== undefined

    export let message: string = ""

    const requiredSign = '*'
    let _isRequiredText = ''
    export let isRequired = false
    $: if( isRequired ) {
        _isRequiredText = requiredSign
    }else{
        _isRequiredText = ''
    }
    
    let id = ""
    onMount(() => { 
        id = randomID()
    })

    $: hasCustomIcon = Boolean($$slots["start-icon"]) 
    $: hasStartIcon = hasCustomIcon || _error || _success

    $: console.debug('[DEBUG] ', {message} )
    $: console.debug('[DEBUG] ', {msgprop:$$props.message} )

</script>

<svelte:options tag="dpdhl-input" />



<div 
    class="container"
    class:error={_error}
    class:success={_success}
    class:extra-margin={message}
    class:no-label={!label}
>
    <label for={id}>
        {label}{_isRequiredText}
    </label>

    <!-- <span>debug: {hasStartIcon}</span> -->

    <div class="input-container">

        <input 
            id={id}
            disabled={_disabled} 
            {value} 
            {placeholder}
            class:with-start-icon={hasStartIcon}
        />

        {#if hasCustomIcon}
            <div 
                class="start-icon-container"
            >
                <slot class="hello" name="start-icon"></slot>
            </div>
        {/if}

        {#if _error}
            <div class="start-icon-container" >
                <dpdhl-icon icon="checkmark_circle" color="var(--color-dhlred)" width=24 />
            </div>
        {/if}

        {#if _success}
            <div class="start-icon-container">
                <dpdhl-icon icon="checkmark_circle" color="var(--color-green-dark)" width=24 />
            </div>
        {/if}

    </div>

    {#if message}
        <span class="validation" class:with-msg={message}>
            <span class="validation-messsage">
                {message}
            </span>
        </span>
    {/if}

</div>

<style>
    
    .container{
        position: relative;
    }

    label{
        display:       block;
        font-size:     0.875rem;
        font-family:   var(--font-bold);
        margin-bottom: 0.5rem;
    } 

    .container.error .validation-messsage{
        color: var(--color-dhlred);
    }
    .container.success .validation-messsage{
        color: var(--color-green-dark);
    }
    .container.extra-margin{
        margin-bottom: 2em;
    }

    .validation{
        display:        flex;
        flex-direction: row;
        gap:            0.25em;
        margin-top:     0.5rem;
        font-size:      0.875rem;
        color:          var(--color-gray67);
    }
    .validation.with-msg{
        left: 0;
        top:  2em;
    }
    .validation-messsage{
        display: none;
    }
    .validation.with-msg .validation-messsage{
        display: unset;
    }

    .input-container{
        position: relative;
    }

    input{
        display:        block;
        box-sizing:     border-box;
        font-size:      1rem;
        padding-left:   1rem;
        padding-right:  1rem;
        height:         3rem;
        border-radius:  var(--border-radius);
        border:         1px solid var(--color-gray45);
    }
    .container.error input{
        border-color: var(--color-dhlred);
        background: var(--color-dhlred-light);
    }
    .container.success input{
        border-color: var(--color-green-dark);
        background: var(--color-green-light);
    }

    input:hover{
        border: 1px solid var(--color-black);
    }
    input:active,
    input:focus, 
    input:not(:disabled):focus-visible {
        border-color: var(--color-black);
        box-shadow:   inset 0px 0px 0px 1px var(--color-black);
        outline:      none;
    }

    input:disabled {
        border-color:     var(--color-gray30);
        background-color: unset;
    }

    input.with-start-icon{
        padding-left: 3.5rem;
    }

    .start-icon-container {
        position:    absolute;
        top:         0;
        left:        1rem;
        height:      100%;
        display:     flex;
        align-items: center;
    }
</style>