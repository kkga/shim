import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"
import { Fragment } from "react"
import { ComponentMetadata } from "../lib/types"

const GITHUB_FILE_URL = "https://github.com/kkga/shim/blob/master/components"
const GITHUB_ISSUES_URL = "https://github.com/kkga/shim/issues"

interface MetadataLinkProps {
  href: string
  title: string
  external: boolean
  children: React.ReactNode
}

function MetadataLink({ href, title, external, children }: MetadataLinkProps) {
  return (
    <Link
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
      aria-label={title}
    >
      {children}
      {external && (
        <ArrowUpRight
          className="text-accent-10 ml-0.5 inline align-text-top"
          size={16}
        />
      )}
    </Link>
  )
}

interface MetadataRowProps extends ComponentMetadata {
  dependencies?: { name: string; slug: string }[]
}

function MetadataRow({
  docUrl,
  ariaUrl,
  name,
  dependencies,
}: MetadataRowProps) {
  return (
    <DataList className="flex-row gap-8">
      {docUrl && (
        <DataListItem
          label="Documentation"
          value={
            <MetadataLink
              href={docUrl}
              title={`View ${name} documentation`}
              external
            >
              React Aria {name}
            </MetadataLink>
          }
        />
      )}
      {ariaUrl && (
        <DataListItem
          label="Pattern"
          value={
            <MetadataLink href={ariaUrl} title="View ARIA pattern" external>
              W3C ARIA
            </MetadataLink>
          }
        />
      )}
      <DataListItem
        label="Source"
        value={
          <MetadataLink
            href={`${GITHUB_FILE_URL}/${name}.tsx`}
            title="View source code on GitHub"
            external
          >
            GitHub
          </MetadataLink>
        }
      />
      <DataListItem
        label="Issues"
        value={
          <MetadataLink
            href={`${GITHUB_ISSUES_URL}/new?title=[${name}] Issue`}
            title="New issue on GitHub"
            external
          >
            Report issue
          </MetadataLink>
        }
      />
      {dependencies && (
        <DataListItem
          label="Composes"
          value={dependencies.map(({ name, slug }, i) => (
            <Fragment key={name}>
              {i > 0 && ", "}
              <MetadataLink
                external={false}
                href={`/docs/${slug}`}
                title={`View ${name} documentation`}
              >
                {name}
              </MetadataLink>
            </Fragment>
          ))}
        />
      )}
    </DataList>
  )
}

export { MetadataRow }
