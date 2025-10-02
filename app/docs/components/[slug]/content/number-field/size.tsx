"use client";
import { NumberField } from "@/components/number-field";
import { Theme } from "@/lib/theme";

export default () => (
  <Theme labelPosition="side">
    <NumberField defaultValue={123_000} label="Size 1" size={1} />
    <NumberField defaultValue={123_000} label="Size 2" size={2} />
    <NumberField defaultValue={123_000} label="Size 3" size={3} />
    <NumberField defaultValue={123_000} label="Size 4" size={4} />
  </Theme>
);
