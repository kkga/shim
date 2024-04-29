import type { MDXRemoteProps } from 'next-mdx-remote'
import Link from 'next/link'
import { highlight } from 'sugar-high'
import { Demo } from './demo'
import { demoComponents } from './demo-components'
import { Pre } from './pre'

function CustomLink(props) {
  const href = props.href
  const className =
    'text-accent-text underline-offset-2 underline decoration-accent-line hover:decoration-accent-border-hover'

  if (href.startsWith('/')) {
    return (
      <Link href={href} className={className} {...props}>
        {props.children}
      </Link>
    )
  }

  if (href.startsWith('#')) {
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

export function Code({ children, ...props }) {
  const codeHTML = highlight(children)
  return (
    <code
      className="text-[95%]"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: <explanation>
      dangerouslySetInnerHTML={{ __html: codeHTML }}
      {...props}
    />
  )
}

export const H1 = (props) => (
  <h1
    className="text-3xl font-semibold leading-tight text-neutral-text-contrast"
    {...props}
  />
)

export const H2 = (props) => (
  <h2
    className="mt-12 mb-3 text-2xl font-medium leading-tight text-neutral-text-contrast"
    {...props}
  />
)

export const H3 = (props) => (
  <h3
    className="mt-12 mb-2 text-lg font-medium leading-tight text-neutral-text-contrast"
    {...props}
  />
)

export const H4 = (props) => (
  <h4
    className="mt-8 mb-4 text-lg font-semibold text-neutral-text-contrast"
    {...props}
  />
)

export const H5 = (props) => (
  <h5
    className="mt-8 mb-4 text-base font-semibold text-neutral-text-contrast"
    {...props}
  />
)

export const P = (props) => <p className="mb-4 max-w-[72ch]" {...props} />

export const mdxComponents: MDXRemoteProps['components'] = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: (props) => (
    <h6
      className="mt-8 mb-4 text-sm font-semibold text-neutral-text-contrast"
      {...props}
    />
  ),
  p: P,
  ul: (props) => <ul className="my-4 list-inside list-disc" {...props} />,
  hr: (props) => <hr className="my-12 border-neutral-border" {...props} />,
  a: CustomLink,
  code: Code,
  pre: Pre,
  Demo,
  ...demoComponents,
}

declare global {
  type MDXProvidedComponents = typeof mdxComponents
}
