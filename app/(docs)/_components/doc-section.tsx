import { cn, cx } from "tailwind-variants";
import { Theme } from "@/shim-ui/lib/theme";
import { CodeBlock, type CodeItem } from "./code-block";

interface DocSectionProps {
  id?: string;
  title?: string;
  children?: React.ReactNode;
  code?: string | CodeItem[];
  className?: string;
  stacked?: boolean;
  demo?: React.ReactNode;
  demoLayout?: "row" | "column";
  demoClassName?: string;
}

function DocSection({
  id,
  title,
  code,
  className,
  children,
  stacked = false,
  demo,
  demoLayout = "column",
  demoClassName,
}: DocSectionProps) {
  return (
    <section
      className={cx(
        "col-span-full grid scroll-mt-0 items-start gap-x-8 gap-y-8",
        stacked ? "md:grid-cols-1" : "@3xl/main:grid-cols-[2fr_3fr]",
        className
      )}
      id={id}
    >
      <div className="col-start-1 self-stretch">
        {title && (
          <h3 className="mb-2 font-semibold text-base text-neutral-text-contrast leading-tight">
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
            className={cn(
              "space-y-2 text-neutral-text [&_code]:font-book [&_code]:font-sans [&_code]:text-neutral-text-contrast",
              stacked ? "max-w-(--body-width)" : "text-[15px]"
            )}
          >
            {children}
          </div>
        )}

        {demo && (
          <div
            className={cx(
              "not-prose not-first:mt-6 flex text-[15px] text-neutral-text",
              demoLayout === "row"
                ? "flex-row flex-wrap gap-2"
                : "flex-col gap-4",
              demoClassName
            )}
          >
            <Theme size={2}>{demo}</Theme>
          </div>
        )}
      </div>

      {code && (
        <CodeBlock
          className="m-0"
          code={Array.isArray(code) ? code : [{ content: code }]}
          lang="tsx"
        />
      )}
    </section>
  );
}

export { DocSection };
