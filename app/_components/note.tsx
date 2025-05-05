import { CaretDoubleRight } from "@phosphor-icons/react/dist/ssr"
import { tv } from "tailwind-variants"

const noteStyle = tv({
  slots: {
    container:
      "text-neutral-text my-4 -ml-[calc(1px+calc(var(--spacing)*8))] grid grid-cols-[min-content_1fr] gap-x-2 py-1.5 pl-2 text-[13px] leading-normal *:m-0 [&_code]:text-current",
    title:
      "text-neutral-text-contrast col-start-2 col-end-3 self-center font-medium",
    icon: "col-start-1 col-end-2 row-start-1 flex shrink-0 items-center justify-center place-self-center",
    content: "col-start-2 pr-2 *:last:mb-0",
  },
  variants: {
    intent: {
      info: {
        container:
          "border-accent-line from-accent-2 border-l bg-gradient-to-r to-transparent",
        title: "text-accent-text",
        icon: "text-accent-text",
      },
      warning: {
        container:
          "border-warning-line from-warning-2 border-l bg-gradient-to-r to-transparent",
        title: "text-warning-text",
        icon: "text-warning-text",
      },
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
    info: <CaretDoubleRight weight="duotone" size={16} />,
    warning: <CaretDoubleRight weight="duotone" size={16} />,
  }
  let { icon, container, title: titleStyle, content } = noteStyle({ intent })

  return (
    <div className={container({ className })}>
      <div className={icon()}>{icons[intent]}</div>
      <h4 className={titleStyle()}>{title}</h4>
      <div className={content()}>{children}</div>
    </div>
  )
}

export { Note }
