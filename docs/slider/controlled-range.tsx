"use client";
import { useState } from "react";
import { Slider } from "@/components/slider";

export default () => {
  const [range, setRange] = useState<number | number[]>([17, 73]);

  return (
    <>
      <Slider label="Range" onChange={setRange} value={range} />
      <p className="tabular-nums">
        Range: {Array.isArray(range) ? `${range[0]}–${range[1]}` : range}
      </p>
    </>
  );
};
