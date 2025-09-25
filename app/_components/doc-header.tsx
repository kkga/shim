import { Separator } from "@/components/Separator"
import clsx from "clsx"
import { H1, P } from "./mdx-components"

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
        "doc-section border-neutral-3 col-span-full flex flex-col gap-6 border-b",
        className,
      )}
    >
      <div>
        <H1>{title}</H1>
        {subtitle && (
          <P className="mb-0! mt-2! text-neutral-text text-base font-medium">
            {subtitle}
          </P>
        )}
      </div>
      {children && (
        <>
          <Separator className="bg-neutral-4 max-w-16" />
          {children}
        </>
      )}
    </header>
  )
}
