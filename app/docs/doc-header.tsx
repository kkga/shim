import { ArrowUpRight, WarningDiamond } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'
import type { ComponentMetadata } from './lib/utils'

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
      className="flex items-center gap-0.5 text-sm text-accent-text underline decoration-accent-line underline-offset-2 hover:decoration-accent-border-hover"
      title={title}
      rel={external ? 'noreferrer' : undefined}
      target={external ? '_blank' : undefined}
    >
      {children}
      {external && <ArrowUpRight size={16} />}
    </Link>
  )
}

function MetadataRow({
  docUrl,
  aria,
  srcFilename,
  composes,
  name,
}: ComponentMetadata) {
  return (
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
  )
}

function DependencyWarning({ deps }: { deps: string[] }) {
  return (
    <div className="mt-6 inline-flex items-center gap-2 self-start text-sm text-neutral-text">
      <WarningDiamond
        weight="duotone"
        size={16}
        className="text-warning-text"
      />
      <p>
        Install the dependencies before using this component:{' '}
        {deps.map((component, i) => (
          <span key={component}>
            {i > 0 && ', '}
            <Link
              href={`/docs/${component}`}
              className="underline decoration-neutral-line underline-offset-2 hover:decoration-neutral-border-hover"
            >
              {component}
            </Link>
          </span>
        ))}
      </p>
    </div>
  )
}

interface DocHeaderProps {
  metadata: ComponentMetadata
}

export function DocHeader({ metadata }: DocHeaderProps) {
  const { name, description, composes } = metadata

  return (
    <header className="mb-16">
      <h1 className="text-3xl font-semibold text-neutral-text-contrast">
        {name}
      </h1>
      <p className="mt-2 text-lg text-neutral-text">{description}</p>

      <MetadataRow {...metadata} />

      {composes && <DependencyWarning deps={composes} />}
    </header>
  )
}
