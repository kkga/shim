"use client"

import { Check, Copy } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import { useEffect, useState } from "react"
import { useClipboard } from "./useClipboard"

interface Props {
  text: string
  children?: React.ReactNode
  className?: string
}

function CopyButton({ children, text, className }: Props) {
  const { copyToClipboard } = useClipboard()
  const [justCopied, setJustCopied] = useState(false)

  const handleCopy = () => {
    copyToClipboard(text)
      .then(() => {
        setJustCopied(true)
      })
      .catch((error) => {
        console.error("Failed to copy!", error)
      })
  }

  useEffect(() => {
    if (justCopied) {
      const timeout = setTimeout(() => {
        setJustCopied(false)
      }, 1500)
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [justCopied])

  return (
    <Button
      onPress={handleCopy}
      intent={justCopied ? "success" : "neutral"}
      className={className}
    >
      Copy
      {justCopied ?
        <Check size={16} weight="bold" />
      : children ?
        children
      : <Copy weight="duotone" size={16} />}
    </Button>
  )
}

export { CopyButton }
