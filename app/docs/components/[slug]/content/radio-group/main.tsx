import { Radio, RadioGroup } from "@/shim-ui/radio-group";

export default () => (
  <RadioGroup defaultValue={"ts"} label="Language">
    <Radio value="js">JavaScript</Radio>
    <Radio value="ts">TypeScript</Radio>
    <Radio value="py">Python</Radio>
  </RadioGroup>
);
