import { Radio, RadioGroup } from "@ui/radiogroup"

export default () => (
  <RadioGroup labelPosition="side" label="Library" defaultValue={"ts-pattern"}>
    <Radio value="lodash">Lodash</Radio>
    <Radio value="ts-pattern">TS-Pattern</Radio>
    <Radio value="ramda">Ramda</Radio>
    <Radio value="fp-ts">fp-ts</Radio>
  </RadioGroup>
)
