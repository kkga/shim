import { Radio, RadioGroup } from "@/shim-ui/radio-group";

export default () => (
  <RadioGroup defaultValue={"ts-pattern"} label="Library">
    <Radio
      description="Type-safe pattern matching library for TypeScript."
      value="ts-pattern"
    >
      TS-Pattern
    </Radio>
    <Radio
      description="A modern JavaScript utility library delivering modularity, performance & extras."
      value="lodash"
    >
      Lodash
    </Radio>
    <Radio
      description="A practical functional library for JavaScript programmers."
      value="ramda"
    >
      Ramda
    </Radio>
  </RadioGroup>
);
