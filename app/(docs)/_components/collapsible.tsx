"use client";

import { ArrowLineDownIcon, ArrowLineUpIcon } from "@phosphor-icons/react";
import { useEffect, useRef, useState } from "react";
import { twJoin } from "tailwind-merge";
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
      className={twJoin(
        "relative flex w-full flex-col",
        collapsed && "max-h-[20rem] overflow-hidden"
      )}
    >
      <div
        className={twJoin("grow-1", collapsed && "overflow-hidden")}
        ref={ref}
        style={
          collapsed
            ? {
                maskImage:
                  "linear-gradient(black calc(100% - 120px), transparent)",
              }
            : {}
        }
      >
        {children}
      </div>

      <Button
        className={twJoin(
          "z-10 h-7 backdrop-blur",
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
