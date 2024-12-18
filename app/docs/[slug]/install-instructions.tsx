import { H3, Note, P, Pre } from "@/app/components/mdx/mdx-components"
import { Code as CodeIcon, Terminal } from "@phosphor-icons/react/dist/ssr"
import { Link } from "@ui/Link"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"

interface Props {
  filename: string
  source: string
  dependencies?: { name: string; slug: string }[]
}

const GITHUB_RAW_URL =
  "https://raw.githubusercontent.com/kkga/shim/master/components"

export function InstallInstructions({ filename, dependencies, source }: Props) {
  let curlCommand = `curl -O '${GITHUB_RAW_URL}/${filename}.tsx'`

  return (
    <>
      <H3>Install</H3>
      <P>
        Run cURL command to download the file into your project or copy the
        source code below.
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

      <Tabs className="s-box my-8 gap-0">
        <TabList
          variant="underline"
          size={1}
          className="border-none pl-4 shadow-none"
        >
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
          <Pre
            code={curlCommand}
            className="rounded-lg border-none shadow-[var(--shadow-xs)]"
          />
        </TabPanel>
        <TabPanel id="source" className="p-0">
          <Pre
            collapsed
            code={source}
            className="rounded-lg border-none shadow-[var(--shadow-xs)]"
          />
        </TabPanel>
      </Tabs>
    </>
  )
}
