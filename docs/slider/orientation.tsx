"use client";
import { Fragment } from "react";
import { Slider } from "@/components/slider";
import { SIZES } from "@/lib/theme";

export default () => (
  <div className="flex h-48 gap-4 self-start">
    {SIZES.map((size) => (
      <Fragment key={size}>
        <Slider
          aria-label="Slope"
          defaultValue={37}
          isFilled
          orientation="vertical"
          size={size}
        />
        <Slider
          aria-label="Slope"
          defaultValue={[17, 73]}
          isFilled
          label="dddd"
          orientation="vertical"
          size={size}
        />
      </Fragment>
    ))}
  </div>
);
