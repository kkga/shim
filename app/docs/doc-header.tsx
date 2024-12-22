import clsx from "clsx"
import { H1, P } from "../components/mdx/mdx-components"

interface DocHeaderProps {
  title: string
  subtitle?: string
  children?: React.ReactNode
  className?: string
}

export function DocHeader({
  title,
  subtitle,
  children,
  className,
}: DocHeaderProps) {
  return (
    <header
      className={clsx(
        "border-neutral-4 relative col-span-full flex flex-col gap-6 border-b pb-6",
        className,
      )}
    >
      <div>
        <H1 className="">{title}</H1>
        {subtitle && (
          <P className="mb-0! mt-2! text-base font-medium">{subtitle}</P>
        )}
      </div>
      {children && (
        <>
          <div aria-hidden className="bg-neutral-4 h-px w-16"></div>
          {children}
        </>
      )}
    </header>
  )
}
