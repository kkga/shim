import { getComponentDocs, getGuides } from '@/docs/lib/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let docs = getComponentDocs().map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
  }))
  let guides = getGuides().map((guide) => ({
    url: `${baseUrl}/guides/${guide.slug}`,
  }))

  let routes = ['', '/docs', '/guides'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...docs, ...guides]
}
