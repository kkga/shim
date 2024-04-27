import {
  DialogTrigger as RACDialogTrigger,
  Popover as RACPopover,
  type PopoverProps as RACPopoverProps,
  Dialog as RACDialog,
} from "react-aria-components";

import { animateMountStyle, compose, cva, cxRenderProps } from "@lib/utils";

const PopoverTrigger = RACDialogTrigger;

const styles = compose(
  animateMountStyle,
  cva({
    base: "z-50 min-w-56 overflow-y-auto rounded-lg bg-neutral-bg-subtle p-2 text-neutral-text ring shadow-lg ring-neutral-solid/20 outline-none",
  })
);

interface PopoverProps extends Omit<RACPopoverProps, "children"> {
  children: React.ReactNode;
}

const Popover = ({
  className,
  children,
  offset = 4,
  ...props
}: PopoverProps) => (
  <RACPopover
    {...props}
    offset={offset}
    className={cxRenderProps(className, styles())}
  >
    <RACDialog className="outline-none">{children}</RACDialog>
  </RACPopover>
);

export { Popover, PopoverTrigger, type PopoverProps };
