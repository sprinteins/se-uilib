<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

</script>


<Meta 
    title="11_Components/Tags" 
    component={null} 
    argTypes={{}}
/>

<Template let:args>
</Template>

<style>
    main{
        display:                grid;
        grid-template-columns: 1fr;
        gap:                   1rem;
    }
</style>

<Story name="Primary" args={{}}>
    <main>
        <dpdhl-tag type="default">     Tag Line </dpdhl-tag>
        <dpdhl-tag type="success">     Tag Line </dpdhl-tag>
        <dpdhl-tag type="pending">     Tag Line </dpdhl-tag>
        <dpdhl-tag type="error">       Tag Line </dpdhl-tag>
        <dpdhl-tag type="attention">   Tag Line </dpdhl-tag>
        <dpdhl-tag type="alternative"> Tag Line </dpdhl-tag>
    </main>
</Story>
