"use client";

import { type ReactNode, useState } from "react";
import type { CodeItem } from "@/app/(docs)/_components/code-block";
import { DocSection } from "@/app/(docs)/_components/doc-section";
import { Note } from "@/app/(docs)/_components/note";
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
            {componentTitle} depends on {links}. Install the dependencies to
            ensure proper functionality.
          </p>
        ) : null,
    },
  ];

  let [currentTab, setCurrentTab] = useState(
    () => snippets.at(0)?.title ?? null
  );

  return (
    <DocSection
      code={snippets}
      onCodeTabChange={(tab) =>
        setCurrentTab(typeof tab === "string" ? tab : String(tab))
      }
      title="Install"
    >
      <p>Use the CLI or copy the source code manually.</p>
      {currentTab !== "Command" && (
        <DependenciesNote
          componentTitle={componentTitle}
          dependencies={dependencies}
        />
      )}
    </DocSection>
  );
}

interface DependenciesNoteProps {
  componentTitle: string;
  dependencies: Array<{ name: string; slug: string }>;
}

function DependenciesNote({
  componentTitle,
  dependencies,
}: DependenciesNoteProps) {
  if (dependencies.length === 0) {
    return null;
  }

  let links = buildDependencyLinks(dependencies);

  return (
    <Note className="mt-4" intent="warning" title="Dependencies">
      <p>
        {componentTitle} depends on {links}. Install the dependencies to ensure
        proper functionality.
      </p>
    </Note>
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
