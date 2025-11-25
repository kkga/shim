"use client";

import {
  Tooltip as RacTooltip,
  type TooltipProps as RacTooltipProps,
  TooltipTrigger as RacTooltipTrigger,
  type TooltipTriggerComponentProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cnRenderProps } from "@/shim-ui/lib/style";
import { useThemeProps } from "./lib/theme";

const style = tv({
  base: "flex max-w-64 animate-slide items-center gap-1 overflow-hidden rounded bg-panel font-book text-neutral-text-contrast shadow-(--shadow-sm) outline-0",
  variants: {
    size: {
      1: "max-w-48 rounded-sm px-1.5 py-0.5 text-xs/snug",
      2: "max-w-64 rounded-md px-2 py-1 text-[13px]/snug",
      3: "max-w-80 rounded-lg px-3 py-1.5 text-base/snug",
      4: "max-w-96 rounded-xl px-4 py-2 text-lg/snug",
    },
  },
});

function Tooltip({
  className,
  offset = 4,
  size = 2,
  ...props
}: RacTooltipProps & { size?: 1 | 2 }) {
  let themeProps = useThemeProps({ size });

  return (
    <RacTooltip
      {...props}
      className={cnRenderProps(className, style({ size: themeProps.size }))}
      offset={offset}
    />
  );
}

function TooltipTrigger(props: TooltipTriggerComponentProps) {
  let { delay = 500, closeDelay = 0, ...rest } = props;
  return <RacTooltipTrigger closeDelay={closeDelay} delay={delay} {...rest} />;
}

export { Tooltip, TooltipTrigger };
