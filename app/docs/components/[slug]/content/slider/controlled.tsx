"use client";
import { useState } from "react";
import { Slider } from "@/components/slider";

export default () => {
  const [value, setValue] = useState<number | number[]>(73);

  return (
    <>
      <Slider label="Slope" onChange={setValue} value={value} />
      <p>Value: {value}</p>
    </>
  );
};
