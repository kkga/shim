import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"
import {
  DataList,
  DataListItem,
  DataListLabel,
  DataListValue,
} from "@ui/DataList"
import { Link } from "@ui/Link"
import { Fragment } from "react"
import { ComponentMetadata } from "../lib/types"

const GITHUB_FILE_URL = "https://github.com/kkga/shim-ui/blob/master/components"

function MetadataLink({ href, title, external, children }) {
  return (
    <Link
      href={href}
      rel={external ? "noreferrer" : undefined}
      target={external ? "_blank" : undefined}
    >
      {children}
      {external && (
        <ArrowUpRight
          className="ml-0.5 inline align-text-top text-accent-10"
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
    <DataList size={2} orientation="vertical" className="flex-row gap-8">
      {docUrl && (
        <DataListItem>
          <DataListLabel>Documentation</DataListLabel>
          <DataListValue>
            <MetadataLink
              href={docUrl}
              title={`View ${name} documentation`}
              external
            >
              React Aria {name}
            </MetadataLink>
          </DataListValue>
        </DataListItem>
      )}
      {ariaUrl && (
        <DataListItem>
          <DataListLabel>Pattern</DataListLabel>
          <DataListValue>
            <MetadataLink href={ariaUrl} title="View ARIA pattern" external>
              W3C ARIA
            </MetadataLink>
          </DataListValue>
        </DataListItem>
      )}
      <DataListItem>
        <DataListLabel>Source</DataListLabel>
        <DataListValue>
          <MetadataLink
            href={`${GITHUB_FILE_URL}/${name}.tsx`}
            title="View source code on GitHub"
            external
          >
            GitHub
          </MetadataLink>
        </DataListValue>
      </DataListItem>
      {dependencies && (
        <DataListItem>
          <DataListLabel>Composes</DataListLabel>
          <DataListValue>
            {dependencies.map(({ name, slug }, i) => (
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
          </DataListValue>
        </DataListItem>
      )}
    </DataList>
  )
}

export { MetadataRow }
