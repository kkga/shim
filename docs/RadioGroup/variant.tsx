import { Radio, RadioGroup } from "@ui/RadioGroup"

export default () => (
  <>
    <RadioGroup variant="classic" defaultValue={"react"} label="Classic">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">Vue</Radio>
    </RadioGroup>
    <RadioGroup variant="soft" defaultValue={"react"} label="Soft">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">Vue</Radio>
    </RadioGroup>
    <RadioGroup variant="outline" defaultValue={"react"} label="Outline">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">Vue</Radio>
    </RadioGroup>
  </>
)
