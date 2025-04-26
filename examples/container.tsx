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
        "flex h-[600px] flex-col overflow-clip rounded-lg shadow-md",
        className,
      )}
    >
      {children}
    </div>
  )
}
