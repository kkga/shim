import { Radio, RadioGroup } from "@ui/RadioGroup"

export default () => (
  <RadioGroup label="Language" defaultValue={"ts"}>
    <Radio value="js">JavaScript</Radio>
    <Radio value="ts">TypeScript</Radio>
    <Radio value="py">Python</Radio>
  </RadioGroup>
)
