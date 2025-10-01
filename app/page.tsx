import { ArrowRight, ArrowSquareOut } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/badge";
import { DataList, DataListItem } from "@/components/data-list";
import { Link } from "@/components/link";
import { Separator } from "@/components/separator";
import { Examples } from "./_components/examples/examples";
import { Logo } from "./_components/logo";
import { P } from "./_components/mdx-components";

export default function Page() {
  return (
    <main className="flex min-h-svh flex-col bg-neutral-bg-subtle">
      <div className="mx-auto flex w-full max-w-7xl flex-col text-sm lg:grid lg:grid-cols-3 lg:gap-12">
        <div className="col-span-1 p-8 lg:p-12">
          <div className="flex items-center gap-4">
            <Logo />
            <Badge intent="warning" size={2}>
              Early alpha
            </Badge>
          </div>

          <P className="mt-4 mb-4 text-balance font-medium text-4xl text-neutral-text-contrast leading-10 tracking-tight">
            Toolkit for refined interfaces.
          </P>
          <P className="m-0 text-balance text-neutral-text">
            A collection of React Aria-based components, carefully styled and
            ready to go.
          </P>

          <div className="mt-8 flex gap-6">
            <Link
              className="flex items-center gap-1 font-medium"
              href="/docs"
              intent="accent"
            >
              Documentation
              <ArrowRight size={16} />
            </Link>
            <Link
              className="flex items-center gap-1 font-medium"
              href="https://github.com/kkga/shim"
              intent="accent"
              target="_blank"
            >
              GitHub
              <ArrowSquareOut size={16} />
            </Link>
          </div>

          <Separator className="mt-12 max-w-12" />

          <DataList className="mt-12 gap-6" size={2}>
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
  );
}
