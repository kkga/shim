import { Radio, RadioGroup } from "@ui/RadioGroup"

export default () => (
  <RadioGroup label="Library" defaultValue={"ts-pattern"}>
    <Radio
      value="ts-pattern"
      description="Type-safe pattern matching library for TypeScript."
    >
      TS-Pattern
    </Radio>
    <Radio
      value="lodash"
      description="A modern JavaScript utility library delivering modularity, performance & extras."
    >
      Lodash
    </Radio>
    <Radio
      value="ramda"
      description="A practical functional library for JavaScript programmers."
    >
      Ramda
    </Radio>
  </RadioGroup>
)
