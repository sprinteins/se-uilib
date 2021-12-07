
<script lang="ts">
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { DPDHLPagination, DPDHLPaginationItem } from './index'
    import '@sprinteins/dpdhl-uilib'

    let selectedItem = 0;

    function handleSelect(event) {
        selectedItem = event.detail
    }
</script>


<Meta title="11_Components/Pagination" component={null}/>

<Template let:args>
    <div class="container">
        <DPDHLPagination on:select={handleSelect}>
            <DPDHLPaginationItem>1</DPDHLPaginationItem>
            <DPDHLPaginationItem>2</DPDHLPaginationItem>
            <DPDHLPaginationItem>3</DPDHLPaginationItem>
        </DPDHLPagination>
    </div>

    <p>Selected: {selectedItem}</p>

</Template>

<style>
    .container {
        padding-left: 1rem;
    }
</style>

<Story name="Primary" args={{}}/>

