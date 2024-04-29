'use client'

import { Code, H3, P } from '@/components/mdx/mdx-components'
import { Pre } from '@/components/mdx/pre'
import { Code as CodeIcon, Terminal } from '@phosphor-icons/react'
import { Tab, TabList, TabPanel, Tabs } from '@ui/tabs'

interface InstallInstructionsProps {
  srcFilename: string
  source: string
}

export function InstallInstructions({
  srcFilename,
  source,
}: InstallInstructionsProps) {
  const curlCommand = `curl -O 'https://raw.githubusercontent.com/kkga/shim-ui/master/app/ui/${srcFilename}.tsx'`

  return (
    <section>
      <H3>Get the component</H3>
      <P>
        Run cURL command to download the component file or copy the source code
        below.
      </P>

      <Tabs className="my-8 gap-0 overflow-hidden rounded-sm bg-neutral-bg-subtle ring shadow-sm ring-neutral-solid/15">
        <TabList className="gap-4 px-4 shadow-neutral-solid/10">
          <Tab id="curl" className="border-y-1">
            <Terminal size={16} weight="duotone" />
            cURL
          </Tab>
          <Tab id="source" className="border-y-1">
            <CodeIcon size={16} weight="duotone" />
            Source
          </Tab>
        </TabList>

        <TabPanel id="curl" className="p-0">
          <Pre raw={curlCommand} className="border-none bg-transparent p-4">
            <Code>{curlCommand}</Code>
          </Pre>
        </TabPanel>
        <TabPanel id="source" className="p-0">
          <Pre raw={source} className="border-none bg-transparent p-4">
            <Code>{source}</Code>
          </Pre>
        </TabPanel>
      </Tabs>
    </section>
  )
}
