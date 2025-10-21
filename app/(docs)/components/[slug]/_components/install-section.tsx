import { Fragment, type ReactNode } from "react";
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
    { title: "Command", content: command, highlight: false },
    {
      title: "Source code",
      content: source,
      sourceUrl,
      note:
        dependencies.length > 0 ? (
          <p key={componentTitle}>
            {componentTitle} depends on {links}.<br />
            Install the dependencies to ensure proper functionality.
          </p>
        ) : null,
    },
  ];

  return (
    <DocSection code={snippets} id="install" title="Install">
      <p>Use the CLI or copy the source code manually.</p>
    </DocSection>
  );
}

function buildDependencyLinks(
  dependencies: Array<{ name: string; slug: string }>
) {
  return dependencies.map<ReactNode>((dependency, index) => {
    let separator = "";

    if (index > 0) {
      separator = index === dependencies.length - 1 ? " and " : ", ";
    }

    return (
      <Fragment key={dependency.slug}>
        {separator}
        <Link href={`/components/${dependency.slug}`} variant="underline">
          {dependency.name}
        </Link>
      </Fragment>
    );
  });
}

export { InstallSection };
