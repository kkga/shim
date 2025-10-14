import { twJoin } from "tailwind-merge";
import { CodeBlock, type CodeItem } from "./code-block";

export function Step({
  title,
  description,
  code,
  reset,
}: {
  title?: string;
  description: React.ReactNode;
  code?: CodeItem[] | string;
  reset?: boolean;
}) {
  return (
    <div
      className="group/step col-span-full my-8 grid grid-cols-[auto_1fr] grid-rows-[20px_auto] gap-x-2 gap-y-2 text-sm leading-normal md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-x-4 md:gap-y-0"
      style={{
        counterIncrement: "step",
        ...(reset ? { counterReset: "step" } : {}),
      }}
    >
      <div className="relative z-10 col-start-1! col-end-2! row-start-1!">
        <div className="mb-4 flex size-5 items-center justify-center border border-neutral-line">
          <span className="font-book text-[13px] text-neutral-text-contrast before:[content:counter(step)]" />
        </div>
      </div>

      {title && (
        <strong className="col-start-2! row-start-1! leading-5">{title}</strong>
      )}

      <div
        className={twJoin(
          "col-span-full *:last:mb-0! md:col-start-2",
          code ? "md:col-end-3" : "md:col-end-4"
        )}
      >
        {description}
      </div>

      {code && (
        <div className="col-span-full mt-4 md:col-start-3 md:row-start-1 md:row-end-3 md:mt-0">
          {typeof code === "string" ? (
            <CodeBlock
              className="m-0"
              code={[{ title: "Terminal", content: code, highlight: false }]}
            />
          ) : (
            <CodeBlock className="m-0" code={code} />
          )}
        </div>
      )}
    </div>
  );
}
