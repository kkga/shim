import matter from 'gray-matter'
import fs from 'node:fs'
import path from 'node:path'
import { ComponentMetadata, GuideMetadata } from './types'

function readMDXFile(filePath: string) {
  const rawContent = fs.readFileSync(filePath, 'utf-8')
  const { content, data } = matter(rawContent)
  return { data, content }
}

function getMDXData(dir: string) {
  const mdxFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === '.mdx')

  return mdxFiles.map((file) => {
    const { data, content } = readMDXFile(path.join(dir, file))
    const slug = path.basename(file, path.extname(file))

    return {
      data,
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

function getComponentDocs() {
  return getMDXData(path.join(process.cwd(), 'docs')).map((doc) => ({
    ...doc,
    metadata: doc.data as ComponentMetadata,
  }))
}

function getGuides() {
  return getMDXData(path.join(process.cwd(), 'docs', 'guides')).map((doc) => ({
    ...doc,
    metadata: doc.data as GuideMetadata,
  }))
}

function getComponentSource(srcFilename: string) {
  return fs
    .readFileSync(
      path.join(process.cwd(), 'app', 'ui', `${srcFilename}.tsx`),
      'utf-8',
    )
    .trim()
}

function getComponentDemos(componentDir: string) {
  return getRawDemos(path.join(process.cwd(), 'app', 'demos', componentDir))
}

function getUtilsSource() {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'lib', 'utils.ts'),
    'utf-8',
  )
}

function getBaseCssSource() {
  return fs.readFileSync(
    path.join(process.cwd(), 'app', 'styles', 'base.css'),
    'utf-8',
  )
}

export {
  getBaseCssSource,
  getComponentDemos,
  getComponentDocs,
  getComponentSource,
  getGuides,
  getUtilsSource,
}
