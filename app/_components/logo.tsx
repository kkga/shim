import { Shapes } from "@phosphor-icons/react/dist/ssr"
import clsx from "clsx"
import { ComponentProps } from "react"

interface Props extends ComponentProps<"div"> {
  withType?: boolean
}

function Logo({ className, withType = true }: Props) {
  return (
    <div className={clsx("flex items-center gap-2", className)}>
      <Shapes size={16} weight="fill" className="text-current" />
      {withType && (
        <span className="text-[13px] font-semibold leading-5 text-current">
          Shim
        </span>
      )}
    </div>
  )
}

export { Logo }
