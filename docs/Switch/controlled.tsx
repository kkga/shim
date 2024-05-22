"use client"
import { Switch } from "@ui/Switch"
import { useState } from "react"

export default () => {
  const [isOn, setIsOn] = useState(false)
  return (
    <>
      <Switch isSelected={isOn} onChange={setIsOn}>
        On
      </Switch>
      <p>
        Switch is <strong>{isOn ? "on" : "off"}</strong>
      </p>
    </>
  )
}
