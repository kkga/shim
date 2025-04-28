import { Info, Warning } from "@phosphor-icons/react/dist/ssr"
import { tv } from "tailwind-variants"

const noteStyle = tv({
  slots: {
    container:
      "text-neutral-text grid grid-cols-[min-content_auto] gap-x-1.5 rounded-lg py-2 pl-2.5 pr-4 text-sm leading-normal *:m-0 [&_code]:text-current",
    title:
      "text-neutral-text-contrast col-start-2 col-end-3 text-sm font-medium leading-6",
    icon: "col-start-1 col-end-2 row-start-1 flex size-6 shrink-0 items-center justify-center",
    content: "col-start-2 *:last:mb-0",
  },
  variants: {
    intent: {
      info: { container: "bg-accent-bg-subtle", icon: "text-accent-text" },
      warning: { container: "bg-warning-bg-subtle", icon: "text-warning-text" },
    },
  },
})

function Note({
  intent = "info",
  title,
  children,
  className,
}: {
  intent?: "info" | "warning"
  title?: string
  children: React.ReactNode
  className?: string
}) {
  let icons = {
    info: <Info size={16} />,
    warning: <Warning size={16} />,
  }
  let { icon, container, title: titleStyle, content } = noteStyle({ intent })

  return (
    <div className={container({ className })}>
      <h4 className={titleStyle()}>{title}</h4>
      <div className={icon()}>{icons[intent]}</div>
      <div className={content()}>{children}</div>
    </div>
  )
}

export { Note }
