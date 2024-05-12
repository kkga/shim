import { Radio, RadioGroup } from "@ui/radiogroup"

export default () => (
  <RadioGroup label="Language" defaultValue={"ts"}>
    <Radio value="js">JavaScript</Radio>
    <Radio value="ts">TypeScript</Radio>
    <Radio value="py">Python</Radio>
  </RadioGroup>
)
