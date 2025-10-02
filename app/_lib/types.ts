import registry from "@/registry.json" with { type: "json" };

export type ComponentMetadata = (typeof registry.items)[0];

export interface GuideMetadata {
  title: string;
  description: string;
  order?: number;
  [key: string]: unknown;
}
