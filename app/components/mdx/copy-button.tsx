import { Check, ClipboardText } from '@phosphor-icons/react'
import { IconButton } from '@ui/IconButton'
import { Tooltip, TooltipTrigger } from '@ui/Tooltip'
import { useEffect, useState } from 'react'
import { useCopyToClipboard } from 'usehooks-ts'

interface CopyButtonProps {
  text: string
  children?: React.ReactNode
  title?: string
  className?: string
}

function CopyButton({ children, text, title, className }: CopyButtonProps) {
  const [, copy] = useCopyToClipboard()
  const [justCopied, setJustCopied] = useState(false)

  const handleCopy = () => {
    copy(text)
      .then(() => {
        setJustCopied(true)
      })
      .catch((error) => {
        console.error('Failed to copy!', error)
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
      <IconButton
        onPress={handleCopy}
        variant={'ghost'}
        intent={justCopied ? 'success' : 'neutral'}
        className={className}
      >
        {justCopied ? (
          <Check size={16} weight="bold" />
        ) : children ? (
          children
        ) : (
          <ClipboardText weight="duotone" size={16} />
        )}
      </IconButton>
      <Tooltip>{title || 'Copy to clipboard'}</Tooltip>
    </TooltipTrigger>
  )
}

export { CopyButton }
