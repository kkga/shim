"use client";
import {
  Description,
  fieldLayoutStyle,
  Input,
  inputBaseStyle,
  Label,
} from "@/components/field";

/**
 * Utility components used in other form fields.
 * Not intended to be used directly, unless you're building a custom field.
 */

export default () => (
  <div className={fieldLayoutStyle()}>
    <Label htmlFor="f">Label</Label>
    <Input className={inputBaseStyle()} id="f" />
    <Description>Field description</Description>
  </div>
);
