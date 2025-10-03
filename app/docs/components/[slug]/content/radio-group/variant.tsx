import { Radio, RadioGroup } from "@/shim-ui/radio-group";

export default () => (
  <>
    <RadioGroup defaultValue={"react"} label="Classic" variant="classic">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">
        Vue
      </Radio>
    </RadioGroup>
    <RadioGroup defaultValue={"react"} label="Soft" variant="soft">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">
        Vue
      </Radio>
    </RadioGroup>
    <RadioGroup defaultValue={"react"} label="Outline" variant="outline">
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
      <Radio isDisabled value="vue">
        Vue
      </Radio>
    </RadioGroup>
  </>
);
