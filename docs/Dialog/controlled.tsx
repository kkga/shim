"use client"
import { Button } from "@ui/Button"
import { Dialog } from "@ui/Dialog"
import { useState } from "react"

export default () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <>
      <Button onPress={() => setIsOpen(true)} className="self-start">
        Open dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onOpenChange={(isOpen) => setIsOpen(isOpen)}
        title="Dialog opened"
        className="max-w-sm"
      >
        <p>Click outside to close the dialog.</p>
      </Dialog>
    </>
  )
}
