interface DocHeaderProps {
  title: string
  subtitle: string
  children?: React.ReactNode
}

export function DocHeader({ title, subtitle, children }: DocHeaderProps) {
  return (
    <header className="relative mb-16 flex flex-col gap-6">
      <div>
        <h1 className="text-neutral-text-contrast text-lg font-medium leading-tight lg:text-2xl">
          {title}
        </h1>
        <p className="text-neutral-text mt-2 text-sm lg:text-base">
          {subtitle}
        </p>
      </div>
      <div className="bg-neutral-line h-px w-16"></div>

      {children}
    </header>
  )
}
