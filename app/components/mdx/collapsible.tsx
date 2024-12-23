"use client"

import { cx } from "@lib/style"
import { ArrowLineDown, ArrowLineUp } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import { useState } from "react"

interface Props {
  children: React.ReactNode
  collapsed?: boolean
  compact?: boolean
}

export function Collapsible({
  children,
  compact,
  collapsed: defaultCollapsed,
}: Props) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const toggle = () => setCollapsed((prev) => !prev)

  return (
    <div
      className={cx(
        "flex flex-col overflow-auto",
        collapsed ?
          compact ? "max-h-40"
          : "max-h-[20rem]"
        : "max-h-[40rem]",
      )}
    >
      <div
        className={cx(
          "grow-1 pb-8",
          collapsed ? "overflow-hidden *:overflow-hidden" : "overflow-auto",
        )}
        style={
          collapsed ?
            {
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20px, black calc(100% - 120px), transparent)",
            }
          : {
              WebkitMaskImage:
                "linear-gradient(to bottom, transparent, black 20px, black calc(100% - 20px), transparent)",
            }
        }
      >
        {children}
      </div>

      <Button
        className="absolute inset-0 bottom-4 top-auto z-10 m-auto w-fit backdrop-blur"
        onPress={toggle}
        intent="neutral"
        size={1}
      >
        {collapsed ?
          <ArrowLineDown size={16} />
        : <ArrowLineUp size={16} />}
        {collapsed ? "Expand" : "Collapse"}
      </Button>
    </div>
  )
}
