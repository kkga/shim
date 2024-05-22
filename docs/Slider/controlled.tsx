"use client"
import { Slider } from "@ui/Slider"
import { useState } from "react"

export default () => {
  const [value, setValue] = useState<number | number[]>(73)

  return (
    <>
      <Slider label="Slope" value={value} onChange={setValue} />
      <p>Value: {value}</p>
    </>
  )
}
