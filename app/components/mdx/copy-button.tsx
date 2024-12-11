"use client"

import { Check, Copy } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import { Tooltip, TooltipTrigger } from "@ui/Tooltip"
import { useEffect, useState } from "react"
import { useClipboard } from "./useClipboard"

interface Props {
  text: string
  children?: React.ReactNode
  title?: string
  className?: string
}

function CopyButton({ children, text, title, className }: Props) {
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
    <TooltipTrigger delay={500}>
      <Button
        onPress={handleCopy}
        intent={justCopied ? "success" : "neutral"}
        className={className}
        isSquare
      >
        {justCopied ?
          <Check size={16} weight="bold" />
        : children ?
          children
        : <Copy weight="duotone" size={16} />}
      </Button>
      <Tooltip>{title || "Copy to clipboard"}</Tooltip>
    </TooltipTrigger>
  )
}

export { CopyButton }
