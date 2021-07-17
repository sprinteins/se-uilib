<script lang="ts"> 
    import '../dpdhl-icon'
    import '../dpdhl-input'
    import '../dpdhl-sidebar'

    export let logosrc = ""
    export let title = ""

</script>
<svelte:options tag="dpdhl-ui-shell" />

<div class="shell">
    <header>
        <slot name="top" />
    </header>

    <section>
        <aside>
            <slot name="nav" />
        </aside>
        <main>
            <slot name="content" />
        </main>
    </section>
</div>

<style>

    .shell {
        display:        flex;
        flex-direction: column;

        top:      0;
        left:     0;
        width:    100%;
        overflow: hidden;
        height:   100%;
    }

    section {
        position: relative;
        flex:     1 1 auto;
        overflow: hidden;

        display:        flex;
        flex-direction: row;
    }

    header{
        flex: 0 0 auto;
    }

    main{
        max-height: 100%;
        height:     100%;
        overflow:   auto;
        flex-grow:  1;
    }

    aside{
        z-index: 10;
    }


</style>