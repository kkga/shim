import { Theme } from "@/lib/theme"
import clsx from "clsx"
import { CodeBlock } from "./code-block"

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
      <div className="border-neutral-4 flex flex-col gap-4 border-t pt-4 lg:gap-6">
        {(title || children) && (
          <div className="*:last:mb-0">
            {title && (
              <h2 className="text-neutral-text-contrast mb-2 text-balance text-base font-medium">
                {title}
              </h2>
            )}
            {children}
          </div>
        )}
        {demo && (
          <div
            className={clsx(
              "text-neutral-text flex flex-col flex-wrap gap-2 text-[13px]",
              className,
            )}
          >
            <Theme size={2}>{demo}</Theme>
          </div>
        )}
      </div>

      {code && <CodeBlock code={code} lang="tsx" className="bg-panel" />}
    </section>
  )
}

export { Demo }
