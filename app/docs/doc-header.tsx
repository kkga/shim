interface DocHeaderProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export function DocHeader({ title, subtitle, children }: DocHeaderProps) {
  return (
    <header className="mb-16">
      <h1 className="text-3xl font-semibold text-neutral-text-contrast">
        {title}
      </h1>
      <p className="mt-2 text-lg text-neutral-text">{subtitle}</p>

      {children}
    </header>
  )
}
