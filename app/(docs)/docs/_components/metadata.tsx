import { ArrowUpRightIcon } from "@phosphor-icons/react/dist/ssr";
import { Fragment } from "react";
import type { ComponentMetadata } from "@/app/docs/_lib/types";
import { DataList, DataListItem } from "@/shim-ui/data-list";
import { Link } from "@/shim-ui/link";

const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master/components";
const GITHUB_ISSUES_URL = "https://github.com/kkga/shim/issues";

interface MetadataLinkProps {
  href: string;
  title: string;
  external: boolean;
  children: React.ReactNode;
}

function MetadataLink({ href, title, external, children }: MetadataLinkProps) {
  return (
    <Link
      aria-label={title}
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
      {external && (
        <ArrowUpRightIcon
          className="ml-0.5 inline align-text-top text-accent-10"
          size={16}
        />
      )}
    </Link>
  );
}

interface MetadataProps
  extends Pick<ComponentMetadata, "docUrl" | "ariaUrl" | "title"> {
  dependencies: { name: string; slug: string }[];
}

export function Metadata({
  title,
  docUrl,
  ariaUrl,
  dependencies,
}: MetadataProps) {
  return (
    <DataList
      className="grid grid-cols-2 gap-x-6 gap-y-3 md:grid-flow-col md:grid-cols-none"
      size={2}
    >
      {docUrl && (
        <DataListItem
          label="Documentation"
          value={
            <MetadataLink
              external
              href={docUrl}
              title={`View ${title} documentation`}
            >
              React Aria {title}
            </MetadataLink>
          }
        />
      )}
      {ariaUrl && (
        <DataListItem
          label="Pattern"
          value={
            <MetadataLink external href={ariaUrl} title="View ARIA pattern">
              W3C ARIA
            </MetadataLink>
          }
        />
      )}
      <DataListItem
        label="Source"
        value={
          <MetadataLink
            external
            href={`${GITHUB_FILE_URL}/${title}.tsx`}
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
            title="New issue on GitHub"
          >
            Report issue
          </MetadataLink>
        }
      />
      {dependencies.length > 0 && (
        <DataListItem
          label="Composes"
          value={dependencies.map(({ name: depName, slug: depSlug }, i) => (
            <Fragment key={depName}>
              {i > 0 && ", "}
              <MetadataLink
                external={false}
                href={`/docs/components/${depSlug}`}
                title={`View ${depName} documentation`}
              >
                {depName}
              </MetadataLink>
            </Fragment>
          ))}
        />
      )}
    </DataList>
  );
}
