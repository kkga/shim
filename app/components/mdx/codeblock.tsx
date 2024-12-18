import clsx from "clsx"
import { ComponentPropsWithoutRef } from "react"
import { highlight } from "sugar-high"
import { Collapsible } from "./collapsible"
import { CopyButton } from "./copy-button"

interface PreProps extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: string
  title?: string
  collapsed?: boolean
  lang?: string
  className?: string
  raw?: string
  children?: string | { props: { children: string } }
}

function Pre({ code, children, className, title, collapsed, raw }: PreProps) {
  let source: string | undefined

  if (code) {
    source = code
  } else if (typeof children === "object" && "props" in children) {
    source = children.props.children
  }

  if (!source) return null

  if (source.split("\n").length > 20 && collapsed === undefined) {
    collapsed = true
  }

  source = source.replace(/\n+$/, "")

  return (
    <div
      className={clsx(
        "codeblock group relative flex flex-col overflow-auto",
        "max-h-[calc(100dvh-12rem)]",
        "bg-panel rounded-lg shadow-[var(--shadow-xs)]",
        "text-neutral-text font-mono text-[13px] leading-normal",
        "[&_code]:text-[100%]!",
        className,
      )}
    >
      {title ?
        <div className="bg-neutral-base border-neutral-3 flex justify-between border-b p-2 pl-4">
          <span className="text-neutral-text-contrast font-semibold">
            {title}
          </span>

          <div className="ml-auto flex size-5 items-center justify-center">
            <CopyButton
              className="backdrop-blur-sm"
              text={raw || source}
              title="Copy to clipboard"
            />
          </div>
        </div>
      : <div className="absolute right-2 top-2 ml-auto flex size-5 items-center justify-center group-hover:visible">
          <CopyButton
            className="backdrop-blur-sm"
            text={raw || source}
            title="Copy to clipboard"
          />
        </div>
      }

      {collapsed ?
        <Collapsible collapsed={collapsed}>
          <pre className="w-full flex-1 overflow-scroll p-4">
            <Code>{source}</Code>
          </pre>
        </Collapsible>
      : <pre className="w-full flex-1 overflow-scroll p-4">
          <Code>{source}</Code>
        </pre>
      }
    </div>
  )
}

function Code({ className, ...props }: ComponentPropsWithoutRef<"code">) {
  const html = highlight(props.children as string)

  return (
    <code
      className={clsx(
        "text-neutral-text-contrast font-book font-mono text-[95%]",
        className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export { Code, Pre }
