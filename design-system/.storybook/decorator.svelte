<script lang="ts">
    import '@sprinteins/dpdhl-uilib'
</script>

<dpdhl-theme-desktop>
    <slot />
</dpdhl-theme-desktop>

<style>

:global(html){
    overflow: hidden;
}

:global(body),
:global(#root){
    height: 100vh;
    overflow: auto;
}

:global(body.sb-show-main.sb-main-padded){
    margin:  0;
    padding: 1rem;
}

</style>