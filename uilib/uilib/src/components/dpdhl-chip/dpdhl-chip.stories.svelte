<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'

    import 'dpdhl-uilib'
</script>


<Meta title="Components/Chip" component={null} argTypes={{}}/>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/chips-tags.html -->
<Template let:args>
</Template>

<style>
    main{
        margin: 2em;

        display:        flex;
        flex-direction: column;
        gap:            2em;
    }
</style>



<Story name="Primary" args={{}}>

    <main>
        <p>
            <dpdhl-chip label="Chip" />
            <dpdhl-chip label="Disabled" disabled />
            <dpdhl-chip label="Active" active />
            <dpdhl-chip label="Active & Disabled" active disabled/>
        </p>
        <p>
            <dpdhl-chip label="Primary" type="Primary" />
            <dpdhl-chip label="Disabled" type="Primary" disabled />

        </p>
    </main>
</Story>


<Story name="Customized" args={{}}>
    <main>
        <p style="--chip__active-bg-color: var(--color-postyellow);">
            <dpdhl-chip label="Chip" />
            <dpdhl-chip label="Disabled" disabled />
            <dpdhl-chip label="Active" active />
            <dpdhl-chip label="Active & Disabled" active disabled/>
        </p>
        <p style="--chip__primary-bg-color: var(--color-green-dark);">
            <dpdhl-chip label="Primary" type="Primary" />
            <dpdhl-chip label="Disabled" type="Primary" disabled />
        </p>
    </main>
</Story>
