import { Checkbox, CheckboxGroup } from "@/shim-ui/checkbox";

export default () => (
  <>
    <CheckboxGroup label="Size 1" size={1}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup label="Size 2" size={2}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup label="Size 3" size={3}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>

    <CheckboxGroup label="Size 4" size={4}>
      <Checkbox value="sidebar">Sidebar</Checkbox>
      <Checkbox value="panel">Panel</Checkbox>
    </CheckboxGroup>
  </>
);
