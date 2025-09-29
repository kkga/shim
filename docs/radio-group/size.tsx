"use client";
import { Radio, RadioGroup } from "@/components/radio-group";
import { SIZES } from "@/lib/theme";

export default () =>
  SIZES.map((size) => (
    <RadioGroup defaultValue={"react"} key={size} label="Framework" size={size}>
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
  ));
