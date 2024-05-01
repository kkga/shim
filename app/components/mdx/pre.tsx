import { cx } from 'cva'
import { highlight } from 'sugar-high'
import { CopyButton } from './copy-button'

interface PreProps {
  code: string
  lang: string
  className?: string
}

export async function Pre({ code, lang, className, ...props }: PreProps) {
  // const codeHTML = await codeToHtml({ code, language: lang })
  const codeHTML = highlight(code)

  return (
    <pre
      className={cx(
        'group flex items-start overflow-scroll p-3 px-4',
        'max-h-[calc(100vh-16rem)] overflow-x-auto',
        'rounded-lg border border-neutral-line bg-[var(--color-bg-panel)]',
        'font-mono text-[13px] font-[450] leading-5 text-neutral-text',
        '[&>code]:text-[100%]',
        className,
      )}
      {...props}
    >
      <code dangerouslySetInnerHTML={{ __html: codeHTML }} />

      <div className="invisible sticky top-0 right-0 ml-auto flex size-5 items-center justify-center group-hover:visible">
        <CopyButton text={code} title="Copy to clipboard" />
      </div>
    </pre>
  )
}
