export function Step({
  title,
  reset,
  children,
}: {
  title?: string;
  reset?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="group/step col-span-full my-8 grid grid-cols-[auto_1fr] grid-rows-[auto_auto] gap-x-3 gap-y-3 md:items-start md:gap-x-4 md:gap-y-0"
      style={{
        counterIncrement: "step",
        ...(reset ? { counterReset: "step" } : {}),
      }}
    >
      <div className="relative z-10 col-start-1! col-end-2! row-start-1!">
        <div className="flex size-6 items-center justify-center rounded border border-neutral-3 bg-panel">
          <span className="font-medium text-neutral-text-contrast text-sm tabular-nums before:[content:counter(step)]" />
        </div>
      </div>

      {title ? (
        <strong className="col-start-2! row-start-1! mb-0 font-bold leading-6">
          {title}
        </strong>
      ) : null}

      <div className="col-span-full *:last:mb-0! md:col-start-2 md:col-end-3 [&>p]:m-0!">
        {children}
      </div>
    </div>
  );
}
