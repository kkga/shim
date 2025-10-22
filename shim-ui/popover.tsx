"use client";

import {
  composeRenderProps,
  Dialog as RacDialog,
  DialogTrigger as RacDialogTrigger,
  Popover as RacPopover,
  type PopoverProps as RacPopoverProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cxRenderProps } from "@/shim-ui/lib/style";
import { useThemeProps } from "@/shim-ui/lib/theme";

const style = tv({
  base: [
    "z-20 min-w-(--trigger-width) animate-slide overflow-auto bg-panel text-neutral-text text-xs shadow-(--shadow-lg) outline-none",
    "data-[trigger=SubmenuTrigger]:-mt-1 data-[trigger=SubmenuTrigger]:data-[placement=left]:-mr-1 data-[trigger=SubmenuTrigger]:data-[placement=right]:-ml-1",
  ],
  variants: {
    size: {
      1: "rounded-lg",
      2: "rounded-lg",
      3: "rounded-[10px]",
      4: "rounded-xl",
    },
  },
});

interface PopoverProps extends RacPopoverProps {}

function Popover({ className, children, offset = 4, ...props }: PopoverProps) {
  let { size } = useThemeProps();
  return (
    <RacPopover
      {...props}
      className={cxRenderProps(className, style({ size }))}
      offset={offset}
    >
      {composeRenderProps(children, (renderedChildren) =>
        props.isNonModal ? (
          <div className="overflow-auto outline-none">{renderedChildren}</div>
        ) : (
          <RacDialog className="overflow-auto outline-none">
            {renderedChildren}
          </RacDialog>
        )
      )}
    </RacPopover>
  );
}

const PopoverTrigger = RacDialogTrigger;

export { Popover, PopoverTrigger };
export type { PopoverProps };
