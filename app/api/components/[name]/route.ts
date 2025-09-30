import type { NextRequest } from "next/server";
import { getComponentSource } from "@/app/_lib/utils";

export async function GET(
  _request: NextRequest,
  context: { params: RouteContext<"/api/components/[name]"> }
) {
  let { name } = await context.params;

  if (!name) {
    return new Response(
      JSON.stringify({
        error: "Provide a component name. Example: /api/components/button",
      }),
      { status: 400, headers: { "Content-Type": "application/json" } }
    );
  }
  try {
    const source = getComponentSource(name);
    const json = {
      name,
      files: [{ path: `${name}.tsx`, content: source }],
      dependencies: ["button"], // optional
    };
    return Response.json(json, {
      headers: { "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Component not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }
}
