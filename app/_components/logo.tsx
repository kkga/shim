import { ShapesIcon } from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps } from "react";
import { cx } from "tailwind-variants";

interface Props extends ComponentProps<"div"> {
  withType?: boolean;
  size?: 1 | 2;
}

function Logo({ className, withType = true, size = 1 }: Props) {
  return (
    <div
      className={cx(
        "flex items-center",
        size === 1 ? "gap-2" : "gap-2",
        className
      )}
    >
      <ShapesIcon
        className="text-neutral-text-contrast"
        size={size === 1 ? 16 : 20}
        weight="fill"
      />
      {withType ? (
        <span
          className={cx(
            "font-semibold text-neutral-text-contrast",
            size === 1 ? "text-sm leading-5" : "text-[15px] leading-6"
          )}
        >
          Shim
        </span>
      ) : null}
    </div>
  );
}

export { Logo };
