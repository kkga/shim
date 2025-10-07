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
        "col-span-full grid max-w-[var(--content-width)] grid-cols-subgrid items-start gap-y-4 p-4 text-[15px] md:p-8",
        stacked ? "md:grid-cols-1" : ""
      )}
      id={id}
    >
      <div className="col-start-1 self-stretch">
        {title && (
          <h3 className="mb-2">
            {id ? (
              <a
                className="inline-flex items-center gap-2 text-current no-underline hover:text-neutral-text/20 focus-visible:underline focus-visible:outline-none"
                href={`#${id}`}
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h3>
        )}

        {children}

        {demo && (
          <div
            className={twMerge(
              "sticky top-6 not-first:mt-6 flex flex-col flex-wrap gap-2 text-[13px] text-neutral-text",
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
