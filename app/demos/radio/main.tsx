import { Radio, RadioGroup } from '@ui/radio'

export default () => (
  <RadioGroup
    label="Language"
    description="Pick your favorite language."
    defaultValue={'ts'}
  >
    <Radio value="js">JavaScript</Radio>
    <Radio value="ts">TypeScript</Radio>
    <Radio value="py">Python</Radio>
  </RadioGroup>
)
