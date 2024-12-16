import { ArrowRight, Shapes } from "@phosphor-icons/react/dist/ssr"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"
import { Separator } from "@ui/Separator"
import { Examples } from "./components/examples"
import { H1, P } from "./components/mdx/mdx-components"

export default function Page() {
  return (
    <main className="bg-neutral-bg-subtle flex min-h-svh flex-col px-8 py-16">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-12">
        <div className="col-span-1">
          <div className="flex h-8 items-center gap-1">
            <Shapes
              size={16}
              weight="fill"
              className="text-neutral-text-contrast"
            />
            <H1 className="text-neutral-text-contrast text-[13px] font-bold">
              Shim
            </H1>
          </div>

          <P className="text-neutral-text-contrast mb-4 mt-4 text-balance text-4xl font-medium leading-10 tracking-tight">
            Toolkit for refined interfaces.
          </P>
          <P className="text-neutral-text text-md m-0 text-balance leading-6">
            A collection of React Aria-based components, carefully styled and
            ready to go.
          </P>

          <div className="mt-8 flex gap-6">
            <Link
              href="/docs"
              intent="accent"
              className="flex items-center gap-1"
            >
              Documentation
              <ArrowRight size={16} />
            </Link>
            <Link
              href="https://github.com/kkga/shim"
              intent="accent"
              target="_blank"
            >
              GitHub
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
              value="It is what it is. Built on top of RAC—the best primitives out there, styled with refined taste and ready to go."
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

        <div className="col-span-2">
          <Examples />
        </div>
      </div>
    </main>
  )
}
