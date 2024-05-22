"use client"

import { Select, SelectItem } from "@ui/Select"
import { useState } from "react"
import { Key } from "react-aria-components"

export default () => {
  let options = [
    { name: "Open" },
    { name: "Closed" },
    { name: "In Progress" },
    { name: "Resolved" },
  ]
  let [status, setStatus] = useState<Key>("Open")

  return (
    <>
      <Select
        aria-label="Status"
        items={options}
        selectedKey={status}
        onSelectionChange={(selected) => setStatus(selected)}
      >
        {({ name }) => <SelectItem id={name}>{name}</SelectItem>}
      </Select>
      <p>
        Selected: <strong>{status}</strong>
      </p>
    </>
  )
}
