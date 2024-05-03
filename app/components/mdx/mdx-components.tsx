import { Info } from '@phosphor-icons/react/dist/ssr'
import { cx } from 'cva'
import type { MDXRemoteProps } from 'next-mdx-remote'
import Link from 'next/link'
import { highlight } from 'sugar-high'
import { Demo } from './demo'
import { demoComponents } from './demo-components'
import { Pre } from './pre'
import { Step, Steps } from './steps'

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

export function Code(props) {
  const html = highlight(props.children)

  return (
    <code
      className={cx(
        'font-mono text-[95%] text-neutral-text-contrast',
        props.className,
      )}
      dangerouslySetInnerHTML={{ __html: html }}
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
    className="mt-12 mb-3 text-xl font-semibold leading-tight text-neutral-text-contrast"
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

export const Note = (props) => (
  <div className="flex items-center gap-2 text-sm text-success-text *:m-0">
    <Info size={16} weight="duotone" />
    {props.children}
  </div>
)

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
  ul: (props) => (
    <ul className="my-4 max-w-prose list-outside list-disc pl-4" {...props} />
  ),
  li: (props) => <li className="mb-4" {...props} />,
  hr: (props) => (
    <hr className="my-12 max-w-prose border-neutral-line" {...props} />
  ),
  em: (props) => (
    <em className="italic text-neutral-text-contrast" {...props} />
  ),
  strong: (props) => (
    <strong className="font-semibold text-neutral-text-contrast" {...props} />
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
