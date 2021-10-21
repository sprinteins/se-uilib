<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";
  import "@sprinteins/dpdhl-uilib";
  import { Type } from "./type";

  let open = true;

  function handleClose() {
    open = false;
  }

	  function handleOpen() {
    open = true;
  }

</script>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/notifications.html -->
<Template let:args>
  <dpdhl-toast
    {open}
    on:closeToast={handleClose}
    type="error"
    title="Toast Title"
    message="And here we go with a more detailed message."
    {...args}
  >
  {#if args.showIcon}
    <dpdhl-icon
      slot="icon"
      width={20}
      height={20}
      color="#FFF"
      icon="exception"
    />
    {/if}
  </dpdhl-toast>
	<button on:click={() => handleOpen()}>Show toast</button>
</Template>

<Meta
  title="11_Components/Toast"
  component={null}
  argTypes={{
    type: {
      options: [Type.error, Type.notification],
      control: { type: "select" },
    },
  }}
/>

<Story
  name="Primary"
  args={{
    type: Type.error,
    title: "Toast Title",
    message: "And here we go with a more detailed message.",
    showIcon: false,
  }}
/>

<style>
</style>
