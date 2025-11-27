import { Button } from "@/shim-ui/button";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <TooltipTrigger key={size}>
      <Button>Size {size}</Button>
      <Tooltip size={size}>This is a tooltip with size {size}.</Tooltip>
    </TooltipTrigger>
  ));
