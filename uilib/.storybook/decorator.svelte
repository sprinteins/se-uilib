<script lang="ts">
    import 'dpdhl-uilib'
</script>

<dpdhl-theme>
    <slot />
</dpdhl-theme>

<style>

:global(html){
        overflow: hidden;
    }
:global(body, #root){
    height: 100vh;
    overflow: auto;
}
:global(body.sb-show-main.sb-main-padded){
    margin:  0;
    padding: 0;
}

</style>