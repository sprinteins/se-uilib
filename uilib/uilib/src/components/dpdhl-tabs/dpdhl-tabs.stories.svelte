<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import 'dpdhl-uilib'

</script>


<Meta 
    title="Components/Tabs" 
    component={null} 
    argTypes={{
        width: {
            control: { 
                title: 'Width [%]',
                type: 'range', 
                min: 1,
                max: 100,
                step: 1,
                options: ['small', 'medium', 'large'] },
            },
    }}
/>

<Template let:args>

    <div style="width: {args.width}%">
    <dpdhl-tabs>
        <dpdhl-tab label="Tab 1 Title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. 
        </dpdhl-tab>
        <dpdhl-tab label="Tab 2 Title" active>
            At vero eos et accusam et justo duo dolores et ea rebum. 
            Stet clita kasd gubergren, no sea takimata sanctus est 
            Lorem ipsum dolor sit amet. 
        </dpdhl-tab>
        <dpdhl-tab label="Tab 3 Title">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, 
            sed diam nonumy eirmod tempor invidunt ut labore et dolore
             magna aliquyam erat, sed diam voluptua. 
        </dpdhl-tab>
    </dpdhl-tabs>
    </div>


</Template>

<style>
    
</style>

<Story name="Primary" args={{
    width: 100,
}}/>
