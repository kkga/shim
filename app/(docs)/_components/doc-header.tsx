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
    <header className={twJoin("mb-12", className)}>
      <h1 className="font-semibold text-neutral-text-contrast text-xl lg:text-3xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 font-medium text-base text-neutral-text">
          {subtitle}
        </p>
      )}
      <Separator className="my-6! max-w-16 md:my-8!" />
      {children && <>{children}</>}
    </header>
  );
}
