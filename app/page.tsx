import { ArrowRight, Shapes } from "@phosphor-icons/react/dist/ssr"
import { LinkButton } from "@ui/Button"
import { Examples } from "./components/examples"
import { H1, P } from "./components/mdx/mdx-components"

export default function Page() {
  return (
    <main className="bg-neutral-bg-subtle flex min-h-svh flex-col px-8 py-16">
      <div className="pink-gradient-background mx-auto grid max-w-7xl grid-cols-3 gap-12">
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

          <P className="text-neutral-text-contrast mb-4 mt-4 text-balance text-4xl font-medium leading-none tracking-tight">
            Toolkit for refined interfaces.
          </P>
          <P className="text-neutral-text text-md m-0 text-balance leading-5">
            A collection of React Aria-based components, carefully styled and
            ready to go.
          </P>

          <div className="mt-8 flex gap-2">
            <LinkButton size={3} href="/docs" intent="accent" variant="solid">
              Get started
              <ArrowRight size={16} weight="duotone" />
            </LinkButton>
            <LinkButton
              size={3}
              variant="soft"
              href="https://github.com/kkga/shim"
              intent="neutral"
              target="_blank"
            >
              View on GitHub
            </LinkButton>
          </div>
        </div>

        <div className="col-span-2">
          <Examples />
        </div>
      </div>
    </main>
  )
}
