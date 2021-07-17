<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    
    import '@sprinteins/dpdhl-uilib'

</script>


<Meta 
    title="Components/Typography" 
    component={null} 
    argTypes={{}}
/>

<Template let:args>

</Template>

<style>
    
</style>

<Story name="Primary" args={{}}>
    <dpdhl-main-headline>Main Headline</dpdhl-main-headline>
    <dpdhl-topline>Topline</dpdhl-topline>
    <dpdhl-secondary-headline>Secondary Headline</dpdhl-secondary-headline>
    <dpdhl-paragraph-header>Paragraph Header</dpdhl-paragraph-header>
    <dpdhl-introduction-large>Introduction (large)</dpdhl-introduction-large>
    <dpdhl-introduction-small>Introduction (small)</dpdhl-introduction-small>
    <dpdhl-copy>Copy</dpdhl-copy>
    <dpdhl-emphasis>Emphasis</dpdhl-emphasis>
    <dpdhl-caption>Caption</dpdhl-caption>
    <dpdhl-quotation>Quotation</dpdhl-quotation>
    <dpdhl-marginalia>Marginalia</dpdhl-marginalia>
</Story>
