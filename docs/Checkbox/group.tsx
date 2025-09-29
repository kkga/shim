import { Checkbox, CheckboxGroup } from "@/components/checkbox";

export default () => (
  <CheckboxGroup
    defaultValue={["a"]}
    description="Group description"
    label="Options"
  >
    <Checkbox value="a">Option A</Checkbox>
    <Checkbox value="b">Option B</Checkbox>
    <Checkbox value="c">Option C</Checkbox>
  </CheckboxGroup>
);
