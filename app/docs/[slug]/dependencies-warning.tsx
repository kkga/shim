import { WarningDiamond } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

function DependenciesWarning({ deps }: { deps: string[] }) {
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

export { DependenciesWarning }
