"use client"
import { SearchField } from "@ui/SearchField"
import { useState } from "react"

export default () => {
  const [value, setValue] = useState("Get started")

  return (
    <>
      <SearchField value={value} onChange={setValue} aria-label="Search" />
      <p>Value: {value}</p>
    </>
  )
}
