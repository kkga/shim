import type { Key } from "react-aria-components";
import { twJoin, twMerge } from "tailwind-merge";
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
  demoLayout?: "row" | "column";
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
  demoLayout = "column",
}: DocSectionProps) {
  return (
    <section
      className={twMerge(
        "doc-section col-span-full grid scroll-mt-8 items-start gap-x-8 gap-y-8 md:grid-cols-[2fr_3fr]",
        stacked ? "md:grid-cols-1" : ""
      )}
      id={id}
    >
      <div className="col-start-1 self-stretch overflow-scroll py-1">
        {title && (
          <h3 className="mb-2 font-semibold text-[15px] text-neutral-text-contrast">
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
          <div
            className={twJoin(
              "space-y-2 text-base text-neutral-text [&_code]:font-book [&_code]:font-sans [&_code]:text-neutral-text-contrast",
              stacked ? "max-w-[var(--body-width)] text-base" : "text-sm"
            )}
          >
            {children}
          </div>
        )}

        {demo && (
          <div
            className={twMerge(
              "not-first:mt-6 flex text-neutral-text text-sm",
              demoLayout === "row"
                ? "flex-row flex-wrap gap-2"
                : "flex-col gap-4",
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
