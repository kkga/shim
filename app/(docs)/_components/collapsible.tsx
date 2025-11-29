"use client";

import { ArrowLineDownIcon, ArrowLineUpIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { cn, cx } from "tailwind-variants";
import { Button } from "@/shim-ui/button";

interface Props {
  children: React.ReactNode;
  collapsed?: boolean;
}

export function Collapsible({ children, collapsed: defaultCollapsed }: Props) {
  let [collapsed, setCollapsed] = useState(defaultCollapsed);
  let toggle = () => setCollapsed((prev) => !prev);
  let ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (collapsed) {
      let { current } = ref;
      if (current) {
        current.scrollTop = 0;
      }
    }
  }, [collapsed]);

  return (
    <div
      className={cx(
        "relative flex w-full flex-col",
        collapsed ? "max-h-80 overflow-hidden" : "max-h-none"
      )}
    >
      <div
        className={cx(
          "grow",
          collapsed ? "overflow-hidden" : "overflow-visible"
        )}
        ref={ref}
        style={
          collapsed
            ? {
                maskImage:
                  "linear-gradient(black calc(100% - 120px), transparent calc(100% - 32px))",
              }
            : {}
        }
      >
        {children}
      </div>

      <Button
        aria-label={collapsed ? "Expand content" : "Collapse content"}
        className={cn(
          "z-10 h-7 backdrop-blur-md",
          collapsed
            ? "absolute inset-1 top-auto"
            : "sticky bottom-1 m-1 self-stretch"
        )}
        intent="neutral"
        onPress={toggle}
        size={1}
        variant="ghost"
      >
        {collapsed ? (
          <ArrowLineDownIcon size={16} />
        ) : (
          <ArrowLineUpIcon size={16} />
        )}
      </Button>
    </div>
  );
}
