import {
  Tooltip as RACTooltip,
  TooltipTrigger as RACTooltipTrigger,
  type TooltipProps as RACTooltipProps,
} from "react-aria-components";

import { animateMountStyle, compose, cva, cxRenderProps } from "@lib/utils";

const TooltipTrigger = RACTooltipTrigger;

const styles = compose(
  animateMountStyle,
  cva({
    base: "z-50 overflow-hidden rounded-sm bg-neutral-bg-subtle py-0.5 px-2 text-[12px] font-medium text-neutral-text-contrast shadow-md outline-1 outline-neutral-solid/20",
  })
);

const Tooltip = ({ className, offset = 4, ...props }: RACTooltipProps) => (
  <RACTooltip
    {...props}
    offset={offset}
    className={cxRenderProps(className, styles())}
  />
);

export { Tooltip, TooltipTrigger };
