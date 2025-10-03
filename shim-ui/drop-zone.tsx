"use client";

import {
  DropZone as RacDropZone,
  type DropZoneProps as RacDropZoneProps,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { cxRenderProps } from "@/shim-ui/lib/style";

const style = tv({
  base: [
    "relative flex items-center justify-center rounded-lg border border-neutral-line border-dashed bg-neutral-bg-subtle p-4 text-neutral-text",
    "data-drop-target:border-accent-border data-drop-target:border-solid data-drop-target:bg-accent-bg-hover data-drop-target:text-accent-text",
  ],
});

function DropZone(props: RacDropZoneProps) {
  return (
    <RacDropZone
      {...props}
      className={cxRenderProps(props.className, style())}
    />
  );
}

export { DropZone };
