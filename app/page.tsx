import { Link } from "@ui/Link"
import { ExampleRepo } from "../examples/repo"
import { ExampleIssueTracker } from "../examples/issue-tracker"
import { H1, H2, H4, HR, P } from "./components/mdx/mdx-components"
import { LinkButton } from "@ui/Button"
import { Shapes } from "@phosphor-icons/react/dist/ssr"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col px-8 py-16">
      <div className="text-sm leading-normal">
        <div className="grid grid-cols-3 gap-12">
          <div className="col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-1.5">
              <Shapes
                size={16}
                weight="fill"
                className="text-neutral-text-contrast"
              />
              <H1 className="text-neutral-text-contrast text-md font-medium">
                Shim
              </H1>
            </div>

            <div className="text-neutral-text-contrast text-balance text-lg leading-tight tracking-tight">
              <P>Pre-styled components, ready for your next project.</P>
            </div>
            <div className="flex gap-2">
              <LinkButton href="/docs" intent="accent" size={3}>
                Get started
              </LinkButton>
              <LinkButton
                href="https://github.com/kkga/shim"
                intent="neutral"
                variant="ghost"
                size={3}
                target="_blank"
              >
                GitHub
              </LinkButton>
            </div>
          </div>

          <div className="col-span-2">
            <Tabs>
              <TabList className="mb-4" variant="soft">
                <Tab id="ex1">Issue tracker</Tab>
                <Tab id="ex2">Repository</Tab>
              </TabList>

              <TabPanel id="ex1">
                <ExampleIssueTracker />
                <H4>Issue tracker</H4>
                <P>
                  Uses a variety of components to create a GitHub repository
                  page layout. Click around to see the components in action.
                </P>
                <P>
                  Includes <Link href="/docs/menu">Menu</Link>, Tabs,
                  SearchField, ComboBox, Button, Table, Select and more.
                </P>
              </TabPanel>

              <TabPanel id="ex2">
                <ExampleRepo />
                <H4>Repository</H4>
                <P>
                  Uses a variety of components to create a GitHub repository
                  page layout. Click around to see the components in action.
                </P>
                <P>
                  Includes <Link href="/docs/menu">Menu</Link>,{" "}
                  <Link href="/docs/tabs">Tabs</Link>, SearchField, ComboBox,
                  Button, Table, Select and more.
                </P>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </main>
  )
}
