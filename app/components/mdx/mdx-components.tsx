import { Info } from "@phosphor-icons/react/dist/ssr"
import { cx } from "cva"
import type { MDXRemoteProps } from "next-mdx-remote"
import Link from "next/link"
import { highlight } from "sugar-high"
import { Demo } from "./demo"
import { demoComponents } from "./demo-components"
import { Pre } from "./pre"
import { Step, Steps } from "./steps"

function CustomLink(props) {
  const href = props.href
  const className =
    "text-accent-text underline-offset-2 underline decoration-accent-line hover:decoration-accent-border-hover"

  if (href.startsWith("/")) {
    return (
      <Link href={href} className={className} {...props}>
        {props.children}
      </Link>
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

export function Code(props) {
  const html = highlight(props.children)

  return (
    <code
      className={cx(
        "text-neutral-text-contrast font-mono text-[95%]",
        props.className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export const H1 = (props) => (
  <h1
    className="text-neutral-text-contrast text-3xl font-medium leading-tight"
    {...props}
  />
)

export const H2 = (props) => (
  <h2
    className="text-neutral-text-contrast mb-3 mt-12 text-lg font-medium leading-tight"
    {...props}
  />
)

export const H3 = (props) => (
  <h3
    className="text-neutral-text-contrast mb-2 mt-12 text-base font-medium leading-tight"
    {...props}
  />
)

export const H4 = (props) => (
  <h4
    className="text-neutral-text-contrast mb-2 mt-6 text-base font-medium leading-tight"
    {...props}
  />
)

export const H5 = (props) => (
  <h5
    className="text-neutral-text-contrast mb-2 mt-6 text-sm font-medium"
    {...props}
  />
)

export const P = (props) => <p className="mb-4 max-w-[72ch]" {...props} />

export const Note = (props) => (
  <div className="text-success-text flex items-center gap-2 text-sm *:m-0">
    <Info size={16} weight="duotone" />
    {props.children}
  </div>
)

export const HR = (props) => (
  <hr {...props} className={cx("border-neutral-line my-12", props.className)} />
)

export const mdxComponents: MDXRemoteProps["components"] = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: (props) => (
    <h6
      className="text-neutral-text-contrast mb-4 mt-8 text-sm font-medium"
      {...props}
    />
  ),
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
  a: CustomLink,
  code: Code,
  pre: (props) => <Pre {...props} />,
  Demo,
  Note,
  Steps,
  Step,
  Pre,
  ...demoComponents,
}

declare global {
  type MDXProvidedComponents = typeof mdxComponents
}
