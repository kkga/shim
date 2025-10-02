import { Checkbox, CheckboxGroup } from "@/components/checkbox";

export default () => (
  <>
    <CheckboxGroup defaultValue={["sidebar"]} label="Classic" variant="classic">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
      <Checkbox isDisabled value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>

    <CheckboxGroup defaultValue={["sidebar"]} label="Soft" variant="soft">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
      <Checkbox isDisabled value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>

    <CheckboxGroup defaultValue={["sidebar"]} label="Outline" variant="outline">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
      <Checkbox isDisabled value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>
  </>
);
