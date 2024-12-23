import { Checkbox, CheckboxGroup } from "@ui/Checkbox"

export default () => (
  <>
    <CheckboxGroup size={1} label="Size 1">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size={2} label="Size 2">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size={3} label="Size 3">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup size={4} label="Size 4">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>
  </>
)
