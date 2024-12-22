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
    <section
      className={clsx("col-span-full grid grid-cols-subgrid items-stretch")}
    >
      <div className="flex flex-col gap-4 py-3 lg:gap-8">
        {(title || children) && (
          <div className="*:last:mb-0">
            {title && <H2>{title}</H2>}
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

      {code && (
        <CodeBlock
          code={code}
          lang="tsx"
          className={clsx("place-self-stretch", "bg-panel rounded-lg")}
        />
      )}
    </section>
  )
}

export { Demo }
