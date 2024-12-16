"use client"
import { ProgressBar } from "@ui/ProgressBar"
import { useEffect, useState } from "react"

export default () => {
  let [value, setValue] = useState(0)

  // Simulate loading
  useEffect(() => {
    if (value >= 100) return
    let interval = setInterval(
      () => setValue((v) => Math.min(v + Math.random() * 25 + 1, 100)),
      1000,
    )
    return () => clearInterval(interval)
  }, [value])

  return <ProgressBar label="Loading…" value={value} />
}
