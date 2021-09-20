<script lang="ts">
    import * as icons from '../../icons'

    // SVG Masks
    // https://stackoverflow.com/questions/22252472/how-to-change-the-color-of-an-svg-element

    export let width: number 
    export let height: number
    export let name = ''
    export let icon = ''
    // export let color = 'black'
    export let color = 'inherit'

    $: style = `
        width:  ${width??height}px;
        height: ${height??width}px;

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
        display:     inline-grid;
        place-items: center;
    }

    i{
        background-color:    var(--icon__color, var(--color-black));
        mask-size:           cover;
        -webkit-mask-size:   cover;
        mask-image:          var(--icon);
        -webkit-mask-image:  var(--icon);
        mask-repeat:         no-repeat;
        -webkit-mask-repeat: no-repeat;
        
    }
</style>