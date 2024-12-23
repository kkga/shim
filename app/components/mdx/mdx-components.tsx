import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/Disclosure"
import { Info, WarningDiamond } from "@phosphor-icons/react/dist/ssr"
import { clsx } from "clsx"
import type { MDXRemoteProps } from "next-mdx-remote"
import { default as NextLink } from "next/link"
import { ComponentPropsWithoutRef } from "react"
import { Demo } from "../demo"
import { Code, CodeBlock } from "./code-block"
import { demoComponents } from "./demo-components"
import { Step, Steps } from "./steps"

function Link({ className, href, ...props }: ComponentPropsWithoutRef<"a">) {
  let classNames = clsx(
    "text-accent-text decoration-accent-line hover:decoration-accent-border-hover underline underline-offset-2",
    className,
  )
  if (href?.startsWith("/")) {
    return (
      <NextLink href={href} className={classNames} {...props}>
        {props.children}
      </NextLink>
    )
  }

  if (href?.startsWith("#")) {
    return <a href={href} className={classNames} {...props} />
  }

  return (
    <a
      className={classNames}
      target="_blank"
      rel="noopener noreferrer"
      href={href}
      {...props}
    />
  )
}

function H1({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={clsx(
        "text-neutral-text-contrast scroll-mt-6 text-balance text-2xl font-semibold leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H2({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={clsx(
        "text-neutral-text-contrast not-first:mt-12 mb-3 scroll-mt-6 text-balance text-base font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H3({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={clsx(
        "text-neutral-text-contrast not-first:mt-12 mb-2 scroll-mt-6 text-balance text-base font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H4({ className, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className={clsx(
        "text-neutral-text-contrast not-first::mt-6 mb-2 scroll-mt-6 text-balance text-base font-medium leading-tight",
        className,
      )}
      {...props}
    />
  )
}

function H5({ className, ...props }: ComponentPropsWithoutRef<"h5">) {
  return (
    <h5
      className={clsx(
        "text-neutral-text-contrast not-first:mt-6 mb-2 scroll-mt-6 text-balance text-sm font-medium",
        className,
      )}
      {...props}
    />
  )
}

function H6({ className, ...props }: ComponentPropsWithoutRef<"h6">) {
  return (
    <h6
      className={clsx(
        "text-neutral-text-contrast not-first::mt-8 mb-4 scroll-mt-6 text-balance text-sm font-medium",
        className,
      )}
      {...props}
    />
  )
}

function P({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={clsx("mb-4 max-w-prose", className)} {...props} />
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
        "font-book flex items-start gap-2 rounded-md text-[13px] leading-5 *:m-0 [&_code]:text-current",
        colors[intent],
      )}
    >
      <div className="flex size-5 shrink-0 items-center justify-center">
        {icons[intent]}
      </div>
      {children}
    </div>
  )
}

function HR({ className, ...props }: ComponentPropsWithoutRef<"hr">) {
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
  ul: (props: ComponentPropsWithoutRef<"ul">) => (
    <ul className="my-4 list-outside list-disc pl-4" {...props} />
  ),
  li: (props: ComponentPropsWithoutRef<"li">) => (
    <li className="mb-2" {...props} />
  ),
  hr: HR,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="text-neutral-text-contrast italic" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="text-neutral-text-contrast font-medium" {...props} />
  ),
  a: Link,
  code: Code,
  pre: CodeBlock,
  Demo,
  Section: Demo,
  Note,
  Steps,
  Step,
  CodeBlock,
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
  ...demoComponents,
}

export { Code, CodeBlock, H1, H2, H3, H4, H5, H6, HR, mdxComponents, Note, P }

declare global {
  type MDXProvidedComponents = typeof mdxComponents
}
