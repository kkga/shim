import { ShapesIcon } from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {
  withType?: boolean;
}

function Logo({ className, withType = true }: Props) {
  return (
    <div className={twJoin("flex items-center gap-1", className)}>
      <ShapesIcon
        className="text-neutral-text-contrast"
        size={16}
        weight="fill"
      />
      {withType && (
        <span className="font-semibold text-[13px] text-neutral-text-contrast leading-5">
          Shim
        </span>
      )}
    </div>
  );
}

export { Logo };
