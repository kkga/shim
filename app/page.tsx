import { Link } from "@ui/Link"
import { Example1 } from "../examples/1"
import { Example2 } from "../examples/2"
import { H2, H4, HR, P } from "./components/mdx/mdx-components"

export default function Page() {
  return (
    <>
      <div className="grid grid-cols-4 gap-y-12">
        <div className="col-span-2 flex flex-col gap-2">
          <div className="text-balance text-xl font-medium leading-tight tracking-tight text-neutral-text-contrast">
            <P>Pre-styled components, ready for your next project.</P>
          </div>
        </div>
      </div>

      <HR className="col-span-full" />

      <Example2 />

      <H2>Examples</H2>
      <H4>GitHub repository page</H4>
      <P>
        Uses a variety of components to create a GitHub repository page layout.
        Click around to see the components in action.
      </P>

      <P>
        Includes{" "}
        <Link href="/docs/menu" intent="neutral">
          Menu
        </Link>
        , Tabs, SearchField, ComboBox, Button, Table, Select and more.
      </P>

      <Example1 />
    </>
  )
}
