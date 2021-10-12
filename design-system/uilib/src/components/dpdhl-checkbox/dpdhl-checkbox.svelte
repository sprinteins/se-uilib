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

input[type=checkbox] {
    position: relative;
    cursor: pointer;
}
input[type=checkbox]:before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 1px solid var(--color-gray45);
    border-radius: 3px;
    background-color: white;
}
input[type=checkbox]:checked:before {
    content: "";
    display: block;
    position: absolute;
    width: 16px;
    height: 16px;
    top: 0;
    left: 0;
    border: 1px solid var(--color-postyellow);
    border-radius: 3px;
    background-color: var(--color-postyellow);
}
input[type=checkbox]:checked:after {
    content: "";
    display: block;
    width: 5px;
    height: 10px;
    border: solid black;
    border-width: 0 1px 1px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
    position: absolute;
    top: 2px;
    left: 6px;
}

</style>
