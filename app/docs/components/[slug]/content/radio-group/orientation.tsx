import { Radio, RadioGroup } from "@/shim-ui/radio-group";

export default () => (
  <RadioGroup label="Framework" orientation="horizontal">
    <Radio value="react">React</Radio>
    <Radio value="vue">Svelte</Radio>
  </RadioGroup>
);
