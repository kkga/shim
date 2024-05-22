import { Checkbox, CheckboxGroup } from "@ui/Checkbox"

export default () => (
  <>
    <CheckboxGroup variant="classic" label="Views" defaultValue={["sidebar"]}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
      <Checkbox isDisabled value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>

    <CheckboxGroup variant="soft" label="Views" defaultValue={["sidebar"]}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
      <Checkbox isDisabled value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>

    <CheckboxGroup variant="outline" label="Views" defaultValue={["sidebar"]}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
      <Checkbox isDisabled value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>
  </>
)
