import { ShapesIcon } from "@phosphor-icons/react/dist/ssr";
import type { ComponentProps } from "react";
import { twJoin } from "tailwind-merge";

interface Props extends ComponentProps<"div"> {
  withType?: boolean;
}

function Logo({ className, withType = true }: Props) {
  return (
    <div className={twJoin("flex items-center gap-2", className)}>
      <ShapesIcon className="text-current" size={16} weight="fill" />
      {withType && (
        <span className="font-semibold text-[13px] text-current leading-5">
          Shim
        </span>
      )}
    </div>
  );
}

export { Logo };
