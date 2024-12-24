import matter from "gray-matter"
import fs from "node:fs"
import { basename, extname, join } from "node:path"
import { ComponentMetadata, GuideMetadata } from "./types"

const DOCS_DIR = join(process.cwd(), "docs")
const GUIDES_DIR = join(process.cwd(), "guides")

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  let { content, data } = matter(rawContent)
  return { data, content }
}

const slugify = (str: string) =>
  str
    .trim()
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .replace(/[^a-zA-Z0-9-]/g, "")
    .toLowerCase()

function getComponentDocs(
  { exclude }: { exclude: ComponentMetadata["status"][] } = {
    exclude: [],
  },
) {
  let entries = fs
    .readdirSync(DOCS_DIR, { recursive: true, withFileTypes: true })
    .filter((dirent) => dirent.isFile() && extname(dirent.name) === ".mdx")
    .map((dirent) => basename(dirent.parentPath))

  return entries
    .map((name) => {
      let { data, content } = readMDXFile(join(DOCS_DIR, name, "doc.mdx"))
      let slug = slugify(name)
      return { metadata: data as ComponentMetadata, slug, content }
    })
    .filter((component) => !exclude.includes(component.metadata.status))
}

function getGuides() {
  let entries = fs
    .readdirSync(GUIDES_DIR, { withFileTypes: true })
    .filter((dirent) => dirent.isFile() && extname(dirent.name) === ".mdx")
    .map((dirent) => dirent.name)

  return entries
    .map((name) => {
      let { data, content } = readMDXFile(join(GUIDES_DIR, name))
      let slug = slugify(name.replace(/\.mdx$/, ""))
      return { metadata: data as GuideMetadata, slug, content }
    })
    .sort((a, b) => a.metadata.order - b.metadata.order)
}

function getComponentSource(filename: string) {
  return fs
    .readFileSync(join(process.cwd(), "components", `${filename}.tsx`), "utf-8")
    .trim()
}

function getDemosSource(componentDir: string) {
  let dir = join(DOCS_DIR, componentDir)
  let demoFiles = fs.readdirSync(dir).filter((file) => extname(file) === ".tsx")

  let demos: Record<string, string> = {}

  for (let file of demoFiles) {
    let content = fs.readFileSync(join(dir, file), "utf-8").trim()
    let slug = basename(file, extname(file))
    demos[slug] = content
  }

  return demos
}

function getFileSource(filePath: string) {
  filePath = join(process.cwd(), filePath)
  return fs.readFileSync(filePath, "utf-8").trim()
}

export {
  getComponentDocs,
  getComponentSource,
  getDemosSource,
  getFileSource,
  getGuides,
}
