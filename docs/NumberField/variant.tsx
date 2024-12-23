"use client"
import { Theme } from "@/lib/theme"
import { NumberField } from "@ui/NumberField"

export default () => (
  <Theme labelPosition="side">
    <NumberField variant="classic" label="Classic" />
    <NumberField variant="soft" label="Soft" />
    <NumberField variant="outline" label="Outline" />
  </Theme>
)
