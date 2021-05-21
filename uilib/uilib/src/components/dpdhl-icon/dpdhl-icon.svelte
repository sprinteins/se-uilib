<script lang="ts">
    import * as icons from '../../icons'

    // SVG Masks
    // https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element

    export let width = 16
    export let height = 16
    export let name = ''
    export let icon = ''
    export let color = 'black'

    $: style = `
        width:  ${width}px;
        height: ${height}px;

        --icon:        url(${icons[icon]});
        --icon__color: ${color};
    `
    $: _name = name ? name : icon

    $: if( icon !== '' && !icons[icon] ){
        console.warn(`msg="icon not found" icon="${icon}"`)
    }

</script>
<svelte:options tag="dpdhl-icon" />

<i {style} alt={_name} />


<style>
    :host{
        display:     grid;
        place-items: center;
    }

    i{
        background-color: var(--icon__color, var(--color-black));
        mask-size: cover;
        mask-image: var(--icon);
    }
</style>