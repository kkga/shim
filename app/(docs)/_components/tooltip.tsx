"use client";
import { InfoIcon } from "@phosphor-icons/react";
import type { ReactNode } from "react";
import { Focusable, type TooltipProps } from "react-aria-components";
import { Tooltip as ShimTooltip, TooltipTrigger } from "@/shim-ui/tooltip";

export function Tooltip({
  text,
  children,
  placement = "right",
}: {
  text: string;
  children?: ReactNode;
  placement?: TooltipProps["placement"];
}) {
  return (
    <TooltipTrigger delay={0}>
      <Focusable>
        {children ? (
          <span>{children}</span>
        ) : (
          <InfoIcon className="h-4 w-4 text-neutral-text-subtle" />
        )}
      </Focusable>
      <ShimTooltip placement={placement}>{text}</ShimTooltip>
    </TooltipTrigger>
  );
}
