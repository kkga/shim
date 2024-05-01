import { getAllDocs } from '@/docs/lib/utils'

export const baseUrl = 'https://portfolio-blog-starter.vercel.app'

export default async function sitemap() {
  let docs = getAllDocs().map((doc) => ({
    url: `${baseUrl}/docs/${doc.slug}`,
  }))

  let routes = ['', '/docs'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...docs]
}
