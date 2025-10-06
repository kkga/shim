import type { MDXComponents } from "mdx/types";
import { mdxComponents } from "./app/(docs)/docs/_components/mdx-components";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...mdxComponents,
    ...components,
  };
}
