import clsx from "clsx"
import { Pre } from "./mdx-components"

interface Props {
  demo: React.ReactNode
  code?: string
  className?: string
  stacked?: boolean
}

function Demo({ demo, code, className, stacked = false }: Props) {
  return (
    <div
      className={clsx(
        "s-box",
        "bg-panel my-8 flex flex-col overflow-hidden shadow-[var(--shadow-xs)] lg:rounded-lg",
        stacked ? "lg:flex-col" : "lg:flex-row",
      )}
    >
      <div
        className={clsx(
          "text-neutral-text flex flex-1 flex-col content-start gap-3 overflow-auto p-4 text-xs",
          className,
        )}
      >
        {demo}
      </div>

      {code && (
        <div
          className={clsx(
            "border-neutral-3 flex flex-col overflow-auto border-t",
            stacked ?
              "lg:border-l-0 lg:border-t"
            : "lg:flex-3 lg:border-l lg:border-t-0",
          )}
        >
          <Pre
            code={code}
            lang="tsx"
            className="m-0! rounded-none! border-none! flex-1"
          />
        </div>
      )}
    </div>
  )
}

export { Demo }
