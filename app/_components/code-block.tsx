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

interface CodeItem {
  content: string
  title?: string
  sourceUrl?: string
  raw?: string
}

interface Props extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: Array<CodeItem> | string
  collapsed?: boolean
  compact?: boolean
  children?: string | { props: { children: string } }
  highlight?: boolean
  className?: string
  clickToCopy?: boolean
}

export function CodeBlock({
  code,
  collapsed,
  compact,
  children,
  highlight = true,
  className,
  clickToCopy = true,
}: Props) {
  let [tab, setTab] = useState<Key | null>(
    typeof code === "string" || !code ? null : code[0].title,
  )

  if (!code && typeof children === "object" && "props" in children) {
    code = [
      {
        content: children.props.children,
      },
    ]
  }

  if (typeof code === "string") {
    code = [
      {
        content: code,
      },
    ]
  }

  if (code[0]?.content.split("\n").length > 24) {
    collapsed = true
  }

  return (
    <div
      className={clsx(
        "codeblock group relative flex flex-col overflow-auto",
        "bg-panel border-neutral-3 text-neutral-text rounded-lg border text-[13px]",
        "**:[pre]:py-2 **:[pre]:px-3",
        className,
      )}
    >
      <Tabs selectedKey={tab} onSelectionChange={(key) => setTab(key)}>
        <div className="border-neutral-3 z-10 flex min-h-8 items-center border-b px-1 py-0">
          {code.length > 1 ?
            <TabList size={1}>
              {code.map((c) => (
                <Tab key={c.title} id={c.title} className="px-2">
                  {c.title}
                </Tab>
              ))}
            </TabList>
          : <span className="text-neutral-text px-2 font-sans text-xs font-medium leading-6">
              {code[0].title}
            </span>
          }

          <div className="ml-auto flex gap-1">
            {code.find((c) => c.title === tab).sourceUrl && (
              <LinkButton
                target="_blank"
                variant="ghost"
                className="backdrop-blur-sm"
                href={code.find((c) => c.title === tab).sourceUrl}
              >
                GitHub
                <ArrowUpRight size={16} />
              </LinkButton>
            )}
            {clickToCopy && (
              <CopyButton
                className="backdrop-blur-sm"
                text={
                  code.find((c) => c.title === tab).raw ||
                  code.find((c) => c.title === tab).content
                }
              />
            )}
          </div>
        </div>

        {Array.isArray(code) &&
          code?.map((c) => (
            <TabPanel key={c.title} id={c.title}>
              {(
                collapsed ||
                code.find((c) => c.title === tab).content.split("\n").length >
                  24
              ) ?
                <Collapsible compact={compact} collapsed={collapsed}>
                  <pre className="**:[code]:text-[100%] grow overflow-scroll">
                    <Code highlight={highlight}>
                      {code
                        .find((c) => c.title === tab)
                        .content.replace(/\n+$/, "")}
                    </Code>
                  </pre>
                </Collapsible>
              : <pre className="**:[code]:text-[100%] grow overflow-scroll">
                  <Code highlight={highlight}>
                    {code
                      .find((c) => c.title === tab)
                      .content.replace(/\n+$/, "")}
                  </Code>
                </pre>
              }
            </TabPanel>
          ))}
      </Tabs>

      {/* {title && (
        <div className="border-neutral-4 ml-4 h-8 shrink-0 self-start border-b py-1">
          <span className="text-neutral-text font-sans text-xs font-medium leading-6">
            {title}
          </span>
        </div>
      )} */}
    </div>
  )
}
