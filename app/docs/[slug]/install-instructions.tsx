'use client'

import { Code, H2 } from '@/components/mdx/mdx-components'
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
      <H2>Get the component</H2>

      <Tabs className="gap-0 overflow-hidden rounded-lg border border-neutral-line bg-neutral-bg-subtle">
        <TabList className="gap-4 px-4">
          <Tab id="curl">
            <Terminal size={16} weight="duotone" />
            cURL
          </Tab>
          <Tab id="source">
            <CodeIcon size={16} weight="duotone" />
            Source
          </Tab>
        </TabList>

        <TabPanel id="curl" className="p-0">
          {/* <div className="border-b border-neutral-3 py-2 px-4">
            <p className="text-sm text-neutral-10">
              Run this command to download <code>{srcFilename}.tsx</code> to
              current directory.
            </p>
          </div> */}
          <Pre raw={curlCommand} className="border-none bg-transparent">
            <Code>{curlCommand}</Code>
          </Pre>
        </TabPanel>
        <TabPanel id="source" className="p-0">
          {/* <div className="border-b border-neutral-3 py-2 px-4">
            <p className="text-sm text-neutral-10">
              Copy the source code below and save it as{' '}
              <code>{srcFilename}.tsx</code>.
            </p>
          </div> */}
          <Pre raw={source} className="border-none bg-transparent">
            <Code>{source}</Code>
          </Pre>
        </TabPanel>
      </Tabs>
    </section>
  )
}
