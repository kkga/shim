import { Radio, RadioGroup } from "@ui/radiogroup"

export default () => (
  <RadioGroup size={2} label="Framework">
    <Radio value="react">React</Radio>
    <Radio value="svelte">Svelte</Radio>
    <Radio value="vue">Vue</Radio>
  </RadioGroup>
)
