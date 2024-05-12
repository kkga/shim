"use client"
import { Description, Input, Label, fieldLayoutStyle, inputBaseStyle } from "@ui/field"

/**
 * Utility components used in other form fields.
 * Not intended to be used directly, unless you're building a custom field.
 */

export default () => (
  <div className={fieldLayoutStyle()}>
    <Label htmlFor="f">Label</Label>
    <Input id="f" className={inputBaseStyle()} />
    <Description>Field description</Description>
  </div>
)
