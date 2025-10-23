"use client";
import { Theme } from "@/shim-ui/lib/theme";
import { NumberField } from "@/shim-ui/number-field";

export default () => (
  <Theme labelPosition="side">
    <NumberField label="Classic" variant="classic" />
    <NumberField label="Soft" variant="soft" />
    <NumberField label="Outline" variant="outline" />
  </Theme>
);
