import {
  Disclosure,
  DisclosureHeader,
  DisclosurePanel,
} from "@/components/Disclosure"
import { clsx } from "clsx"
import type { MDXRemoteProps } from "next-mdx-remote"
import { default as NextLink } from "next/link"
import { ComponentPropsWithoutRef } from "react"
import { Code, CodeBlock } from "./code-block"
import { Demo } from "./demo"
import { demoComponents } from "./demo-components"
import { Note } from "./note"
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
        "text-neutral-text-contrast not-first:mt-12 mb-3 scroll-mt-6 text-balance text-lg font-medium leading-tight",
        "after:border-neutral-4 after:mt-3 after:block after:border-b",
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
  return <p className={clsx("mb-3", className)} {...props} />
}

const mdxComponents: MDXRemoteProps["components"] = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className={clsx("my-4 list-outside list-disc pl-4", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={clsx("mb-2", className)} {...props} />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={clsx("border-neutral-line my-12", className)} {...props} />
  ),
  em: ({ className, ...props }: ComponentPropsWithoutRef<"em">) => (
    <em
      className={clsx("text-neutral-text-contrast italic", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className={clsx("text-neutral-text-contrast font-medium", className)}
      {...props}
    />
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

export { H1, H2, H3, H4, H5, H6, mdxComponents, P }

declare global {
  type MDXProvidedComponents = typeof mdxComponents
}
