import { getComponentSource } from "@/app/_lib/utils"
import { NextRequest } from "next/server"

export function GET(request: NextRequest) {
  let searchParams = request.nextUrl.searchParams
  let component = searchParams.get("component")
  let c = searchParams.get("c")
  component = component || c

  if (component) {
    try {
      let source = getComponentSource(component)
      return new Response(source, {
        headers: {
          "Content-Type": "text/plain",
        },
      })
    } catch {
      return new Response("Component not found", { status: 404 })
    }
  } else {
    return new Response(
      "Provide a component name. Example: shim.kkga.me/api?c=Button",
      { status: 400 },
    )
  }
}
