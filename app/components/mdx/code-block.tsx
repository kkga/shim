import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import { highlight as sugar } from "sugar-high"
import { Collapsible } from "./collapsible"
import { CopyButton } from "./copy-button"

interface Props extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: string
  title?: string
  collapsed?: boolean
  children?: string | { props: { children: string } }
  raw?: string
  highlight?: boolean
  className?: string
  clickToCopy?: boolean
}

function CodeBlock({
  code,
  title,
  collapsed,
  children,
  raw,
  highlight = true,
  className,
  clickToCopy = true,
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
        <div className="border-neutral-4 mx-4 flex h-9 shrink-0 items-center self-start border-b">
          <span className="text-neutral-text font-sans text-[13px] font-medium leading-5">
            {title}
          </span>
        </div>
      )}

      {clickToCopy && (
        <div className="absolute right-1 top-1 z-10">
          <CopyButton
            className="backdrop-blur-sm"
            text={raw || source}
            title="Copy to clipboard"
          />
        </div>
      )}

      {collapsed ?
        <Collapsible collapsed={collapsed}>
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
  let code = props.children.toString()
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
