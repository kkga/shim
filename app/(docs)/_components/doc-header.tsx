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
    <header
      className={twJoin(
        "col-span-full flex flex-col gap-6 p-4 md:p-8",
        className
      )}
    >
      <div>
        <h1>{title}</h1>
        {subtitle && (
          <p className="mt-2! mb-0! text-base text-neutral-text lg:text-lg">
            {subtitle}
          </p>
        )}
      </div>
      {children && (
        <>
          <Separator className="my-0! max-w-16 bg-neutral-3" />
          {children}
        </>
      )}
    </header>
  );
}
