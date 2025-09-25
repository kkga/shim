import { Theme } from "@/lib/theme"
import { twMerge } from "tailwind-merge"
import { CodeBlock, CodeItem } from "./code-block"

interface Props {
  title?: string
  hideTitle?: boolean
  children?: React.ReactNode
  demo?: React.ReactNode
  code?: string | Array<CodeItem>
  className?: string
}

function Demo({ title, hideTitle, demo, code, className, children }: Props) {
  return (
    <section className="doc-section col-span-full grid max-w-[var(--content-width)] grid-cols-subgrid items-stretch">
      <div className="col-start-1">
        {title && !hideTitle && (
          <h2 className="text-neutral-text-contrast mb-2 text-base font-semibold leading-tight">
            {title}
          </h2>
        )}

        {children}

        {demo && (
          <div
            className={twMerge(
              "text-neutral-text not-first:mt-6 sticky top-6 flex flex-col flex-wrap gap-2 text-[13px]",
              className,
            )}
          >
            <Theme size={2}>{demo}</Theme>
          </div>
        )}
      </div>

      {code && (
        <CodeBlock
          code={
            Array.isArray(code) ? code : (
              [{ content: code, title: `${title} example` }]
            )
          }
          lang="tsx"
        />
      )}
    </section>
  )
}

export { Demo }
