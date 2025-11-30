import Link from "next/link";

interface Props {
  links: { title: string; description: string; href: string }[];
}

export function NextSteps({ links }: Props) {
  return (
    <ul className="m-0! grid list-none! gap-4 p-0! md:grid-cols-3">
      {links.map(({ title, description, href }) => (
        <li className="m-0! p-0!" key={href}>
          <Link
            className="flex flex-col gap-0.5 rounded-lg bg-neutral-bg px-3 py-2 hover:bg-neutral-bg-hover"
            href={href}
          >
            <span className="font-semibold text-[15px] text-neutral-text-contrast leading-snug">
              {title}
            </span>
            <span className="text-[15px] text-neutral-text leading-snug">
              {description}
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
