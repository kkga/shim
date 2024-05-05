import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import { Fragment } from 'react'
import { ComponentMetadata } from '../lib/types'

function MetadataItem({ title, children }) {
  return (
    <div className="flex flex-col gap-2">
      <span className="text-xs font-medium text-neutral-text">{title}</span>
      {children}
    </div>
  )
}

function MetadataLink({ href, title, external, children }) {
  return (
    <Link
      href={href}
      className="text-sm text-accent-text underline decoration-accent-line underline-offset-2 hover:decoration-accent-border-hover"
      title={title}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
      {external && (
        <ArrowUpRight className="ml-0.5 inline align-bottom" size={16} />
      )}
    </Link>
  )
}

interface MetadataRowProps extends ComponentMetadata {
  dependencies?: { name: string; slug: string }[]
}

function MetadataRow({
  docUrl,
  aria,
  srcFilename,
  name,
  dependencies,
}: MetadataRowProps) {
  return (
    <div className="relative flex gap-12">
      {docUrl && (
        <MetadataItem title="Documentation">
          <MetadataLink
            href={docUrl}
            title={`View ${name} documentation`}
            external
          >
            React Aria {name}
          </MetadataLink>
        </MetadataItem>
      )}
      {aria && (
        <MetadataItem title="Pattern">
          <MetadataLink
            href={
              aria.startsWith('http') ? aria : (
                `https://www.w3.org/WAI/ARIA/apg/patterns/${aria}`
              )
            }
            title="View ARIA pattern"
            external
          >
            W3C ARIA
          </MetadataLink>
        </MetadataItem>
      )}
      {srcFilename && (
        <MetadataItem title="Source code">
          <MetadataLink
            href={`https://github.com/kkga/shim-ui/blob/master/app/ui/${srcFilename}.tsx`}
            title="View source code on GitHub"
            external
          >
            GitHub
          </MetadataLink>
        </MetadataItem>
      )}
      {dependencies && (
        <MetadataItem title="Composes">
          <span className="text-sm">
            {dependencies.map(({ name, slug }, i) => (
              <Fragment key={name}>
                {i > 0 && ', '}
                <MetadataLink
                  external={false}
                  href={`/docs/${slug}`}
                  title={`View ${name} documentation`}
                >
                  {name}
                </MetadataLink>
              </Fragment>
            ))}
          </span>
        </MetadataItem>
      )}
    </div>
  )
}

export { MetadataRow }
