import { cx } from "cva"
import { Pre } from "./pre"

interface Props {
  demo: React.ReactNode
  code?: string
  className?: string
  stacked?: boolean
}

function Demo({ demo, code, className, stacked = false }: Props) {
  return (
    <div
      className={cx(
        "s-box",
        "my-8 flex flex-col overflow-hidden rounded-xl bg-panel shadow-[var(--shadow-xs)]",
        stacked ? "md:flex-col" : "md:flex-row",
      )}
    >
      <div
        className={cx(
          "flex flex-1 flex-col content-start gap-3 overflow-auto p-4 text-xs text-neutral-text",
          className,
        )}
      >
        {demo}
      </div>

      {code && (
        <div
          className={cx(
            "flex flex-col overflow-auto border-neutral-3",
            stacked ? "border-t" : "border-l md:flex-3",
          )}
        >
          <Pre
            code={code}
            lang="tsx"
            className="m-0! flex-1 rounded-none! border-none!"
          />
        </div>
      )}
    </div>
  )
}

export { Demo }
