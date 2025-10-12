import type { ReactNode } from "react";

export interface DemoReference {
  group: string;
  name: string;
}

export interface DocSection {
  title?: string;
  description?: ReactNode;
  demo: DemoReference;
  /**
   * Key in the demos source map. When omitted, the doc loader will try to use a kebab-case version of the demo name.
   */
  code?: string;
  codeTitle?: string;
  /**
   * Optional extra props passed to the demo wrapper.
   */
  className?: string;
  /**
   * Whether to stack the demo and code sections. Defaults to false.
   */
  stacked?: boolean;
}

export interface DocModule {
  sections: DocSection[];
}
