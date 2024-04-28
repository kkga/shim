import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'

export interface Metadata {
  name: string
  description: string
  category: string
  srcFilename: string
  docUrl?: string
  aria?: string
  composes?: string[]
}

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(rawContent)
  return { metadata: data as Metadata, content }
}

function getMDXData(dir: string) {
  const mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')
  return mdxFiles.map((file) => {
    const { metadata, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

function getRawDemos(dir: string) {
  const demoFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.tsx')

  const demos: Record<string, string> = {}

  for (const file of demoFiles) {
    const content = fs.readFileSync(path.join(dir, file), 'utf-8').trim()
    const slug = path.basename(file, path.extname(file))
    demos[slug] = content
  }

  return demos
}

export function getAllDocs() {
  return getMDXData(path.join(process.cwd(), 'docs'))
}

export function getComponentSource(srcFilename: string) {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'ui', `${srcFilename}.tsx`),
    'utf-8',
  )
}

export function getComponentDemos(componentDir: string) {
  return getRawDemos(path.join(process.cwd(), 'app', 'demos', componentDir))
}
