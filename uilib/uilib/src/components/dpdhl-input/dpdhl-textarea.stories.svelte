<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf';
    import { action } from '@storybook/addon-actions';
    
    import 'dpdhl-uilib'


</script>


<Meta 
    title="Components/Input/Textarea"
    component={null}
    argTypes={{
        width: {
            name: 'Width [px]',
            control: { 
                type: 'range', 
                min: 100,
                max: 500,
                step: 10,
            },
        },
        height: {
            name: 'Height [px]',
            control: { 
                type: 'range', 
                min: 100,
                max: 500,
                step: 10
            },
        },
    }}
/>

<Template let:args>
    <p>
        <dpdhl-textarea 
            placeholder={args.placeholder}
            label={args.label}
            rows={args.rows}
            cols={args.cols}
            value={args.value}
            width={args.width}
            height={args.height}
            description={args.description}
        />
    </p>
    <p>
        <dpdhl-textarea 
            disabled
            placeholder={args.placeholder}
            label={args.label}
            rows={args.rows}
            cols={args.cols}
            value={args.value}
            width={args.width}
            height={args.height}
            description={args.description}
        />
    </p>
</Template>

<style>
    
</style>

<Story name="Primary" args={{
    label: 'Shipping Code',
    placeholder: 'Ab34-5',
    value: [
        'Sunt iure quia saepe. Earum ut vel odio. Sapiente mollitia ut ',
        'suscipit alias. Vel iusto ducimus nobis qui quo quia ullam. ',
        'Atque esse delectus magni tenetur doloremque dolorem debitis. ',
        'Reiciendis eius hic sint ut animi.',
    ].join(),
    description: 'Form field description text.',
    width: 300,
    height: 100,
}}/>

