import { cx } from "@lib/style"

export function ExampleContainer({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cx(
        "bg-background flex h-[512px] flex-col overflow-clip rounded-lg shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  )
}
