import { getComponentSource } from "@/app/_lib/utils"

export async function GET(request: Request) {
  let { searchParams } = new URL(request.url)
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
