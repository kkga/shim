import type { MDXComponents } from "mdx/types";
import { default as NextLink } from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";
import { Code } from "./code";
import { CodeBlock } from "./code-block";
import { DocSection } from "./doc-section";
import { Note } from "./note";
import { Step } from "./step";

function Link({ className, href, ...props }: ComponentPropsWithoutRef<"a">) {
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

const mdxComponents: MDXComponents = {
  a: Link,
  code: Code,
  pre: CodeBlock,
  Demo: DocSection,
  Note,
  Step,
  CodeBlock,
};

export { Link, mdxComponents };

declare global {
  type MDXProvidedComponents = typeof mdxComponents;
}
