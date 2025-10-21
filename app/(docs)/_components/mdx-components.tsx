import type { MDXComponents } from "mdx/types";
import { default as NextLink } from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import { match } from "ts-pattern";
import { getFileSource } from "@/app/_lib/utils";
import { demoRegistry } from "@/app/docs/_demo-registry/demo-registry";
import { Code } from "./code";
import { CodeBlock } from "./code-block";
import { DocSection } from "./doc-section";
import { Note } from "./note";
import { Step } from "./step";

function Pre({
  children,
  ...rest
}: ComponentPropsWithoutRef<"pre"> & { title?: string; raw?: string }) {
  const title = rest.title as string | undefined;
  const raw = rest.raw as string | undefined;

  // Use raw as content, since it's the extracted code text
  const content = raw || "";

  return (
    <CodeBlock
      {...rest}
      code={[
        {
          content,
          raw,
          title,
          highlight: true,
        },
      ]}
    />
  );
}

interface ComponentDemoProps {
  children?: ReactNode;
  className?: string;
  code?: string | false;
  codeTitle?: string;
  component: keyof typeof demoRegistry;
  demo: string;
  stacked?: boolean;
  title?: string;
  wrapperClassName?: string;
}

function getDemoCode(
  component: keyof typeof demoRegistry,
  code: string | false,
  title?: string,
  codeTitle?: string
) {
  if (!code) {
    return;
  }

  let source = match(component)
    .with("theme", () => `app/(docs)/[slug]/content/demos/theme-${code}.tsx`)
    .otherwise(
      () => `app/(docs)/components/[slug]/content/${component}/${code}.tsx`
    );

  try {
    let content = getFileSource(source);

    return [
      {
        content,
        title: codeTitle ?? (title ? `${title} example` : "Example"),
      },
    ];
  } catch (_error) {
    return;
  }
}

function ComponentDemo({
  children,
  className,
  code,
  codeTitle,
  component,
  demo,
  stacked,
  title,
}: ComponentDemoProps) {
  let group = demoRegistry[component];
  if (!group) {
    throw new Error(`Unknown component demo group: ${String(component)}`);
  }

  let DemoComponent = group[demo];
  if (!DemoComponent) {
    throw new Error(
      `Unknown demo "${demo}" for component group: ${String(component)}`
    );
  }

  let codeSnippets = getDemoCode(component, code ?? demo, title, codeTitle);

  return (
    <DocSection
      className={className}
      code={codeSnippets}
      demo={<DemoComponent />}
      stacked={stacked}
      title={title}
    >
      {children}
    </DocSection>
  );
}

export function Link({
  className,
  href,
  ...props
}: ComponentPropsWithoutRef<"a">) {
  let classNames = twMerge(
    "text-accent-text underline decoration-accent-line underline-offset-2 hover:decoration-accent-border-hover",
    className
  );
  if (href?.startsWith("/")) {
    return (
      <NextLink className={classNames} href={href} {...props}>
        {props.children}
      </NextLink>
    );
  }

  if (href?.startsWith("#")) {
    return <a className={classNames} href={href} {...props} />;
  }

  return (
    <a
      className={classNames}
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      {...props}
    />
  );
}

export const mdxComponents: MDXComponents = {
  a: Link,
  code: Code,
  pre: Pre,
  Demo: DocSection,
  ComponentDemo,
  Note,
  Step,
  CodeBlock,
};

declare global {
  type MDXProvidedComponents = typeof mdxComponents;
}
