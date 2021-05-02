<script lang="ts">
    import '../dpdhl-card'
    import '../dpdhl-button'
    import { Type } from '../dpdhl-button'

    export let title = ''
    export let content = ''
    export let button_label = ''

</script>
<svelte:options tag={"dpdhl-card-simple"} />
{@debug Type}
<dpdhl-card>
        <h2 slot="header">
            { title }
        </h2>
        <div slot="content">
            { content }
        </div>
        <div slot="footer" class="footer">
            <dpdhl-button on:click type={Type.Text}> { button_label } </dpdhl-button>
        </div>
</dpdhl-card>


<style>
    .footer{
            text-align: left;
            --button__padding: 0;
            --button__text-align: left;
      }
</style>