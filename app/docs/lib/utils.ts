import matter from "gray-matter"
import fs from "node:fs"
import path, { basename } from "node:path"
import { ComponentMetadata, GuideMetadata } from "./types"

function readMDXFile(filePath: string) {
  let rawContent = fs.readFileSync(filePath, "utf-8")
  let { content, data } = matter(rawContent)
  return { data, content }
}

function getComponentDocs() {
  let dir = path.join(process.cwd(), "docs")

  let entries = fs
    .readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((dirent) => dirent.isFile() && path.extname(dirent.name) === ".mdx")
    .map((dirent) => basename(dirent.parentPath))

  return entries.map((name) => {
    let { data, content } = readMDXFile(path.join(dir, name, "doc.mdx"))
    let slug = name.toLowerCase()
    return { metadata: data as ComponentMetadata, slug, content }
  })
}

function getGuides() {
  let dir = path.join(process.cwd(), "guides")

  let entries = fs
    .readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((dirent) => dirent.isFile() && path.extname(dirent.name) === ".mdx")
    .map((dirent) => dirent.name)

  return entries.map((name) => {
    let { data, content } = readMDXFile(path.join(dir, name))
    let slug = name.replace(/\.mdx$/, "")
    return { metadata: data as GuideMetadata, slug, content }
  })
}

function getComponentSource(filename: string) {
  return fs
    .readFileSync(
      path.join(process.cwd(), "components", `${filename}.tsx`),
      "utf-8",
    )
    .trim()
}

function getComponentDemos(componentDir: string) {
  let dir = path.join(process.cwd(), "docs", componentDir)
  const demoFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".tsx")

  const demos: Record<string, string> = {}

  for (const file of demoFiles) {
    const content = fs.readFileSync(path.join(dir, file), "utf-8").trim()
    const slug = path.basename(file, path.extname(file))
    demos[slug] = content
  }

  return demos
}

function getUtilsSource() {
  return fs.readFileSync(
    path.join(process.cwd(), "app", "lib", "utils.ts"),
    "utf-8",
  )
}

function getBaseCssSource() {
  return fs.readFileSync(
    path.join(process.cwd(), "app", "styles", "base.css"),
    "utf-8",
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
