"use client"

import { LinkButton } from "@/components/Button"
import { ArrowUpRightIcon } from "@phosphor-icons/react"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"
import { ComponentPropsWithoutRef, useMemo, useState } from "react"
import { Key } from "react-aria-components"
import { Code } from "./code"
import { Collapsible } from "./collapsible"
import { CopyButton } from "./copy-button"

export interface CodeItem {
  content: string
  title?: string
  sourceUrl?: string
  raw?: string
}

interface Props extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: Array<CodeItem> | string
  children?: string | { props: { children: string } }
  highlight?: boolean
  clickToCopy?: boolean
}

function normalizeCode(
  code?: Props["code"],
  children?: Props["children"],
): CodeItem[] {
  if (!code) {
    const content =
      typeof children === "object" && "props" in children ?
        children.props.children
      : (children as string) || ""
    return [{ content }]
  }

  if (typeof code === "string") {
    return [{ content: code }]
  }

  return code
}

function CodeHeader({
  children,
  selectedCode,
}: {
  children?: React.ReactNode
  selectedCode: CodeItem
}) {
  return (
    <div className="border-neutral-3 bg-panel sticky top-0 z-20 flex min-h-8 items-center border-b px-1 py-0">
      {children}
      <CodeActions
        sourceUrl={selectedCode.sourceUrl}
        content={selectedCode.raw || selectedCode.content}
      />
    </div>
  )
}

export function CodeBlock({ highlight, ...props }: Props) {
  let normalizedCode = useMemo(
    () => normalizeCode(props.code, props.children),
    [props.code, props.children],
  )

  let [tab, setTab] = useState<Key | null>(() => {
    return normalizedCode[0].title || null
  })

  let selectedCode =
    normalizedCode.find((c) => c.title === tab) ?? normalizedCode[0]

  return (
    <div className="codeblock bg-panel border-neutral-3 text-neutral-text group isolate min-w-0 overflow-clip rounded-lg border text-[13px]">
      {normalizedCode.length > 1 ?
        <Tabs selectedKey={tab} onSelectionChange={(key) => setTab(key)}>
          <CodeHeader selectedCode={selectedCode}>
            <TabList size={1}>
              {normalizedCode.map((c) => (
                <Tab key={c.title} id={c.title} className="px-2">
                  {c.title}
                </Tab>
              ))}
            </TabList>
          </CodeHeader>

          {normalizedCode.map((c) => (
            <TabPanel key={c.title} id={c.title}>
              <CodeContent highlight={highlight} code={c} />
            </TabPanel>
          ))}
        </Tabs>
      : <>
          <CodeHeader selectedCode={selectedCode}>
            <span className="text-neutral-text px-2 font-sans text-xs font-medium leading-6">
              {normalizedCode[0].title}
            </span>
          </CodeHeader>
          <CodeContent highlight={highlight} code={selectedCode} />
        </>
      }
    </div>
  )
}

function CodeActions({
  sourceUrl,
  content,
}: {
  sourceUrl?: string
  content?: string
}) {
  return (
    <div className="ml-auto flex gap-1">
      {sourceUrl && (
        <LinkButton
          target="_blank"
          variant="ghost"
          className="backdrop-blur-sm"
          href={sourceUrl}
        >
          GitHub
          <ArrowUpRightIcon size={16} />
        </LinkButton>
      )}
      <CopyButton className="backdrop-blur-sm" text={content} />
    </div>
  )
}

function CodeContent({
  code,
  highlight = true,
}: {
  code: CodeItem
  highlight?: boolean
}) {
  let { content } = code
  let isContentLong = useMemo(() => content.split("\n").length > 24, [content])

  let codeElement = (
    <pre className="**:[code]:text-[100%] w-full overflow-x-scroll whitespace-pre px-3 py-2">
      <Code highlight={highlight}>{content.replace(/\n+$/, "")}</Code>
    </pre>
  )

  return isContentLong ?
      <Collapsible collapsed>{codeElement}</Collapsible>
    : codeElement
}
