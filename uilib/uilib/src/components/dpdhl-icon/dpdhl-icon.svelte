<script lang="ts">
    import * as icons from '../../icons';

    // SVG Masks
    // https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element

    export let width = 16
    export let height = 16
    export let name = ''
    export let icon = '';

    $: style = `
        width:  ${width}px;
        height: ${height}px;
    `
    $: _name = name ? name : icon

    $: if( icon !== "" && !Boolean(icons[icon]) ){
        console.warn(`msg="icon not found" icon="${icon}"`)
    }

</script>
<svelte:options tag="dpdhl-icon" />

<img 
    {style}
    src={icons[icon]} 
    alt={_name}  
/>


<style>
    :host{
        display:     grid;
        place-items: center;
    }
</style>