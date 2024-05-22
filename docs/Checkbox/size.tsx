import { Checkbox, CheckboxGroup } from "@ui/Checkbox"

export default () => (
  <>
    <CheckboxGroup size={1} label="Views">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size={2} label="Views">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size={3} label="Views">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>
  </>
)
