import { H3, P } from '@/components/mdx/mdx-components'
import { Pre } from '@/components/mdx/pre'
import { Code as CodeIcon, Terminal } from '@phosphor-icons/react/dist/ssr'
import { Tab, TabList, TabPanel, Tabs } from '@ui/tabs'

interface Props {
  srcFilename: string
  source: string
}

export function InstallInstructions({ srcFilename, source }: Props) {
  const curlCommand = `curl -O 'https://raw.githubusercontent.com/kkga/shim/master/app/ui/${srcFilename}.tsx'`

  return (
    <>
      <H3>Install</H3>
      <P>
        Run cURL command to download the file into your project or copy the
        source code below.
      </P>

      <Tabs className="s-box my-8 gap-0 overflow-hidden rounded-xl bg-[var(--color-bg-panel)] p-0 ring shadow-sm ring-neutral-solid/20">
        <TabList className="gap-4 px-4 shadow-neutral-3">
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
          <Pre code={curlCommand} className="border-none bg-transparent p-4" />
        </TabPanel>
        <TabPanel id="source" className="p-0">
          <Pre code={source} className="border-none bg-transparent p-4" />
        </TabPanel>
      </Tabs>
    </>
  )
}
