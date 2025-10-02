"use client";
import { Radio, RadioGroup } from "@/components/radio-group";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <RadioGroup defaultValue={"react"} key={size} label="Framework" size={size}>
      <Radio value="react">React</Radio>
      <Radio value="svelte">Svelte</Radio>
    </RadioGroup>
  ));
