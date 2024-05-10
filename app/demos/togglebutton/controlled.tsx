"use client"
import { PushPin } from "@phosphor-icons/react"
import { ToggleButton } from "@ui/togglebutton"
import { useState } from "react"

export default () => {
  const [isSelected, setSelected] = useState(false)

  return (
    <ToggleButton isSquare isSelected={isSelected} onChange={setSelected} aria-label="pin">
      <PushPin size={16} weight={isSelected ? "fill" : "regular"} />
    </ToggleButton>
  )
}
