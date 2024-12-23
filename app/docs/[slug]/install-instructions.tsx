import { CodeBlock, H2, Note, P } from "@/app/components/mdx/mdx-components"
import { Link } from "@ui/Link"

interface Props {
  name: string
  source: string
  dependencies?: { name: string; slug: string }[]
}

const URL = "https://shim.kkga.me/api"

export function InstallInstructions({ name, dependencies, source }: Props) {
  let curlCommand = `curl -o ${name}.tsx '${URL}?c=${name}'`

  return (
    <section className="col-span-full grid grid-cols-subgrid items-stretch gap-y-8">
      <div className="border-neutral-4 row-span-2 flex flex-col border-t pt-6 *:last:mb-0">
        <H2 className="mb-2! leading-normal! text-sm">How to install</H2>
        <P>
          Run cURL command to download the file into your project or copy the
          source code manually.
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
      </div>

      <CodeBlock
        className="bg-accent-2!"
        title="Terminal"
        highlight={false}
        code={curlCommand}
      />

      <CodeBlock
        collapsed
        compact
        title="Source code"
        className="bg-accent-2! col-start-2"
        code={source}
      />
    </section>
  )
}
