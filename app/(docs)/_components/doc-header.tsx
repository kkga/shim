import { cn } from "tailwind-variants";
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
    <header className={cn("border-neutral-3 border-b", className)}>
      <div className="p-6 md:p-8">
        <h1 className="font-bold text-neutral-text-contrast text-xl leading-tight lg:text-2xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-1 font-book text-base text-neutral-text lg:mt-2">
            {subtitle}
          </p>
        ) : null}

        {children ? (
          <>
            <Separator className="my-6 max-w-40 bg-neutral-3" />
            {children}
          </>
        ) : null}
      </div>
    </header>
  );
}
