import { Checkbox, CheckboxGroup } from "@ui/Checkbox"

export default () => (
  <div className="grid grid-cols-4 gap-4 self-start">
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

    <CheckboxGroup size={4} label="Views">
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>
  </div>
)
