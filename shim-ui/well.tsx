"use client";

import { type ClassValue, tv, type VariantProps } from "tailwind-variants";
import {
  buildVariantOverrides,
  type Size,
  Theme,
  useThemeProps,
  type WellVariant,
} from "@/shim-ui/lib/theme";

const style = tv({
  base: "flex flex-col",
  variants: {
    size: {
      1: "gap-2 rounded-md p-3 text-xs/snug",
      2: "gap-3 rounded-lg p-4 text-sm/snug",
      3: "gap-4 rounded-xl p-5 text-[15px]/snug",
      4: "gap-5 rounded-2xl p-6 text-base/snug",
    } satisfies Record<Size, ClassValue>,
    variant: {
      classic: "bg-panel shadow-xs",
      soft: "bg-panel",
      surface: "inset-ring inset-ring-neutral-line bg-panel",
      outline: "inset-ring inset-ring-neutral-line",
    } satisfies Record<WellVariant, ClassValue>,
  },
  defaultVariants: {
    size: 1,
    variant: "classic",
  },
});

interface WellProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof style> {}

function Well({ className, children, ...props }: WellProps) {
  const themeProps = useThemeProps({
    size: props.size,
    ...buildVariantOverrides("well", props.variant),
  });

  return (
    <div
      {...props}
      className={style({
        size: themeProps.size,
        variant: themeProps.variants.well,
        className,
      })}
    >
      <Theme {...themeProps}>{children}</Theme>
    </div>
  );
}

export { Well };
export type { WellProps };
