import clsx from "clsx"

export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid gap-x-4 gap-y-8 md:grid-cols-[auto_1fr]">
      {children}
    </div>
  )
}

export function Step({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={clsx(
        "group/step relative col-span-full grid grid-cols-subgrid gap-x-3 gap-y-4",
        "md:items-start md:*:col-start-2",
        "*:m-0!",
      )}
      style={{ counterIncrement: "step" }}
    >
      <div className="col-start-1! col-end-2! row-start-1! relative z-10 grid grid-cols-[auto_1fr] items-center gap-3 md:grid-cols-subgrid">
        <div className="bg-neutral-4 flex size-[21px] items-center justify-center rounded-full">
          <span className="text-neutral-text-contrast text-[12px] font-medium before:[content:counter(step)]" />
        </div>
      </div>

      <div
        aria-hidden
        className="line col-start-1! bg-neutral-4 invisible absolute -bottom-7 left-2.5 right-auto top-6 -z-10 w-px group-last/step:hidden md:visible"
      ></div>

      {children}
    </div>
  )
}
