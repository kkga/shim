"use client"
import { SIZES } from "@lib/theme"
import { Radio, RadioGroup } from "@ui/RadioGroup"

export default () =>
  SIZES.map((size) => (
    <RadioGroup defaultValue={"react"} size={size} label="Framework" key={size}>
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
  ))
