import { codeToHtml } from '@/docs/lib/highlight'
import { cx } from 'cva'
import { CopyButton } from './copy-button'

interface PreBlockProps {
  code: string
  lang?: string
  className?: string
  raw?: string
}

export interface PreMdxProps {
  raw?: string
  children?: {
    props: {
      className: string
      children: string
    }
  }
}

export async function Pre(props: PreBlockProps | PreMdxProps) {
  let source: string | undefined
  let lang: string | undefined
  let className = ''

  if ('code' in props) {
    source = props.code
    lang = props.lang || 'tsx'
    className = props.className || ''
  } else {
    source = props.children?.props.children
    lang = props.children?.props.className?.replace('language-', '')
  }

  if (!source) return null

  source = source.replace(/\n+$/, '')

  const html = await codeToHtml({ code: source, lang })
  const raw = props.raw || source

  return (
    <pre
      className={cx(
        'group flex items-start overflow-scroll p-3 pl-4',
        'max-h-[calc(100vh-16rem)] overflow-x-auto',
        'rounded-lg border border-neutral-3 bg-[var(--color-bg-panel)]',
        'font-mono text-[13px] font-[400] leading-5 text-neutral-text',
        '[&>code]:text-[100%]',
        className,
      )}
    >
      <code dangerouslySetInnerHTML={{ __html: html }} />

      <div className="invisible sticky top-0 right-0 ml-auto flex size-5 items-center justify-center group-hover:visible">
        <CopyButton text={raw} title="Copy to clipboard" />
      </div>
    </pre>
  )
}
