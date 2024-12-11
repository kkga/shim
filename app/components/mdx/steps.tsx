import clsx from "clsx"

export function Steps({ children }) {
  return (
    <div className="my-8 grid gap-x-4 gap-y-8 md:grid-cols-[auto_2fr_3fr]">
      {children}
    </div>
  )
}

export function Step({ title, children }) {
  return (
    <div
      className={clsx(
        "group/step relative col-span-full grid grid-cols-subgrid gap-4 text-[14px] leading-normal",
        "md:grid-rows-[auto_1fr] md:items-start md:gap-y-2 md:*:col-start-2",
        "md:[&>.codeblock]:col-start-3 md:[&>.codeblock]:col-end-4 md:[&>.codeblock]:row-span-2 md:[&>.codeblock]:row-start-1",
      )}
      style={{ counterIncrement: "step" }}
    >
      <div className="col-start-1! col-end-3! row-start-1! relative z-10 grid grid-cols-[auto_1fr] items-center gap-2 md:grid-cols-subgrid md:gap-4">
        <div className="bg-neutral-4 flex size-6 items-center justify-center rounded-full">
          <span className="text-neutral-text text-[12px] font-medium before:[content:counter(step)]" />
        </div>
        <div className="text-neutral-text-contrast font-medium leading-5">
          {title}
        </div>
      </div>

      <div
        aria-hidden
        className="line col-start-1! bg-neutral-line invisible absolute -bottom-7 left-3 right-auto top-7 -z-10 w-px group-last/step:hidden md:visible"
      ></div>

      {children}
    </div>
  )
}
