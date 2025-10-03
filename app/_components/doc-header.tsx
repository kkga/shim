import { twJoin } from "tailwind-merge";
import { Separator } from "@/shim-ui/separator";
import { H1, P } from "./mdx-components";

interface DocHeaderProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
}

export function DocHeader({
  title,
  subtitle,
  children,
  className,
}: DocHeaderProps) {
  return (
    <header
      className={twJoin(
        "doc-section col-span-full flex flex-col gap-6 border-neutral-3 border-b",
        className
      )}
    >
      <div>
        <H1>{title}</H1>
        {subtitle && (
          <P className="mt-2! mb-0! font-medium text-base text-neutral-text">
            {subtitle}
          </P>
        )}
      </div>
      {children && (
        <>
          <Separator className="max-w-16 bg-neutral-4" />
          {children}
        </>
      )}
    </header>
  );
}
