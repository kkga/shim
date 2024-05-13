import { Checkbox } from "@ui/checkbox"

export default () => (
  <div className="flex flex-col">
    <Checkbox isIndeterminate>Indeterminate</Checkbox>
    <Checkbox isDisabled>Disabled</Checkbox>
    <Checkbox isSelected isDisabled>
      Selected disabled
    </Checkbox>
  </div>
)
