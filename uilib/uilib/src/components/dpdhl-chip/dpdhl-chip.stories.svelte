<script>
    import { Meta, Template, Story } from '@storybook/addon-svelte-csf'
    import { action } from '@storybook/addon-actions'

    import '@sprinteins/dpdhl-uilib'
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

    main p{
        display:        flex;
        flex-direction: row;
        gap:            0.5em;
    }

    .close-icon {
        cursor: pointer;
    }
</style>



<Story name="Primary" args={{}}>

    <main>
        <p>
            <dpdhl-chip>Chip</dpdhl-chip>
            <dpdhl-chip disabled >Disabled</dpdhl-chip>
            <dpdhl-chip active >Active</dpdhl-chip>
            <dpdhl-chip active disabled>Active & Disabled</dpdhl-chip>
        </p>
        <p>
            <dpdhl-chip type="Primary">Primary</dpdhl-chip>
            <dpdhl-chip type="Primary" disabled >Disabled</dpdhl-chip>

        </p>
        <p>
            <dpdhl-chip>
                <dpdhl-icon icon="checkmark" height=16 width=16 /> 
                with icon
            </dpdhl-chip>
            <dpdhl-chip>
                Removable tag 
                <dpdhl-icon 
                    class="close-icon" 
                    icon="cancel" 
                    height=16 
                    width=16 
                    on:click={action('remove tag')} 
                />
            </dpdhl-chip>
        </p>
    </main>
</Story>


<Story name="Customized" args={{}}>
    <main>
        <p style="--chip__active-bg-color: var(--color-postyellow);">
            <dpdhl-chip>Chip</dpdhl-chip>
            <dpdhl-chip disabled >Disabled</dpdhl-chip>
            <dpdhl-chip active >Active</dpdhl-chip>
            <dpdhl-chip active disabled>Active & Disabled</dpdhl-chip>
        </p>
        <p style="--chip__primary-bg-color: var(--color-green-dark);">
            <dpdhl-chip type="Primary" >Primary</dpdhl-chip>
            <dpdhl-chip type="Primary" disabled >Disabled</dpdhl-chip>
        </p>
    </main>
</Story>
