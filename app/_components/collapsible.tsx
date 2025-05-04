"use client"

import { cx } from "@lib/style"
import { ArrowLineDown, ArrowLineUp } from "@phosphor-icons/react"
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
        "relative flex w-full flex-col",
        collapsed && "max-h-[24rem] overflow-hidden",
      )}
    >
      <div
        className={cx("grow-1", collapsed && "overflow-hidden")}
        ref={ref}
        style={
          collapsed ?
            {
              maskImage:
                "linear-gradient(black calc(100% - 120px), transparent)",
            }
          : {}
        }
      >
        {children}
      </div>

      <Button
        className={cx(
          "z-10 h-7 backdrop-blur",
          collapsed ?
            "absolute inset-1 top-auto"
          : "sticky bottom-1 m-1 self-stretch",
        )}
        onPress={toggle}
        intent="neutral"
        size={1}
      >
        {collapsed ?
          <ArrowLineDown size={16} />
        : <ArrowLineUp size={16} />}
      </Button>
    </div>
  )
}
