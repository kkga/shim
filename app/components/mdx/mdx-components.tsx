import { type MDXRemoteProps } from 'next-mdx-remote'
import Link from 'next/link'
import { highlight } from 'sugar-high'
import { Demo } from './demo'
import { demoComponents } from './demo-components'
import { Pre } from './pre'

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ))
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ))

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  )
}

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
  return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />
}

export const mdxComponents: MDXRemoteProps['components'] = {
  h1: (props) => (
    <h1
      className="text-3xl font-semibold text-neutral-text-contrast"
      {...props}
    />
  ),
  h2: (props) => (
    <h2
      className="mt-12 mb-4 text-2xl font-medium text-neutral-text-contrast"
      {...props}
    />
  ),
  h3: (props) => (
    <h3
      className="mt-10 mb-4 text-xl font-semibold text-neutral-text-contrast"
      {...props}
    />
  ),
  h4: (props) => (
    <h4
      className="mt-8 mb-4 text-lg font-semibold text-neutral-text-contrast"
      {...props}
    />
  ),
  h5: (props) => (
    <h5
      className="mt-8 mb-4 text-base font-semibold text-neutral-text-contrast"
      {...props}
    />
  ),
  h6: (props) => (
    <h6
      className="mt-8 mb-4 text-sm font-semibold text-neutral-text-contrast"
      {...props}
    />
  ),
  p: (props) => (
    <p className="my-4 max-w-[80ch] text-neutral-text" {...props} />
  ),

  ul: (props) => <ul className="my-4 list-inside list-disc" {...props} />,

  hr: (props) => <hr className="my-12 border-neutral-border" {...props} />,

  a: CustomLink,
  code: Code,
  pre: Pre,
  Demo,
  Table,
  ...demoComponents,
}

declare global {
  type MDXProvidedComponents = typeof mdxComponents
}
