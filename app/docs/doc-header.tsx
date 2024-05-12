interface DocHeaderProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export function DocHeader({ title, subtitle, children }: DocHeaderProps) {
  return (
    <header className="relative mb-16 flex flex-col gap-6">
      <div>
        <h1 className="text-2xl font-medium text-neutral-text-contrast">
          {title}
        </h1>
        <p className="mt-2 text-[16px] text-neutral-text">{subtitle}</p>
      </div>
      <div className="h-px w-16 bg-neutral-line"></div>

      {children}
    </header>
  )
}
