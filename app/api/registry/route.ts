import type { NextRequest } from "next/server";
import registry from "@/shim-ui/registry/registry.json" with { type: "json" };

export function GET(_request: NextRequest) {
  const components = registry.items.map((item) => ({
    name: item.name,
    title: item.title,
    description: item.description,
    category: item.category,
  }));

  return Response.json(components, {
    headers: { "Content-Type": "application/json" },
  });
}
