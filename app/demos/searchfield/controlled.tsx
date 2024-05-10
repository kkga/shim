"use client"
import { SearchField } from "@ui/searchfield"
import { useState } from "react"

export default () => {
  const [value, setValue] = useState("Get started")

  return (
    <>
      <SearchField label="Docs" value={value} onChange={setValue} />
      <span>Value: {value}</span>
    </>
  )
}
