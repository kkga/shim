import { WarningDiamond } from '@phosphor-icons/react/dist/ssr'
import Link from 'next/link'

function DependenciesWarning({
  deps,
}: {
  deps: { name: string; slug: string }[]
}) {
  return (
    <div className="flex items-center gap-2 self-start text-sm text-warning-text">
      <WarningDiamond weight="duotone" size={16} />
      <p>
        Install the dependencies before using this component:{' '}
        {deps.map(({ name, slug }, i) => (
          <span key={name}>
            {i > 0 && ', '}
            <Link
              href={`/docs/${slug}`}
              className="text-current underline decoration-warning-line underline-offset-2 hover:decoration-warning-border-hover"
            >
              {name}
            </Link>
          </span>
        ))}
      </p>
    </div>
  )
}

export { DependenciesWarning }
