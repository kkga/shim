import { ArrowUpRight } from '@phosphor-icons/react/dist/ssr'
import type { Metadata } from './utils'

interface DocHeaderProps {
  metadata: Metadata
}

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
    <a
      href={href}
      className="flex items-center gap-0.5 text-sm text-accent-text underline decoration-accent-line underline-offset-2 hover:decoration-accent-border-hover"
      title={title}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
      {external && <ArrowUpRight size={16} />}
    </a>
  )
}

export function DocHeader({ metadata }: DocHeaderProps) {
  const { name, description, srcFilename, docUrl, aria, composes } = metadata

  return (
    <header className="mb-16">
      <h1 className="text-3xl font-medium text-neutral-text-contrast">
        {name}
      </h1>
      <p className="mt-4 text-neutral-text">{description}</p>

      <div className="relative mt-6 flex gap-12 pt-6 before:absolute before:top-0 before:h-px before:w-12 before:bg-neutral-border">
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

        {composes && (
          <MetadataItem title="Composes">
            <div className="flex flex-wrap gap-2">
              {composes.map((component) => (
                <MetadataLink
                  external={false}
                  key={component}
                  href={`/docs/${component}`}
                  title={`View ${component} documentation`}
                >
                  {component}
                </MetadataLink>
              ))}
            </div>
          </MetadataItem>
        )}
      </div>
    </header>
  )
}
