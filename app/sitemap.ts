import { getComponentDocs, getGuides } from "@/app/_lib/utils"

export const baseUrl = "https://shim.kkga.me"

export default async function sitemap() {
  let docs = getComponentDocs({ exclude: ["planned"] }).map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
  }))
  let guides = getGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
  }))
  let routes = ["", "/docs", "/guides"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }))

  return [...routes, ...docs, ...guides]
}
