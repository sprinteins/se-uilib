
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    
    import 'dpdhl-uilib'

</script>


<Meta title="Components/Table" component={null}/>

<Template let:args>

    <dpdhl-table title={args.title} footer={args.footer}>

        <thead slot="head">
            <tr>
            {#each args.headers as header}
                <th>{header}</th>
            {/each}
            </tr>
        </thead>

        <tbody slot="body">
            {#each args.rows as row }
                <tr>
                    <th>{row.title}</th>
                    <td>{row.column1}</td>
                    <td>{row.column2}</td>
                </tr>
            {/each}
        </tbody>

    </dpdhl-table>

</Template>

<style>
    
</style>

<Story name="Primary" args={{
    title: "Table heading",
    footer: "*Table footer annotation",
    rows: [
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
        {title:"Row title", column1: "Table cell", column2: "Table cell"},
    ],
    headers: ["","Column title 1", "Column title 2"],
}}/>
