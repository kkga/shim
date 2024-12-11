import { Info, WarningDiamond } from "@phosphor-icons/react/dist/ssr"
import { clsx } from "clsx"
import type { MDXRemoteProps } from "next-mdx-remote"
import { default as NextLink } from "next/link"
import { HTMLAttributes } from "react"
import { highlight } from "sugar-high"
import { Collapsible } from "./collapsible"
import { CopyButton } from "./copy-button"
import { Demo } from "./demo"
import { demoComponents } from "./demo-components"
import { Step, Steps } from "./steps"

function Link({ className, href, ...props }) {
  if (href.startsWith("/")) {
    return (
      <NextLink
        href={href}
        className={clsx(
          "text-accent-text decoration-accent-line hover:decoration-accent-border-hover underline underline-offset-2",
          className,
        )}
        {...props}
      >
        {props.children}
      </NextLink>
    )
  }

  if (href.startsWith("#")) {
    return <a className={className} {...props} />
  }

  return (
    <a
      className={className}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    />
  )
}

function Code({ className, ...props }: HTMLAttributes<HTMLElement>) {
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

interface PreProps {
  code?: string
  collapsed?: boolean
  lang?: string
  className?: string
  raw?: string
  children?: {
    props: {
      children: string
      className: string
    }
  }
}

function Pre({ code, className, collapsed, raw, ...props }: PreProps) {
  let source: string | undefined

  if (code) {
    source = code
    className = className || ""
  } else if (props.children) {
    source = props.children?.props.children
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
        "border-neutral-3 bg-panel rounded-lg border",
        "text-neutral-text font-mono text-[13px] leading-normal",
        "[&_code]:text-[100%]!",
        className,
      )}
    >
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

      <div className="invisible absolute right-4 top-4 ml-auto flex size-5 items-center justify-center group-hover:visible">
        <CopyButton
          className="backdrop-blur-sm"
          text={raw || source}
          title="Copy to clipboard"
        />
      </div>
    </div>
  )
}

function H1({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h1
      className={clsx(
        "text-neutral-text-contrast text-3xl font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H2({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={clsx(
        "text-neutral-text-contrast mb-3 mt-12 text-lg font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H3({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={clsx(
        "text-neutral-text-contrast mb-2 mt-12 text-base font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H4({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={clsx(
        "text-neutral-text-contrast mb-2 mt-6 text-base font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H5({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h5
      className={clsx(
        "text-neutral-text-contrast mb-2 mt-6 text-sm font-medium",
        className,
      )}
      {...props}
    />
  )
}

function H6({ className, ...props }: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h6
      className={clsx(
        "text-neutral-text-contrast mb-4 mt-8 text-sm font-medium",
        className,
      )}
      {...props}
    />
  )
}

function P({ className, ...props }: HTMLAttributes<HTMLParagraphElement>) {
  return <p className={clsx("mb-4 max-w-[72ch]", className)} {...props} />
}

function Note({
  intent = "info",
  children,
}: {
  intent?: "info" | "warning"
  children: React.ReactNode
}) {
  let colors = {
    info: "text-accent-text",
    warning: "text-warning-text",
  }

  let icons = {
    info: <Info size={16} weight="duotone" />,
    warning: <WarningDiamond size={16} weight="duotone" />,
  }

  return (
    <div
      className={clsx(
        "font-book flex items-center gap-2 text-[13px] *:m-0",
        colors[intent],
      )}
    >
      {icons[intent]}
      {children}
    </div>
  )
}

function HR({ className, ...props }: HTMLAttributes<HTMLHRElement>) {
  return (
    <hr {...props} className={clsx("border-neutral-line my-12", className)} />
  )
}

const mdxComponents: MDXRemoteProps["components"] = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: (props) => (
    <ul className="my-4 max-w-prose list-outside list-disc pl-4" {...props} />
  ),
  li: (props) => <li className="mb-4" {...props} />,
  hr: HR,
  em: (props) => (
    <em className="text-neutral-text-contrast italic" {...props} />
  ),
  strong: (props) => (
    <strong className="text-neutral-text-contrast font-medium" {...props} />
  ),
  a: Link,
  code: Code,
  pre: (props) => <Pre {...props} />,
  Demo,
  Note,
  Steps,
  Step,
  Pre,
  ...demoComponents,
}

export { Code, H1, H2, H3, H4, H5, H6, HR, mdxComponents, Note, P, Pre }

declare global {
  type MDXProvidedComponents = typeof mdxComponents
}
