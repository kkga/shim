"use client"

import { CopyButton } from "@/app/components/mdx/copy-button"
import { CodeBlock, H2, Note, P } from "@/app/components/mdx/mdx-components"
import { Tab, TabList, TabPanel, Tabs } from "@/components/Tabs"
import { Link } from "@ui/Link"
import { useState } from "react"
import { Key } from "react-aria-components"

interface Props {
  name: string
  source: string
  dependencies?: { name: string; slug: string }[]
}

const URL = "https://shim.kkga.me/api"

export function InstallInstructions({ name, dependencies, source }: Props) {
  let curlCommand = `curl -o ${name}.tsx '${URL}?c=${name}'`
  let [tab, setTab] = useState<Key>("command")

  return (
    <section className="col-span-full grid grid-cols-subgrid">
      <div className="py-3 *:last:mb-0">
        <H2>Installation</H2>
        <P>
          Run cURL command to download the file into your project or copy the
          source code manually.
        </P>

        {dependencies && (
          <Note intent="warning">
            <P>
              Install the dependencies before using this component:{" "}
              {dependencies.map(({ name, slug }, i) => (
                <span key={name}>
                  {i > 0 && ", "}
                  <Link
                    intent="warning"
                    variant="underline"
                    href={`/docs/${slug}`}
                  >
                    {name}
                  </Link>
                </span>
              ))}
            </P>
          </Note>
        )}
      </div>

      <Tabs
        onSelectionChange={(tab) => setTab(tab)}
        defaultSelectedKey={tab}
        className="bg-panel relative overflow-auto rounded-lg"
      >
        <TabList variant="underline" size={1} className="shadow-neutral-4 pl-4">
          <Tab id="command">Command</Tab>
          <Tab id="source">Source</Tab>
        </TabList>
        <div className="absolute right-1 top-1 z-10">
          <CopyButton
            className="backdrop-blur-sm"
            text={tab === "command" ? curlCommand : source}
            title="Copy to clipboard"
          />
        </div>

        <TabPanel id="command" className="overflow-auto">
          <CodeBlock
            clickToCopy={false}
            code={curlCommand}
            className="bg-transparent"
          />
        </TabPanel>
        <TabPanel id="source" className="overflow-auto">
          <CodeBlock
            clickToCopy={false}
            code={source}
            className="bg-transparent"
          />
        </TabPanel>
      </Tabs>
    </section>
  )
}
