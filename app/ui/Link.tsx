import { cva, cxRenderProps } from "@lib/utils";
import type { VariantProps } from "cva";
import {
  Link as RACLink,
  type LinkProps as RACLinkProps,
} from "react-aria-components";

const styles = cva({
  base: [
    "underline underline-offset-2",
    // disabled
    "data-[disabled]:no-underline data-[disabled]:cursor-default data-[disabled]:text-neutral-placeholder data-[disabled]:pointer-events-none",
  ],
  variants: {
    intent: {
      neutral:
        "text-neutral-text hover:text-neutral-text-contrast decoration-neutral-border hover:decoration-neutral-border-hover",
      accent:
        "text-accent-text hover:text-accent-text-contrast decoration-accent-border hover:decoration-accent-border-hover",
      warning:
        "text-warning-text hover:text-warning-text-contrast decoration-warning-border hover:decoration-warning-border-hover",
      success:
        "text-success-text hover:text-success-text-contrast decoration-success-border hover:decoration-success-border-hover",
      error:
        "text-error-text hover:text-error-text-contrast decoration-error-border hover:decoration-error-border-hover",
    },
  },
  defaultVariants: {
    intent: "neutral",
  },
});

interface LinkProps extends RACLinkProps, VariantProps<typeof styles> {}

const Link = ({ className, intent, ...props }: LinkProps) => {
  return (
    <RACLink
      {...props}
      className={cxRenderProps(className, styles({ intent }))}
    />
  );
};

export { Link, type LinkProps };
