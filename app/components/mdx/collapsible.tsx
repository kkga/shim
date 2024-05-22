"use client"
import { cx } from "@lib/style"
import { ArrowLineDown, ArrowLineUp } from "@phosphor-icons/react"
import { Button } from "@ui/Button"
import { useState } from "react"

export function Collapsible({ children, defaultCollapsed }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const toggle = () => setCollapsed((prev) => !prev)

  return (
    <div
      className={cx("flex flex-col overflow-auto", collapsed ? "max-h-72" : "")}
    >
      <div
        className={cx(
          "flex-1 pb-12",
          collapsed ? "overflow-hidden" : "overflow-auto",
        )}
      >
        {children}
      </div>

      <div className="absolute inset-0 top-auto z-10 flex justify-center bg-gradient-to-b from-transparent to-panel p-4 pt-8 font-sans">
        <Button
          className="backdrop-blur"
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
    </div>
  )
}
