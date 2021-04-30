<script lang="ts">
    import { DPDHLCard } from '../dpdhl-card'
    import { DPDHLButton, Type } from '../dpdhl-button'



    export let title = ''
    export let content = ''
    export let buttonLabel = ''

</script>
<svelte:options tag={"dpdhl-card-simple"} />

<DPDHLCard>
        <h2 slot="header">
            { title }
        </h2>
        <div slot="content">
            { content }
        </div>
        <div slot="footer" class="footer" >
            <DPDHLButton on:click type={Type.Text}> { buttonLabel } </DPDHLButton>
        </div>
</DPDHLCard>


<style>
    .footer{
            text-align: left;
            --button__padding: 0;
            --button__text-align: left;
      }
</style>