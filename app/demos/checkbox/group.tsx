import { Checkbox, CheckboxGroup } from '@/components/ui/checkbox'

export default () => (
  <CheckboxGroup
    label="Options"
    description="Group description"
    defaultValue={['a']}
  >
    <Checkbox value="a">Option A</Checkbox>
    <Checkbox value="b">Option B</Checkbox>
    <Checkbox value="c">Option C</Checkbox>
  </CheckboxGroup>
)
