import { cx } from 'cva'
import { Collapsible } from './collapsible'
import { CopyButton } from './copy-button'
import { Code } from './mdx-components'

interface Props {
  code?: string
  collapsed?: boolean
  lang?: string
  className?: string
  raw?: string
  children?: any
}

export async function Pre({
  code,
  children,
  lang,
  className,
  collapsed,
  raw,
}: Props) {
  let source: string | undefined

  if (code) {
    source = code
    lang = lang || 'tsx'
    className = className || ''
  } else if (children) {
    source = children?.props.children
    lang = children?.props.className?.replace('language-', '')
  }

  if (!source) return null

  if (source.split('\n').length > 12 && collapsed === undefined) {
    collapsed = true
  }

  source = source.replace(/\n+$/, '')

  return (
    <div
      className={cx(
        'codeblock group relative flex flex-col overflow-auto',
        'max-h-[calc(100dvh-12rem)]',
        'rounded-lg border border-neutral-3 bg-[var(--color-bg-panel)]',
        'font-mono text-[13px] font-[400] leading-5 text-neutral-text',
        '[&>code]:text-[100%]',
        className,
      )}
    >
      {collapsed ?
        <Collapsible defaultCollapsed={collapsed}>
          <pre className="w-full flex-1 overflow-scroll p-4">
            <Code className="text-sm!">{source}</Code>
          </pre>
        </Collapsible>
      : <pre className="w-full flex-1 overflow-scroll p-4">
          <Code className="text-sm!">{source}</Code>
        </pre>
      }

      <div className="invisible absolute top-4 right-4 ml-auto flex size-5 items-center justify-center group-hover:visible">
        <CopyButton
          className="backdrop-blur-sm"
          text={raw || source}
          title="Copy to clipboard"
        />
      </div>
    </div>
  )
}
