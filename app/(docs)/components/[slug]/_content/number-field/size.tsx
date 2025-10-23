"use client";
import { Theme } from "@/shim-ui/lib/theme";
import { NumberField } from "@/shim-ui/number-field";

export default () => (
  <Theme labelPosition="side">
    <NumberField defaultValue={123_000} label="Size 1" size={1} />
    <NumberField defaultValue={123_000} label="Size 2" size={2} />
    <NumberField defaultValue={123_000} label="Size 3" size={3} />
    <NumberField defaultValue={123_000} label="Size 4" size={4} />
  </Theme>
);
