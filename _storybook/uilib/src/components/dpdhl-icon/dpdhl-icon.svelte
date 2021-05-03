<script>
    import * as icons from '../../icons';

    export let width = 16
    export let height = 16
    export let name = ''
    export let color = 'black'
    export let icon = '';

    // export let color = 'currentColor'
</script>
<svelte:options tag="dpdhl-icon" />

{#if icon !== ""}
<svg
  xmlns="http://www.w3.org/2000/svg"
  width={width}
  height={height}
  viewBox="0 0 48 48"
  aria-labelledby={name}
  role="presentation"
>
    <title id={name} lang="en">{`${name} icon`}</title>
        <g stroke={color} fill={color}>
            <path d={icons[icon]}/>
        </g>
</svg>
{/if}