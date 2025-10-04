import type { NextRequest } from "next/server";
import { getFileSource } from "@/app/_lib/utils";

export function GET(_request: NextRequest) {
  try {
    const utilities = [
      {
        path: "style.ts",
        content: getFileSource("shim-ui/lib/style.ts"),
      },
      {
        path: "theme.tsx",
        content: getFileSource("shim-ui/lib/theme.tsx"),
      },
    ];
    return Response.json(
      { files: utilities },
      {
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch {
    return Response.json(
      { error: "Failed to load utility files" },
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
