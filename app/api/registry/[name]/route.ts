import path from "node:path";
import type { NextRequest } from "next/server";
import { getFileSource } from "@/app/_lib/utils";
import registry from "@/shim-ui/registry/registry.json" with { type: "json" };

export async function GET(
  _request: NextRequest,
  { params }: { params: Promise<{ name: string }> }
) {
  let name = (await params).name;

  if (!name) {
    return new Response(
      JSON.stringify({
        error: "Provide a component name. Example: /api/registry/button",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }

  const component = registry.items.find((item) => item.name === name);

  if (!component) {
    return new Response(JSON.stringify({ error: "Component not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const json = {
    name: component.name,
    title: component.title,
    description: component.description,
    category: component.category,
    docUrl: component.docUrl,
    ariaUrl: component.ariaUrl,
    dependencies: component.dependencies,
    files: component.files.map((file) => ({
      path: path.basename(file),
      content: getFileSource(file),
    })),
  };

  return Response.json(json, {
    headers: { "Content-Type": "application/json" },
  });
}
