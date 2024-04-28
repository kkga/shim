import { Radio, RadioGroup } from '@ui/radio'

export default () => (
  <RadioGroup orientation='horizontal' label='Framework'>
    <Radio value='react'>React</Radio>
    <Radio value='vue'>Svelte</Radio>
  </RadioGroup>
)
