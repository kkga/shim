import { Radio, RadioGroup } from "@ui/RadioGroup"

export default () => (
  <RadioGroup size={2} label="Library" defaultValue={"ts-pattern"}>
    <Radio value="ts-pattern">TS-Pattern</Radio>
    <Radio value="lodash">Lodash</Radio>
    <Radio value="ramda">Ramda</Radio>
  </RadioGroup>
)
