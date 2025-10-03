import { Radio, RadioGroup } from "@/shim-ui/radio-group";

export default () => (
  <RadioGroup defaultValue={"ts-pattern"} label="Library" labelPosition="side">
    <Radio value="lodash">Lodash</Radio>
    <Radio value="ts-pattern">TS-Pattern</Radio>
    <Radio value="ramda">Ramda</Radio>
    <Radio value="fp-ts">fp-ts</Radio>
  </RadioGroup>
);
