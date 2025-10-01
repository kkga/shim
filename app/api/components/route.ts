import type { NextRequest } from "next/server";
import registry from "@/registry.json" with { type: "json" };

export function GET(_request: NextRequest) {
  const components = registry.map((item) => ({
    name: item.name,
    title: item.title,
    description: item.description,
    category: item.category,
  }));

  return Response.json(components, {
    headers: { "Content-Type": "application/json" },
  });
}
