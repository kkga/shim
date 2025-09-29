"use client";
import { NumberField } from "@/components/number-field";
import { Theme } from "@/lib/theme";

export default () => (
  <Theme labelPosition="side">
    <NumberField label="Classic" variant="classic" />
    <NumberField label="Soft" variant="soft" />
    <NumberField label="Outline" variant="outline" />
  </Theme>
);
