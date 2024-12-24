import { LinkButton } from "@/components/Button"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import { highlight as sugar } from "sugar-high"
import { Collapsible } from "./collapsible"
import { CopyButton } from "./copy-button"

interface Props extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: string
  title?: string
  collapsed?: boolean
  compact?: boolean
  children?: string | { props: { children: string } }
  raw?: string
  highlight?: boolean
  className?: string
  clickToCopy?: boolean
  sourceUrl?: string
}

function CodeBlock({
  code,
  title,
  collapsed,
  compact,
  children,
  raw,
  highlight = true,
  className,
  clickToCopy = true,
  sourceUrl,
}: Props) {
  let source: string

  if (code) {
    source = code
  } else if (typeof children === "object" && "props" in children) {
    source = children.props.children
  }

  if (source.split("\n").length > 24 && collapsed === undefined) {
    collapsed = true
  }

  source = source.replace(/\n+$/, "")

  return (
    <div
      className={clsx(
        "codeblock group relative flex max-h-[40rem] flex-col overflow-auto",
        "bg-panel text-neutral-text rounded-lg font-mono text-[13px] leading-normal",
        "**:[pre]:px-4 **:[pre]:py-3",
        className,
      )}
    >
      {title && (
        <div className="border-neutral-4 ml-4 h-8 shrink-0 self-start border-b py-1">
          <span className="text-neutral-text font-sans text-xs font-medium leading-6">
            {title}
          </span>
        </div>
      )}

      <div className="not-group-hover:invisible absolute right-0 top-0 z-10 flex gap-1 p-1">
        {sourceUrl && (
          <LinkButton
            target="_blank"
            className="backdrop-blur-sm"
            href={sourceUrl}
          >
            GitHub
            <ArrowUpRight size={16} />
          </LinkButton>
        )}
        {clickToCopy && (
          <CopyButton className="backdrop-blur-sm" text={raw || source} />
        )}
      </div>

      {collapsed ?
        <Collapsible compact={compact} collapsed={collapsed}>
          <pre className="grow overflow-scroll">
            <Code highlight={highlight}>{source}</Code>
          </pre>
        </Collapsible>
      : <pre className="grow overflow-scroll">
          <Code highlight={highlight}>{source}</Code>
        </pre>
      }
    </div>
  )
}

function Code({
  className,
  highlight = false,
  ...props
}: ComponentPropsWithoutRef<"code"> & {
  highlight?: boolean
}) {
  let code = String(props.children).trim()
  let html = highlight ? sugar(code) : code

  return (
    <code
      className={clsx(
        "text-neutral-text-contrast font-book min-w-min font-mono",
        className,
      )}
      dangerouslySetInnerHTML={highlight ? { __html: html } : undefined}
    >
      {!highlight ? html : null}
    </code>
  )
}

export { Code, CodeBlock }
