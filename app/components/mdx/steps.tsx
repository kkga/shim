export function Steps({ children }) {
  return (
    <div className="my-8 grid grid-cols-[auto_2fr_3fr] gap-x-4 gap-y-8">
      {children}
    </div>
  )
}

export function Step({ title, children }) {
  return (
    <div
      className={
        'group relative col-span-full grid grid-cols-subgrid grid-rows-[auto_1fr] items-start gap-y-1 text-[14px] leading-normal *:col-start-2 *:m-0 [&>pre]:col-start-3 [&>pre]:col-end-4 [&>pre]:row-span-2 [&>pre]:row-start-1'
      }
      style={{ counterIncrement: 'step' }}
    >
      <div className="relative z-10 col-start-1! col-end-3! row-start-1! grid grid-cols-subgrid items-center">
        <div className="flex size-5 items-center justify-center rounded bg-neutral-5">
          <span className="text-[11px] font-semibold text-neutral-text before:[content:counter(step)]" />
        </div>
        <div className="font-medium leading-5 text-neutral-text-contrast">
          {title}
        </div>
      </div>

      <div
        aria-hidden
        className="line absolute top-6 right-auto -bottom-7 left-2.5 -z-10 col-start-1! w-px bg-neutral-line group-last:hidden"
      ></div>

      {children}
    </div>
  )
}
