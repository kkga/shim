import { Checkbox, CheckboxGroup } from "@/components/checkbox";

export default () => (
  <>
    <CheckboxGroup label="Views">
      <Checkbox description="This is a sidebar" value="sidebar">
        Sidebar
      </Checkbox>
      <Checkbox description="This is a panel" value="panel">
        Panel
      </Checkbox>
      <Checkbox description="This is a toolbar" value="toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>
  </>
);
