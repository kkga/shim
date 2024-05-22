import { H3, P } from "@/components/mdx/mdx-components"
import { Pre } from "@/components/mdx/pre"
import { Code as CodeIcon, Terminal } from "@phosphor-icons/react/dist/ssr"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"
import { DependenciesWarning } from "./dependencies-warning"

interface Props {
  filename: string
  source: string
  dependencies?: { name: string; slug: string }[]
}

const GITHUB_RAW_URL =
  "https://raw.githubusercontent.com/kkga/shim/master/app/ui"

export function InstallInstructions({ filename, dependencies, source }: Props) {
  let curlCommand = `curl -O '${GITHUB_RAW_URL}/${filename}.tsx'`

  return (
    <>
      <H3>Install</H3>
      <P>
        Run cURL command to download the file into your project or copy the
        source code below.
      </P>

      {dependencies && <DependenciesWarning deps={dependencies} />}

      <Tabs className="s-box my-8 gap-0 overflow-hidden rounded-xl bg-panel p-0 shadow-[var(--shadow-xs)]">
        <TabList className="gap-4 px-4 shadow-neutral-3">
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
          <Pre code={curlCommand} className="border-none bg-transparent" />
        </TabPanel>
        <TabPanel id="source" className="p-0">
          <Pre collapsed code={source} className="border-none bg-transparent" />
        </TabPanel>
      </Tabs>
    </>
  )
}
