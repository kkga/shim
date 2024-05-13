import { Radio, RadioGroup } from "@ui/radiogroup"

export default () => (
  <>
    <RadioGroup defaultValue={"react"} size={1} label="Framework">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
    <RadioGroup defaultValue={"react"} size={2} label="Framework">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
    <RadioGroup defaultValue={"react"} size={3} label="Framework">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
  </>
)
