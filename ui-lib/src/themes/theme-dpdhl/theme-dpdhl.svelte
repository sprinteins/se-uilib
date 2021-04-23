<script>
    import { ThemeBase } from '../theme-base'
</script>
<style>
    .dpdhl {

        --color-black:      #000000;
        --color-white:      #ffffff;
        --color-postyellow: #FFCC00;
        --color-dhlred:     #D40511;
        --color-gray80:     #333333;
        --color-gray60:     #666666;
        --color-gray45:     #8c8c8c;
        --color-gray30:     #b2b2b2;
        --color-gray20:     #cccccc;
        --color-gray10:     #e5e5e5;
        --color-gray08:     #ebebeb;
        --color-gray05:     #f2f2f2;
        
        --color-primary:   var(--color-dhlred);
        --color-secondary: var(--color-white);

        --button-border-radius: 6px;
        --button-padding:       var(--unit);

    }


</style>

<svelte:options tag={'theme-dpdhl'} />

<theme-base>
    <theme class="dpdhl">
        <slot />
    </theme>
</theme-base>