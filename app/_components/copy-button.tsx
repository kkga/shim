"use client"

import { Check, Copy } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import { useEffect, useState } from "react"

const useClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>("")

  const copyToClipboard = (value: string) => {
    return new Promise<string>((resolve, reject) => {
      try {
        if (navigator?.clipboard?.writeText) {
          navigator.clipboard
            .writeText(value)
            .then(() => {
              setCopiedText(value)
              resolve(value)
            })
            .catch((e) => {
              setCopiedText(null)
              reject(e)
            })
        } else {
          setCopiedText(null)
          throw new Error("Clipboard not supported")
        }
      } catch (e) {
        reject(e)
      }
    })
  }

  return { copiedText, copyToClipboard }
}

function CopyButton({
  children,
  text,
  className,
}: {
  text: string
  children?: React.ReactNode
  className?: string
}) {
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
