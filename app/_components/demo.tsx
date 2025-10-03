import { twMerge } from "tailwind-merge";
import { Theme } from "@/shim-ui/lib/theme";
import { CodeBlock, type CodeItem } from "./code-block";

interface Props {
  title?: string;
  children?: React.ReactNode;
  demo?: React.ReactNode;
  code?: string | CodeItem[];
  className?: string;
}

function Demo({ title, demo, code, className, children }: Props) {
  return (
    <section className="doc-section col-span-full grid max-w-[var(--content-width)] grid-cols-subgrid items-stretch">
      <div className="col-start-1">
        {title && (
          <h2 className="mb-2 font-semibold text-base text-neutral-text-contrast leading-tight">
            {title}
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

export { Demo };
