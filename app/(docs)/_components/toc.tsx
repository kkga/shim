import { match } from "ts-pattern";
import { Link } from "@/shim-ui/link";

interface Props {
  toc: { value: string; href: string; depth: number }[] | undefined;
}

export function Toc({ toc }: Props) {
  if (!toc) {
    return null;
  }

  return (
    <ul className="space-y-1.5 text-sm">
      <li className="flex items-center gap-1">
        <Link className="inline-block" href="#top" intent="neutral">
          Top ↑
        </Link>
      </li>
      {toc.map((heading) => (
        <li
          className={match(heading.depth)
            .with(2, () => "ml-0")
            .with(3, () => "ml-4")
            .otherwise(() => "ml-0")}
          key={heading.href}
        >
          <Link className="inline-block" href={heading.href} intent="neutral">
            <div className={`h${heading.depth} `}>{heading.value}</div>
          </Link>
        </li>
      ))}
    </ul>
  );
}
