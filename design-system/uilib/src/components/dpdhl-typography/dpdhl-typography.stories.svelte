<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'    
    import '@sprinteins/dpdhl-uilib'
    

</script>


<Meta 
    title="11_Components/Typography" 
    component={null} 
    argTypes={{}}
/>

<Template let:args>

</Template>

<style>
    .container{
        display: grid;
        gap: 1rem;
    }
</style>

<Story name="Primary" args={{}}>
    <div class="container">
        <dpdhl-typography variant="h1">
            H1/Delivery/CondensedBlack/32px
        </dpdhl-typography>

        <dpdhl-typography variant="h2">
            H2/Delivery/CondensendBlack/24px
        </dpdhl-typography>

        <dpdhl-typography variant="h3">
            H3/Delivery/CondensendBlack/20px
        </dpdhl-typography>

        <dpdhl-typography variant="h4">
            H4/Delivery/CondensendBlack/18px
        </dpdhl-typography>
        
        <dpdhl-typography variant="h5">
            H5/Delivery/CondensedBlack/16px
        </dpdhl-typography>
        
        <dpdhl-typography variant="h6">
            H6/Delivery/Regular/16px
        </dpdhl-typography>
        
        <dpdhl-typography variant="subtitle1">
            Subtitle1/Delivery/CondensendLight/16px
        </dpdhl-typography>
        
        <dpdhl-typography variant="subtitle2">
            Subtitle2/Delivery/CondensendLight/14px
        </dpdhl-typography>
        
        <dpdhl-typography variant="body1">
            Body1/Delivery/Regular/16px
        </dpdhl-typography>
        
        <dpdhl-typography variant="body2">
            Body2/Delivery/Regular/14px
        </dpdhl-typography>
        
        <dpdhl-typography variant="button">
            Button/Delivery/Bold/16px
        </dpdhl-typography>
        
        <dpdhl-typography variant="caption">
            Caption/Delivery/Regular/12px
        </dpdhl-typography>
        
        <dpdhl-typography variant="label">
            Label/Delivery/Bold/14px
        </dpdhl-typography>
    </div>
</Story>
