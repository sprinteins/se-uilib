
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { action } from '@storybook/addon-actions';
    
    import 'dpdhl-uilib'


</script>


<Meta title="Components/Table" component={null}/>

<Template let:args>
    <dpdhl-table>
        <thead slot="head">
            <tr>
            {#each args.headers as header}
                <td>{header}</td>
            {/each}
            </tr>
        </thead>
        <tbody slot="body">
        {#each args.rows as row }
            <tr>
                <td>{row.id}</td>
                <td>{row.label}</td>
            </tr>
        {/each}
        </tbody>
    </dpdhl-table>
</Template>

<style>
    
</style>

<Story name="Primary" args={{
    rows: [
        {id:0, label: "row 0"},
        {id:1, label: "row 1"},
        {id:2, label: "row 2"},
    ],
    headers: ["ID", "Label"],
}}/>
