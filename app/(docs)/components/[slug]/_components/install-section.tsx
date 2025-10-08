import type { ReactNode } from "react";
import type { CodeItem } from "@/app/(docs)/_components/code-block";
import { DocSection } from "@/app/(docs)/_components/doc-section";
import { Link } from "@/shim-ui/link";

interface InstallSectionProps {
  command: string;
  componentTitle: string;
  dependencies: Array<{ name: string; slug: string }>;
  source: string;
  sourceUrl: string;
}

function InstallSection({
  command,
  componentTitle,
  dependencies,
  source,
  sourceUrl,
}: InstallSectionProps) {
  let links = buildDependencyLinks(dependencies);

  let snippets: CodeItem[] = [
    { title: "Command", content: command },
    {
      title: "Source code",
      content: source,
      sourceUrl,
      note:
        dependencies.length > 0 ? (
          <p>
            {componentTitle} depends on {links}.<br />
            Install the dependencies to ensure proper functionality.
          </p>
        ) : null,
    },
  ];

  return (
    <DocSection code={snippets} title="Install">
      <p>Use the CLI or copy the source code manually.</p>
    </DocSection>
  );
}

function buildDependencyLinks(
  dependencies: Array<{ name: string; slug: string }>
) {
  let nodes: ReactNode[] = [];

  dependencies.forEach((dependency, index) => {
    if (index > 0) {
      nodes.push(index === dependencies.length - 1 ? " and " : ", ");
    }

    nodes.push(
      <Link
        href={`/components/${dependency.slug}`}
        key={dependency.slug}
        variant="underline"
      >
        {dependency.name}
      </Link>
    );
  });

  return nodes;
}

export { InstallSection };
