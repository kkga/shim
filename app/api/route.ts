import { getComponentSource } from "@/docs/lib/utils"

export async function GET(request: Request) {
  let { searchParams } = new URL(request.url)
  let component = searchParams.get("component")

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
    return new Response("Please provide a component name", { status: 400 })
  }
}
