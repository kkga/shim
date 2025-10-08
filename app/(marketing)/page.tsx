import {
  ArrowRightIcon,
  ArrowSquareOutIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Logo } from "@/app/_components/logo";
import { Badge } from "@/shim-ui/badge";
import { DataList, DataListItem } from "@/shim-ui/data-list";
import { Link } from "@/shim-ui/link";
import { Separator } from "@/shim-ui/separator";
import { Examples } from "./_components/examples/examples";

export default function Page() {
  return (
    <main className="flex h-svh flex-col overflow-clip md:overflow-y-auto">
      <div className="mx-auto flex w-full max-w-7xl flex-col text-sm md:grid md:grid-cols-[46ch_1fr_1fr] md:gap-8">
        <div className="col-span-1 p-8 md:p-12 lg:py-20 2xl:py-24">
          <div className="flex items-center gap-4">
            <Logo />
            <Badge intent="warning" size={2}>
              Early alpha
            </Badge>
          </div>

          <p className="mt-4 mb-4 text-balance font-medium text-4xl text-neutral-text-contrast leading-10 tracking-tight">
            Toolkit for refined interfaces.
          </p>
          <p className="m-0 text-balance font-book text-neutral-text">
            A collection of React Aria-based components, carefully styled and
            ready to go.
          </p>

          <div className="mt-8 flex gap-6">
            <Link
              className="flex items-center gap-1 font-medium"
              href="/get-started"
              intent="accent"
            >
              Documentation
              <ArrowRightIcon size={16} />
            </Link>
            <Link
              className="flex items-center gap-1 font-medium"
              href="https://github.com/kkga/shim"
              intent="accent"
              target="_blank"
            >
              GitHub
              <ArrowSquareOutIcon size={16} />
            </Link>
          </div>

          <Separator className="mt-8 max-w-12 md:my-8" />

          <div className="hidden md:block">
            <DataList className="gap-4" size={3}>
              <DataListItem
                label="What's going on here?"
                value="Great components, without the hassle."
              />

              <DataListItem
                label="How so?"
                value="It is what it is. Built on top of RAC—the best primitives out there, meticulously styled with care and attention to detail."
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
        </div>

        <div className="col-span-2 px-8 md:px-0 md:py-12 lg:py-20 2xl:py-24">
          <Examples />
        </div>
      </div>
    </main>
  );
}
