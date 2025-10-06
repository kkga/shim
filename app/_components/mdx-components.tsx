import type { MDXComponents } from "mdx/types";
import { default as NextLink } from "next/link";
import type { ComponentPropsWithoutRef } from "react";
import { twJoin, twMerge } from "tailwind-merge";
import { Code } from "./code";
import { CodeBlock } from "./code-block";
import { DocSection } from "./doc-section";
import { Note } from "./note";
import { Step, Steps } from "./steps";

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

function H1({ className, ...props }: ComponentPropsWithoutRef<"h1">) {
  return (
    <h1
      className={twJoin(
        "scroll-mt-6 text-balance font-semibold text-neutral-text-contrast text-xl leading-tight lg:text-2xl",
        className
      )}
      {...props}
    />
  );
}

function H2({ className, ...props }: ComponentPropsWithoutRef<"h2">) {
  return (
    <h2
      className={twJoin(
        "not-first:mt-12 mb-3 scroll-mt-6 text-balance font-semibold text-lg text-neutral-text-contrast leading-tight",
        "*:text-inherit *:no-underline *:hover:underline *:hover:decoration-neutral-border-hover",
        className
      )}
      {...props}
    />
  );
}

function H3({ className, ...props }: ComponentPropsWithoutRef<"h3">) {
  return (
    <h3
      className={twJoin(
        "not-first:mt-12 mb-2 scroll-mt-6 text-balance font-medium text-base text-neutral-text-contrast leading-tight",
        "*:text-inherit *:no-underline *:hover:underline *:hover:decoration-neutral-border-hover",
        className
      )}
      {...props}
    />
  );
}

function H4({ className, ...props }: ComponentPropsWithoutRef<"h4">) {
  return (
    <h4
      className={twJoin(
        "not-first::mt-6 mb-2 scroll-mt-6 text-balance font-medium text-base text-neutral-text-contrast leading-tight",
        "*:text-inherit *:no-underline *:hover:underline *:hover:decoration-neutral-border-hover",
        className
      )}
      {...props}
    />
  );
}

function H5({ className, ...props }: ComponentPropsWithoutRef<"h5">) {
  return (
    <h5
      className={twJoin(
        "not-first:mt-6 mb-2 scroll-mt-6 text-balance font-medium text-neutral-text-contrast text-sm",
        "*:text-inherit *:no-underline *:hover:underline *:hover:decoration-neutral-border-hover",
        className
      )}
      {...props}
    />
  );
}

function H6({ className, ...props }: ComponentPropsWithoutRef<"h6">) {
  return (
    <h6
      className={twJoin(
        "not-first::mt-8 mb-4 scroll-mt-6 text-balance font-medium text-neutral-text-contrast text-sm",
        "*:text-inherit *:no-underline *:hover:underline *:hover:decoration-neutral-border-hover",
        className
      )}
      {...props}
    />
  );
}

function P({ className, ...props }: ComponentPropsWithoutRef<"p">) {
  return <p className={twJoin("mb-2", className)} {...props} />;
}

const mdxComponents: MDXComponents = {
  h1: H1,
  h2: H2,
  h3: H3,
  h4: H4,
  h5: H5,
  h6: H6,
  p: P,
  ul: ({ className, ...props }: ComponentPropsWithoutRef<"ul">) => (
    <ul
      className={twJoin("my-4 list-outside list-disc pl-4", className)}
      {...props}
    />
  ),
  li: ({ className, ...props }: ComponentPropsWithoutRef<"li">) => (
    <li className={twJoin("mb-2", className)} {...props} />
  ),
  hr: ({ className, ...props }: ComponentPropsWithoutRef<"hr">) => (
    <hr className={twJoin("my-12 border-neutral-line", className)} {...props} />
  ),
  em: ({ className, ...props }: ComponentPropsWithoutRef<"em">) => (
    <em
      className={twJoin("text-neutral-text-contrast italic", className)}
      {...props}
    />
  ),
  strong: ({ className, ...props }: ComponentPropsWithoutRef<"strong">) => (
    <strong
      className={twJoin("font-medium text-neutral-text-contrast", className)}
      {...props}
    />
  ),
  a: Link,
  code: Code,
  pre: CodeBlock,
  Demo: DocSection,
  Note,
  Steps,
  Step,
  CodeBlock,
};

export { H1, H2, H3, H4, H5, H6, Link, mdxComponents, P };

declare global {
  type MDXProvidedComponents = typeof mdxComponents;
}
