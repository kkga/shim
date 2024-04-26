import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export interface Metadata {
  name: string
  description: string
  category?: string
  sourcePath?: string
  demosPath?: string
  docUrl?: string
  composes?: string[]
}

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(rawContent)
  return { metadata: data as Metadata, content }
}

function getMDXData(dir: string) {
  const mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')
  return mdxFiles.map((file) => {
    let { metadata, content } = readMDXFile(path.join(dir, file))
    let slug = path.basename(file, path.extname(file))

    return {
      metadata,
      slug,
      content,
    }
  })
}

function getRawDemos(dir: string) {
  let demoFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.tsx')

  const demos: Record<string, string> = {}

  for (let file of demoFiles) {
    let content = fs.readFileSync(path.join(dir, file), 'utf-8').trim()
    let slug = path.basename(file, path.extname(file))
    demos[slug] = content
  }

  return demos
}

export function getAllDocs() {
  return getMDXData(path.join(process.cwd(), 'docs'))
}

export function getComponentSource({ sourcePath }) {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'components', 'ui', `${sourcePath}.tsx`),
    'utf-8'
  )
}

export function getComponentDemos({ componentDir }) {
  return getRawDemos(path.join(process.cwd(), 'app', 'demos', componentDir))
}
