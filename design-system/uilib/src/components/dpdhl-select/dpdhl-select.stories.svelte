<script>
  import { Meta, Template, Story } from "@storybook/addon-svelte-csf";

  import "@sprinteins/dpdhl-uilib";

  let selectedItem = "";
  let selectedItems = [];
</script>

<Meta
  title="11_Components/Select"
  component={null}
  argTypes={{
    containerWidth: {
      name: "Container Width [px]",
      control: {
        type: "range",
        min: 100,
        max: 500,
        step: 1,
      },
    },
  }}
/>

<!-- https://www.dpdhl-brands.com/dpdhl-group/en/guides/touchpoints/user-interface/components/select.html -->
<Template let:args />

<Story let:args name="Select one" args={{ containerWidth: 200 }}>
  <div style="--container__width: {args.containerWidth}px;}">
    <dpdhl-select
      placeholder="Select field"
      on:selectOne={(event) => (selectedItem = event.detail)}
    >
      <dpdhl-select-item label="Option A" value={"option-a"} />
      <dpdhl-select-item label="Option B" value={"option-b"} />
      <dpdhl-select-item label="Option C" value={"option-c"} />
    </dpdhl-select>
  </div>
  <div>Selected : {selectedItem}</div>
</Story>

<Story let:args name="Select multiple mit Chips" args={{ containerWidth: 200 }}>
  <div style="--container__width: {args.containerWidth}px;}">
    <dpdhl-select
      placeholder="Select field"
      multiplechoice={true}
      on:selectMany={(event) => (selectedItems = event.detail)}
    >
      <dpdhl-select-item label="Option A" value={"option-a"} />
      <dpdhl-select-item label="Option B" value={"option-b"} />
      <dpdhl-select-item label="Option C" value={"option-c"} />
      <dpdhl-select-item label="Option D" value={"option-d"} />
      <dpdhl-select-item label="Option E" value={"option-e"} />
      <dpdhl-select-item label="Option F" value={"option-f"} />
      <dpdhl-select-item label="Option G" value={"option-g"} />
      <dpdhl-select-item label="Option H" value={"option-h"} />
      <dpdhl-select-item label="Option I" value={"option-i"} />
    </dpdhl-select>
  </div>
  <div>
    Selected : {selectedItems.length &&
      selectedItems.map((item) => item.label).join(", ")}
  </div>
</Story>

<style></style>
