
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLPagination, DPDHLPaginationItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = "";

    function handleSelect(event) {
        selectedItem = event.detail
    }
</script>


<Meta title="11_Components/Pagination" component={null}/>

<Template let:args>
        <DPDHLPagination on:select={handleSelect} defaultpage={args.defaultPage}>
            {#each Array(args.pages) as _, idx}
               <DPDHLPaginationItem value={idx + 1}></DPDHLPaginationItem>
            {/each}
        </DPDHLPagination>


    <p>Selected: {selectedItem}</p>

</Template>

<style>
</style>

<Story name="Primary" args={{
    pages: 12,
    defaultPage: 2
}}/>

