import { Checkbox, CheckboxGroup } from "@/shim-ui/checkbox";

export default () => (
  <>
    <div>
      <Checkbox isIndeterminate>Indeterminate</Checkbox>
      <Checkbox isDisabled>Disabled</Checkbox>
      <Checkbox isDisabled isSelected>
        Selected disabled
      </Checkbox>
    </div>

    <CheckboxGroup isDisabled label="Group disabled">
      <Checkbox>Option A</Checkbox>
      <Checkbox>Option B</Checkbox>
    </CheckboxGroup>
  </>
);
