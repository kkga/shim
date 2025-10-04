import type { NextRequest } from "next/server";
import { getFileSource } from "@/app/_lib/utils";

export function GET(_request: NextRequest) {
  try {
    const cssFiles = [
      {
        path: "theme.css",
        content: getFileSource("shim-ui/css/theme.css"),
      },
    ];
    return Response.json(
      { files: cssFiles },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch {
    return Response.json(
      { error: "Failed to load CSS files" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
