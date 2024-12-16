import { Checkbox, CheckboxGroup } from "@ui/Checkbox"

export default () => (
  <>
    <CheckboxGroup label="Views">
      <Checkbox value="sidebar" description="This is a sidebar">
        Sidebar
      </Checkbox>
      <Checkbox value="panel" description="This is a panel">
        Panel
      </Checkbox>
      <Checkbox value="toolbar" description="This is a toolbar">
        Toolbar
      </Checkbox>
    </CheckboxGroup>
  </>
)
