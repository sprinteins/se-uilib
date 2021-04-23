
<style>
    theme.base {
        --unit: 8px;

        /**********/
        /* COLOR */
        /*********/

        --color-black: black;
        --color-white: white;

        --color-primary:   var(--color-black);
        --color-secondary: var(--color-white);


        /********/
        /* FONT */
        /********/

        --font-size-normal: 12px;
        --font-size-medium: 18px;
        --font-size-large:  24px;

        --font-family: "Helvetica Neue";


        --button-border-radius: 0px;
        --button-padding: 2px;

    }

    *{
        font-family: var(--font-family);
        font-size:   var(--font-size-normal);
    }

</style>

<svelte:options tag={'theme-base'} />

<theme class="base">
    <slot />
</theme>
