"use client"
import { cx } from "@lib/styleUtils"
import { Button } from "@ui/button"
import { useState } from "react"

export function Collapsible({ children, defaultCollapsed }) {
  const [collapsed, setCollapsed] = useState(defaultCollapsed)
  const toggle = () => setCollapsed((prev) => !prev)

  return (
    <div
      className={cx("flex flex-col overflow-auto", collapsed ? "max-h-60" : "")}
    >
      <div
        className={cx(
          "flex-1 pb-12",
          collapsed ? "overflow-hidden" : "overflow-auto",
        )}
      >
        {children}
      </div>

      <div className="via absolute inset-0 top-auto z-10 flex justify-center bg-gradient-to-b from-transparent to-[var(--color-bg-panel)] p-4 pt-8 font-sans">
        <Button
          className="backdrop-blur"
          onPress={toggle}
          intent="neutral"
          size={2}
        >
          {collapsed ? "Expand code" : "Collapse code"}
        </Button>
      </div>
    </div>
  )
}
