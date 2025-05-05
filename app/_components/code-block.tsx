"use client"

import { LinkButton } from "@/components/Button"
import { ArrowUpRight } from "@phosphor-icons/react"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"
import clsx from "clsx"
import { ComponentPropsWithoutRef, useState } from "react"
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
  className?: string
  clickToCopy?: boolean
}

export function CodeBlock({ code, children, highlight, className }: Props) {
  let [tab, setTab] = useState<Key | null>(() => {
    if (Array.isArray(code) && code.length > 0) {
      return code[0].title || null
    }
    return null
  })

  if (!code) {
    code =
      typeof children === "object" && "props" in children ?
        [{ content: children.props.children }]
      : [{ content: children as string }]
  } else if (typeof code === "string") {
    code = [{ content: code }]
  }

  let selectedCode = code.find((c) => c.title === tab) || code[0]

  return (
    <div
      className={clsx(
        "codeblock group isolate min-w-0 overflow-clip",
        "bg-panel border-neutral-3 text-neutral-text rounded-lg border text-[13px]",
        className,
      )}
    >
      {code.length > 1 ?
        <Tabs selectedKey={tab} onSelectionChange={(key) => setTab(key)}>
          <div className="border-neutral-3 bg-panel sticky top-0 z-20 flex min-h-8 items-center border-b px-1 py-0">
            <TabList size={1}>
              {code.map((c) => (
                <Tab key={c.title} id={c.title} className="px-2">
                  {c.title}
                </Tab>
              ))}
            </TabList>

            <CodeActions
              sourceUrl={selectedCode.sourceUrl}
              content={selectedCode.raw || selectedCode.content}
            />
          </div>

          {code.map((c) => (
            <TabPanel key={c.title} id={c.title}>
              <CodeContent highlight={highlight} code={c} />
            </TabPanel>
          ))}
        </Tabs>
      : <>
          <div className="border-neutral-3 bg-panel sticky top-0 z-20 flex min-h-8 items-center border-b px-1 py-0">
            <span className="text-neutral-text px-2 font-sans text-xs font-medium leading-6">
              {code[0].title}
            </span>
            <CodeActions
              sourceUrl={selectedCode.sourceUrl}
              content={selectedCode.raw || selectedCode.content}
            />
          </div>
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
          <ArrowUpRight size={16} />
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
  let isContentLong = content.split("\n").length > 24

  return isContentLong ?
      <Collapsible collapsed>
        <pre className="**:[code]:text-[100%] w-full overflow-x-scroll whitespace-pre px-3 py-2">
          <Code highlight={highlight}>{content.replace(/\n+$/, "")}</Code>
        </pre>
      </Collapsible>
    : <pre className="**:[code]:text-[100%] w-full overflow-x-scroll whitespace-pre px-3 py-2">
        <Code highlight={highlight}>{content.replace(/\n+$/, "")}</Code>
      </pre>
}
