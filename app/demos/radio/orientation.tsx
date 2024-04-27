import { Radio, RadioGroup } from '@ui/radio'

export default () => (
  <RadioGroup label="Framework" orientation="horizontal">
    <Radio value="react">React</Radio>
    <Radio value="vue">Svelte</Radio>
  </RadioGroup>
)
