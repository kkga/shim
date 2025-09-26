import type { TocItem } from "remark-flexible-toc"

type Props = {
  toc: TocItem[]
}

const Toc = ({ toc }: Props) => {
  if (!toc) return null

  return (
    <ul className="space-y-2.5 text-sm">
      {toc.map((heading) => (
        <li key={heading.value} className="">
          <a
            href={heading.href}
            className="text-neutral-text decoration-neutral-line hover:decoration-neutral-border-hover underline-offset-2 hover:underline"
          >
            <div className={`h${heading.depth}`}>
              <span>{heading.value}</span>
            </div>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default Toc
