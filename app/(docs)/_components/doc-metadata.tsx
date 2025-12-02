import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import type { ComponentMetadata } from "@/app/(docs)/_lib/types";
import { DataList, DataListItem } from "@/shim-ui/data-list";
import { Link } from "@/shim-ui/link";
import { Separator } from "@/shim-ui/separator";

const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master/shim-ui";
const GITHUB_ISSUES_URL = "https://github.com/kkga/shim/issues";

interface MetadataLinkProps {
  href: string;
  title: string;
  external: boolean;
  children: React.ReactNode;
}

function MetadataLink({ href, title, external, children }: MetadataLinkProps) {
  const externalProps = external
    ? { rel: "noopener noreferrer" as const, target: "_blank" as const }
    : {};

  return (
    <Link aria-label={title} href={href} {...externalProps}>
      {children}
      {external ? (
        <ArrowUpRightIcon
          className="ml-0.5 inline align-text-top text-accent-10"
          size={16}
        />
      ) : null}
    </Link>
  );
}

interface MetadataProps
  extends Pick<ComponentMetadata, "docUrl" | "ariaUrl" | "title" | "name"> {
  dependencies: { name: string; slug: string }[];
}

export function DocMetadata({
  name,
  title,
  docUrl,
  ariaUrl,
  dependencies,
}: MetadataProps) {
  let installCommand = `pnpm dlx @kkga/shim add ${name}`;

  return (
    <DataList
      className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-flow-col md:grid-cols-none"
      size={2}
    >
      {docUrl ? (
        <DataListItem
          label="Documentation"
          value={
            <MetadataLink
              external
              href={docUrl}
              title={`Go to ${title} on React Aria documentation`}
            >
              React Aria
            </MetadataLink>
          }
        />
      ) : null}
      {ariaUrl ? (
        <DataListItem
          label="Pattern"
          value={
            <MetadataLink
              external
              href={ariaUrl}
              title="Go to W3C ARIA documentation"
            >
              W3C ARIA
            </MetadataLink>
          }
        />
      ) : null}
      <DataListItem
        label="Source"
        value={
          <MetadataLink
            external
            href={`${GITHUB_FILE_URL}/${name}.tsx`}
            title="View source code on GitHub"
          >
            GitHub
          </MetadataLink>
        }
      />
      <DataListItem
        label="Issues"
        value={
          <MetadataLink
            external
            href={`${GITHUB_ISSUES_URL}/new?title=[${title}] Issue`}
            title="Report an issue on GitHub"
          >
            Report
          </MetadataLink>
        }
      />
      {dependencies.length > 0 && (
        <DataListItem
          label="Composes"
          value={dependencies.map(({ name: depName, slug: depSlug }, i) => (
            <Fragment key={depName}>
              {i > 0 && <span className="mx-1">&middot;</span>}
              <MetadataLink
                external={false}
                href={`/components/${depSlug}`}
                title={`Go to ${depName} documentation`}
              >
                {depName}
              </MetadataLink>
            </Fragment>
          ))}
        />
      )}

      <Separator
        className="hidden bg-neutral-3 md:block"
        orientation="vertical"
      />

      <DataListItem
        className="col-span-full md:col-span-1"
        label="Install"
        value={<code>{installCommand}</code>}
      />
    </DataList>
  );
}
