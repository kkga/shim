import type { TocItem } from "remark-flexible-toc";

interface Props {
  toc: TocItem[];
}

const Toc = ({ toc }: Props) => {
  if (!toc) {
    return null;
  }

  return (
    <ul className="space-y-2.5 text-sm">
      {toc.map((heading) => (
        <li className="" key={heading.value}>
          <a
            className="text-neutral-text decoration-neutral-line underline-offset-2 hover:underline hover:decoration-neutral-border-hover [&>.h3]:ml-4 [&>.h4]:ml-8"
            href={heading.href}
          >
            <div className={`h${heading.depth} `}>
              <span>{heading.value}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Toc;
