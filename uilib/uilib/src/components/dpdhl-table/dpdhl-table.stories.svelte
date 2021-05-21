
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import 'dpdhl-uilib'

</script>


<Meta title="Components/Table" component={null}/>

<Template let:args>

    <dpdhl-table title={args.title} footer={args.footer}>

        <dpdhl-thead slot="head">
            <dpdhl-tr>
            {#each args.headers as header}
                <dpdhl-th>{header}</dpdhl-th>
            {/each}
            </dpdhl-tr>
        </dpdhl-thead>

        <dpdhl-tbody slot="body">
            {#each args.rows as row }
                <dpdhl-tr>
                    <dpdhl-th>{row.title}</dpdhl-th>
                    <dpdhl-td>{row.column1}</dpdhl-td>
                    <dpdhl-td>{row.column2}</dpdhl-td>
                </dpdhl-tr>
            {/each}
        </dpdhl-tbody>

    </dpdhl-table>

</Template>

<style>
    
</style>

<Story name="Primary" args={{
    title: 'Table heading',
    footer: '*Table footer annotation',
    rows: [
        {title:'Row title', column1: 'Table cell', column2: 'Table cell'},
        {title:'Row title', column1: 'Table cell', column2: 'Table cell'},
        {title:'Row title', column1: 'Table cell', column2: 'Table cell'},
    ],
    headers: ['','Column title 1', 'Column title 2'],
}}/>
