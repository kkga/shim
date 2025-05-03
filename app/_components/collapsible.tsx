"use client"

import { cx } from "@lib/style"
import { Button } from "@ui/Button"
import { useEffect, useRef, useState } from "react"

interface Props {
  children: React.ReactNode
  collapsed?: boolean
}

export function Collapsible({ children, collapsed: defaultCollapsed }: Props) {
  let [collapsed, setCollapsed] = useState(defaultCollapsed)
  let toggle = () => setCollapsed((prev) => !prev)
  let ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (collapsed) {
      let { current } = ref
      if (current) {
        current.scrollTop = 0
      }
    }
  }, [collapsed])

  return (
    <div
      className={cx(
        "flex flex-col overflow-auto",
        collapsed ? "max-h-[20rem]" : "max-h-[40rem]",
      )}
    >
      <div
        className={cx(
          "grow-1 pb-8",
          collapsed ? "overflow-hidden *:overflow-hidden" : "overflow-auto",
        )}
        ref={ref}
        style={
          collapsed ?
            {
              maskImage:
                "linear-gradient(to bottom, transparent, black 20px, black calc(100% - 120px), transparent)",
            }
          : {
              maskImage:
                "linear-gradient(to bottom, transparent, black 20px, black calc(100% - 20px), transparent)",
            }
        }
      >
        {children}
      </div>

      <Button
        className="absolute inset-1 top-auto z-10 m-auto backdrop-blur"
        onPress={toggle}
        intent="neutral"
        size={1}
      >
        {collapsed ? "Expand" : "Collapse"}
      </Button>
    </div>
  )
}
