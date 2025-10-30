import { twJoin } from "tailwind-merge";
import { Separator } from "@/shim-ui/separator";

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
    <header className={twJoin("border-neutral-3 border-b", className)}>
      <div className="px-4 py-6 md:px-8 md:py-8">
        <h1 className="font-semibold text-neutral-text-contrast text-xl leading-tight lg:text-2xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-1 font-book text-[15px] text-neutral-text lg:mt-2 lg:text-base">
            {subtitle}
          </p>
        )}

        {children && (
          <>
            <Separator className="my-6 max-w-40 bg-neutral-3" />
            {children}
          </>
        )}
      </div>
    </header>
  );
}
