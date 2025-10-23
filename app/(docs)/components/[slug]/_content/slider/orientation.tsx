"use client";
import { Fragment } from "react";
import { Slider } from "@/shim-ui/slider";

export default () => (
  <>
    {([1, 2, 3, 4] as const).map((size) => (
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
          orientation="vertical"
          size={size}
        />
      </Fragment>
    ))}
  </>
);
