<script lang="ts">

    /**
      * A Checkbox Component
      * @component
    */

    export let value 

    export let label = ""
    $: _label = label

    export let name = ""
    $: _name = name

    export let checked = false
    $: _checked = checked

    export let indeterminate = false
    $: _indeterminate = indeterminate

    export let disabled = false
    $: _disabled = disabled

    export let error = false
    $: _error = error
    
</script>
<svelte:options tag={'dpdhl-checkbox'}/>


<span>
    <label>
        <input
        value={value}
        id={_name} 
        name={_name}
        type="checkbox"
        bind:checked={_checked}
        on:click 
        disabled={_disabled}
        indeterminate={_indeterminate}

        class:disabled      = {_disabled}
        class:indeterminate = {_indeterminate}
        class:error         = { _error }>
        {_label}
    </label>
</span>


<style>




</style>
