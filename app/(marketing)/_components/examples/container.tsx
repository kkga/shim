import { twJoin } from "tailwind-merge";

export function ExampleContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={twJoin(
        "flex h-[600px] flex-col overflow-clip rounded-xl border border-neutral-line",
        className
      )}
    >
      {children}
    </div>
  );
}
