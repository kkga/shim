import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr"
import { Badge } from "@ui/Badge"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"
import { Separator } from "@ui/Separator"
import { Examples } from "./_components/examples"
import { Logo } from "./_components/logo"
import { P } from "./_components/mdx-components"

export default function Page() {
  return (
    <main className="bg-neutral-bg-subtle flex min-h-svh flex-col">
      <div className="mx-auto flex w-full max-w-7xl flex-col text-sm lg:grid lg:grid-cols-3 lg:gap-12">
        <div className="col-span-1 p-8 lg:p-12">
          <div className="flex items-center gap-4">
            <Logo />
            <Badge size={2} intent="warning">
              Early alpha
            </Badge>
          </div>

          <P className="text-neutral-text-contrast mb-4 mt-4 text-balance text-4xl font-medium leading-10 tracking-tight">
            Toolkit for refined interfaces.
          </P>
          <P className="text-neutral-text m-0 text-balance">
            A collection of React Aria-based components, carefully styled and
            ready to go.
          </P>

          <div className="mt-8 flex gap-6">
            <Link
              href="/docs"
              intent="accent"
              className="flex items-center gap-1 font-medium"
            >
              Documentation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://github.com/kkga/shim"
              intent="accent"
              target="_blank"
              className="flex items-center gap-1 font-medium"
            >
              GitHub
              <ArrowSquareOut size={16} />
            </Link>
          </div>

          <Separator className="mt-12 max-w-12" />

          <DataList size={2} className="mt-12 gap-6">
            <DataListItem
              label="What's going on here?"
              value="Great components, without the hassle."
            />

            <DataListItem
              label="How so?"
              value="It is what it is. Built on top of RAC—the best primitives out there, styled with care and attention to detail."
            />

            <DataListItem
              label="Why should I care?"
              value="Because I care about you."
            />

            <DataListItem
              label="What's the stack?"
              value="React, TypeScript, RAC and Tailwind CSS v4. The good stuff."
            />
          </DataList>
        </div>

        <div className="col-span-2 hidden pt-12 lg:block">
          <Examples />
        </div>
      </div>
    </main>
  )
}
