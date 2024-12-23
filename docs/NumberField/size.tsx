"use client"
import { Theme } from "@/lib/theme"
import { NumberField } from "@ui/NumberField"

export default () => (
  <Theme labelPosition="side">
    <NumberField size={1} defaultValue={123000} label="Size 1" />
    <NumberField size={2} defaultValue={123000} label="Size 2" />
    <NumberField size={3} defaultValue={123000} label="Size 3" />
    <NumberField size={4} defaultValue={123000} label="Size 4" />
  </Theme>
)
