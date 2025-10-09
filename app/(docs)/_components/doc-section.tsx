import type { Key } from "react-aria-components";
import { twMerge } from "tailwind-merge";
import { Theme } from "@/shim-ui/lib/theme";
import { CodeBlock, type CodeItem } from "./code-block";

interface DocSectionProps {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  demo?: React.ReactNode;
  code?: string | CodeItem[];
  className?: string;
  onCodeTabChange?: (tab: Key) => void;
  stacked?: boolean;
}

function DocSection({
  id,
  title,
  demo,
  code,
  className,
  children,
  onCodeTabChange,
  stacked = false,
}: DocSectionProps) {
  return (
    <section
      className={twMerge(
        "col-span-full my-12 grid scroll-mt-8 items-start gap-x-8 gap-y-8 md:grid-cols-[2fr_3fr] md:gap-x-12",
        stacked ? "md:grid-cols-1" : ""
      )}
      id={id}
    >
      <div className="col-start-1 self-stretch">
        {title && (
          <h3 className="mb-2 font-semibold text-base text-neutral-text-contrast">
            {id ? (
              <a
                className="no-underline hover:underline focus-visible:underline focus-visible:outline-none"
                href={`#${id}`}
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        )}

        {children && (
          <div className="font-book text-neutral-text text-sm leading-normal [&_code]:text-neutral-text-contrast">
            {children}
          </div>
        )}

        {demo && (
          <div
            className={twMerge(
              "not-first:mt-6 flex flex-col flex-wrap gap-4 text-[13px] text-neutral-text",
              className
            )}
          >
            <Theme size={2}>{demo}</Theme>
          </div>
        )}
      </div>

      {code && (
        <CodeBlock
          className="m-0"
          code={
            Array.isArray(code)
              ? code
              : [{ content: code, title: `${title} example` }]
          }
          lang="tsx"
          onCodeTabChange={onCodeTabChange}
        />
      )}
    </section>
  );
}

export { DocSection };
