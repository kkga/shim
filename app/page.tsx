import { Link } from "@ui/Link"
import { Example1 } from "../examples/1"
import { Example2 } from "../examples/2"
import { H1, H2, H4, HR, P } from "./components/mdx/mdx-components"
import { LinkButton } from "@ui/Button"
import { Shapes } from "@phosphor-icons/react/dist/ssr"

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col px-8 py-16">
      <div className="text-[14px] leading-normal">
        <div className="grid grid-cols-4 gap-y-12">
          <div className="col-span-2 flex flex-col gap-4">
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
            <div>
              <LinkButton href="/docs" intent="accent" size={3}>
                Get started
              </LinkButton>
            </div>
          </div>
        </div>

        <HR />

        <div className="grid grid-cols-2 gap-4">
          <H2 className="col-span-full">Examples</H2>

          <div>
            <H4>GitHub repository page</H4>
            <P>
              Uses a variety of components to create a GitHub repository page
              layout. Click around to see the components in action.
            </P>

            <P>
              Includes{" "}
              <Link href="/docs/menu" intent="neutral">
                Menu
              </Link>
              , Tabs, SearchField, ComboBox, Button, Table, Select and more.
            </P>
            <Example2 />
          </div>

          <div>
            <Example1 />
          </div>
        </div>
      </div>
    </main>
  )
}
