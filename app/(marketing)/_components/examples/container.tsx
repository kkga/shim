import { cx } from "tailwind-variants";

export function ExampleContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cx(
        "flex h-[600px] flex-col overflow-clip rounded-xl shadow-sm",
        className
      )}
    >
      {children}
    </div>
  );
}
