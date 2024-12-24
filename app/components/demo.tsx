import clsx from "clsx"
import { CodeBlock, H2 } from "./mdx/mdx-components"

interface Props {
  title?: string
  children?: React.ReactNode
  demo: React.ReactNode
  code?: string
  className?: string
}

function Demo({ title, demo, code, className, children }: Props) {
  return (
    <section className="col-span-full grid grid-cols-subgrid items-stretch gap-y-6 md:gap-y-0">
      <div className="border-neutral-4 flex flex-col gap-4 border-t pt-6 lg:gap-6">
        {(title || children) && (
          <div className="*:last:mb-0">
            {title && (
              <H2 className="mb-2! leading-normal! text-sm after:hidden">
                {title}
              </H2>
            )}
            {children}
          </div>
        )}
        {demo && (
          <div
            className={clsx(
              "text-neutral-text flex flex-col flex-wrap gap-2 text-xs",
              className,
            )}
          >
            {demo}
          </div>
        )}
      </div>

      {code && <CodeBlock code={code} lang="tsx" className="bg-panel" />}
    </section>
  )
}

export { Demo }
