import { Radio, RadioGroup } from "@ui/radiogroup"

export default () => (
  <RadioGroup orientation="horizontal" label="Framework">
    <Radio value="react">React</Radio>
    <Radio value="vue">Svelte</Radio>
  </RadioGroup>
)
