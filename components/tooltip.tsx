"use client";

import { cxRenderProps } from "@lib/style";
import {
  Tooltip as RacTooltip,
  type TooltipProps as RacTooltipProps,
  TooltipTrigger as RacTooltipTrigger,
  type TooltipTriggerComponentProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";

const style = tv({
  base: "flex max-w-64 animate-slide items-center gap-1 overflow-hidden rounded bg-panel px-1.5 py-0.5 font-book text-[12px] text-neutral-text-contrast shadow-[var(--shadow-sm)] outline-0",
});

function Tooltip({ className, offset = 4, ...props }: RacTooltipProps) {
  return (
    <RacTooltip
      {...props}
      className={cxRenderProps(className, style())}
      offset={offset}
    />
  );
}

function TooltipTrigger(props: TooltipTriggerComponentProps) {
  let { delay = 500, closeDelay = 0, ...rest } = props;
  return <RacTooltipTrigger closeDelay={closeDelay} delay={delay} {...rest} />;
}

export { Tooltip, TooltipTrigger };
