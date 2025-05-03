import { Theme } from "@/lib/theme"
import clsx from "clsx"
import { CodeBlock } from "./code-block"

interface Props {
  title?: string
  hideTitle?: boolean
  children?: React.ReactNode
  demo: React.ReactNode
  code?: string
  className?: string
}

function Demo({ title, hideTitle, demo, code, className, children }: Props) {
  return (
    <section className="col-span-full grid max-w-[var(--content-width)] grid-cols-subgrid items-start py-12">
      <div className="col-start-1 flex flex-col gap-2">
        {title && !hideTitle && (
          <h2 className="text-neutral-text-contrast text-base font-semibold leading-8">
            {title}
          </h2>
        )}

        {children && <div className="*:last:mb-4">{children}</div>}

        {demo && (
          <div
            className={clsx(
              "text-neutral-text flex flex-col flex-wrap gap-4 text-[13px]",
              className,
            )}
          >
            <Theme size={2}>{demo}</Theme>
          </div>
        )}
      </div>

      {code && (
        <CodeBlock
          code={[{ title: `${title} example`, content: code }]}
          lang="tsx"
        />
      )}
    </section>
  )
}

export { Demo }
