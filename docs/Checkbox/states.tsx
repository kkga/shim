import { Checkbox, CheckboxGroup } from "@ui/Checkbox"

export default () => (
  <>
    <Checkbox isIndeterminate>Indeterminate</Checkbox>
    <Checkbox isDisabled>Disabled</Checkbox>
    <Checkbox isSelected isDisabled>
      Selected disabled
    </Checkbox>

    <CheckboxGroup label="Group disabled" isDisabled>
      <Checkbox>Option A</Checkbox>
      <Checkbox>Option B</Checkbox>
    </CheckboxGroup>
  </>
)
