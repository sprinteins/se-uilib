
<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'
    import '@sprinteins/dpdhl-uilib'

	import { Tabs, TabList, TabPanel, Tab } from './tabs.ts';

    $: selected = 0;

    function handleSelect(id) {
        selected = id;
    }
</script>


<Meta title="11_Components/Segmented Control" component={null}/>

<Template let:args>
    <!-- <div class="container">
        <dpdhl-segmented-control on:select={handleSelect} selected={0}>
            <dpdhl-segmented-control-item label="Menu 1 - a long one">
            <dpdhl-segmented-control-item label="Menu 2">
            <dpdhl-segmented-control-item label="Menu 3">
        </dpdhl-segmented-control>
    </div>
    <p>Selected:{selected}</p>

 -->


    <Tabs>
        <TabList>
            <Tab>one</Tab>
            <Tab>two</Tab>
            <Tab>three</Tab>
        </TabList>

        <TabPanel>
            <h2>First panel</h2>
        </TabPanel>

        <TabPanel>
            <h2>Second panel</h2>
        </TabPanel>

        <TabPanel>
            <h2>Third panel</h2>
        </TabPanel>
    </Tabs>

</Template>

<style>
    .container {
        padding-left: 1rem;
    }
</style>

<Story name="Primary" args={{}}/>

