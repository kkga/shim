import { Radio, RadioGroup } from "@ui/RadioGroup"

export default () => (
  <>
    <RadioGroup variant="classic" defaultValue={"react"} label="Framework">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">
        Vue
      </Radio>
    </RadioGroup>
    <RadioGroup variant="soft" defaultValue={"react"} label="Framework">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">
        Vue
      </Radio>
    </RadioGroup>
    <RadioGroup variant="outline" defaultValue={"react"} label="Framework">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">
        Vue
      </Radio>
    </RadioGroup>
  </>
)
