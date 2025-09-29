export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid gap-x-4 gap-y-8 md:grid-cols-[auto_1fr]">
      {children}
    </div>
  );
}

export function Step({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="group/step relative col-span-full grid grid-cols-subgrid gap-x-3 gap-y-4 *:m-0! md:items-start md:*:col-start-2"
      style={{ counterIncrement: "step" }}
    >
      <div className="relative z-10 col-start-1! col-end-2! row-start-1! grid grid-cols-[auto_1fr] items-center gap-3 md:grid-cols-subgrid">
        <div className="flex size-6 items-center justify-center rounded border border-neutral-line">
          <span className="font-semibold text-[12px] text-neutral-text before:[content:counter(step)]" />
        </div>
      </div>

      <div
        aria-hidden
        className="line -bottom-7 -z-10 invisible absolute top-6 right-auto left-2.5 col-start-1! w-px bg-neutral-4 group-last/step:hidden md:visible"
      />

      {children}
    </div>
  );
}
