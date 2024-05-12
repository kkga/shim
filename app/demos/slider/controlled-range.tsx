"use client"
import { Slider } from "@ui/slider"
import { useState } from "react"

export default () => {
  const [range, setRange] = useState<number | number[]>([17, 73])

  return (
    <>
      <Slider label="Range" value={range} onChange={setRange} />
      <p className="tabular-nums">
        Range: {range[0]}–{range[1]}
      </p>
    </>
  )
}
