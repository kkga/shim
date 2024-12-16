"use client"
import { SIZES } from "@lib/theme"
import { Slider } from "@ui/Slider"
import { Fragment } from "react"

export default () => (
  <div className="flex h-48 gap-4 self-start">
    {SIZES.map((size) => (
      <Fragment key={size}>
        <Slider
          orientation="vertical"
          size={size}
          isFilled
          defaultValue={37}
          aria-label="Slope"
        />
        <Slider
          orientation="vertical"
          size={size}
          isFilled
          defaultValue={[17, 73]}
          aria-label="Slope"
          label="dddd"
        />
      </Fragment>
    ))}
  </div>
)
