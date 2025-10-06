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
}

function DocSection({
  id,
  title,
  demo,
  code,
  className,
  children,
}: DocSectionProps) {
  return (
    <section
      className="doc-section col-span-full grid max-w-[var(--content-width)] grid-cols-subgrid items-stretch"
      id={id}
    >
      <div className="col-start-1">
        {title && (
          <h2 className="mb-2 font-semibold text-base text-neutral-text-contrast leading-8">
            {id ? (
              <a
                className="inline-flex items-center gap-2 text-current no-underline hover:text-neutral-text/80 focus-visible:underline focus-visible:outline-none"
                href={`#${id}`}
              >
                {title}
              </a>
            ) : (
              title
            )}
          </h2>
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
          code={
            Array.isArray(code)
              ? code
              : [{ content: code, title: `${title} example` }]
          }
          lang="tsx"
        />
      )}
    </section>
  );
}

export { DocSection };
