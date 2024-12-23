"use client"
import { Button } from "@ui/Button"
import { useState } from "react"

export default () => {
  let [isPending, setPending] = useState(false)
  let handlePress = () => {
    setPending(true)
    setTimeout(() => setPending(false), 5000)
  }

  return (
    <Button isPending={isPending} onPress={handlePress}>
      Bookmark
    </Button>
  )
}
