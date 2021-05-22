<script lang="ts">
    import '../dpdhl-icon'


    export let label = ''
    export let placeholder = ''
    export let value: string | number = ''
    
    
    export let disabled
    $: _disabled = disabled !== undefined

    export let errormsg = ''
    export let error
    $: _error = error !== undefined

    export let successmsg = ''
    export let success
    $: _success = success !== undefined

    let _msg = ''
    $: if( errormsg ){
        _msg = errormsg
    } else if(successmsg) {
        _msg = successmsg
    }

    const requiredSign = '*'
    let _isRequiredText = ''
    export let isRequired = false
    $: if( isRequired ) {
        _isRequiredText = requiredSign
    }else{
        _isRequiredText = ''
    }



</script>

<svelte:options tag="dpdhl-input" />

<div 
    class="container"
    class:error={_error}
    class:success={_success}
    class:extra-margin={_msg}
    class:no-label={!label}
>
    <label>
        <span class="label">{label}{_isRequiredText}</span>
        <input 
            disabled={_disabled} 
            {value} 
            {placeholder}
        />

        {#if _success || _error}
            <span class="validation" class:with-msg={_msg}>
                {#if _success}
                    <dpdhl-icon width=16 height=16 color="var(--color-green-bright)" icon="checkmark_circle" />
                    <span class="validation-messsage">{_msg}</span>
                {/if}
                {#if _error}
                    <dpdhl-icon width=16 height=16 color="var(--color-dhlred)" icon="cancel_circle" />
                    <span class="validation-messsage">{_msg}</span>
                {/if}
            </span>
        {/if}
</label>
</div>

<style>
    label{
        position: relative
    }
    .container.error .label{
        color: var(--color-dhlred);
    }
    .container.extra-margin{
        margin-bottom: 2em;
    }
    .label{
        position: absolute;
        top:      -1em;
        left:      1.25em;
        
        color:     var(--color-gray45);
        font-size: 0.5em;
    }

    .validation{
        position: absolute;
        top:      0;
        right:    0.75em;
        
        display:        flex;
        flex-direction: row;
        gap:            0.25em;
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

    input{
        padding-top:    1.25em;
        padding-left:   0.75em;
        padding-bottom: 0.75em;
        padding-right:  2.25em;
        border-radius:  var(--border-radius);
        border:         1px solid var(--color-gray45);
    }
    .container.error input{
        border-color: var(--color-dhlred);
    }
    .container.no-label input{
        padding-top: 1em;
        padding-bottom: 1em;
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
</style>