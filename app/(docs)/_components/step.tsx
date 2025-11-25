import { CodeBlock, type CodeItem } from "./code-block";

export function Step({
  title,
  code,
  reset,
  children,
}: {
  title?: string;
  code?: CodeItem[] | string;
  reset?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <div
      className="group/step col-span-full my-8 grid grid-cols-[auto_1fr] grid-rows-[24px_auto] gap-x-2 gap-y-2 text-[15px] leading-normal md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-x-4 md:gap-y-0"
      style={{
        counterIncrement: "step",
        ...(reset ? { counterReset: "step" } : {}),
      }}
    >
      <div className="relative z-10 col-start-1! col-end-2! row-start-1!">
        <div className="mb-4 flex size-6 items-center justify-center rounded border border-neutral-3 bg-panel">
          <span className="font-medium text-neutral-text-contrast text-xs tabular-nums before:[content:counter(step)]" />
        </div>
      </div>

      {title && (
        <strong className="col-start-2! row-start-1! leading-6">{title}</strong>
      )}

      <div className="col-span-full *:last:mb-0! md:col-start-2 md:col-end-3">
        {children}
      </div>

      {code && (
        <div className="col-span-full mt-4 md:col-start-3 md:row-start-1 md:row-end-3 md:mt-0">
          {typeof code === "string" ? (
            <CodeBlock
              className="m-0"
              code={[{ content: code, title: "Terminal", highlight: false }]}
            />
          ) : (
            <CodeBlock className="m-0" code={code} />
          )}
        </div>
      )}
    </div>
  );
}
