export function Steps({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid gap-x-4 gap-y-8 md:grid-cols-[auto_1fr_1fr]">
      {children}
    </div>
  );
}

export function Step({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="group/step col-span-full grid grid-cols-subgrid gap-x-3 gap-y-2 *:m-0! md:items-start md:*:col-start-2 [&_.codeblock]:col-start-3 [&_.codeblock]:row-start-1 [&_.codeblock]:row-end-3 [&_:is(h1,h2,h3,h4,h5,h6)]:leading-6"
      style={{ counterIncrement: "step" }}
    >
      <div className="relative z-10 col-start-1! col-end-2! row-start-1! grid grid-cols-[auto_1fr] items-center gap-3 md:grid-cols-subgrid">
        <div className="flex size-6 items-center justify-center border border-neutral-line border-t-transparent border-b-transparent border-l-transparent">
          <span className="font-bold font-mono text-[11px] text-neutral-text before:[content:counter(step)]" />
        </div>
      </div>

      {children}
    </div>
  );
}
