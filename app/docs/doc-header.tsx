interface DocHeaderProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export function DocHeader({ title, subtitle, children }: DocHeaderProps) {
  return (
    <header className="relative mb-16 flex flex-col gap-6">
      <div>
        <h1 className="text-neutral-text-contrast text-2xl font-medium">
          {title}
        </h1>
        <p className="text-neutral-text mt-2 text-[16px]">{subtitle}</p>
      </div>
      <div className="bg-neutral-line h-px w-16"></div>

      {children}
    </header>
  )
}
