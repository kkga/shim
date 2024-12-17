import matter from "gray-matter"
import fs from "node:fs"
import path, { basename } from "node:path"
import { ComponentMetadata, GuideMetadata } from "./types"

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

function getComponentDocs() {
  let dir = path.join(process.cwd(), "docs")

  let entries = fs
    .readdirSync(dir, { recursive: true, withFileTypes: true })
    .filter((dirent) => dirent.isFile() && path.extname(dirent.name) === ".mdx")
    .map((dirent) => basename(dirent.parentPath))

  return entries.map((name) => {
    let { data, content } = readMDXFile(path.join(dir, name, "doc.mdx"))
    let slug = slugify(name)
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
    let slug = slugify(name.replace(/\.mdx$/, ""))
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

function getDemosSource(componentDir: string) {
  let dir = path.join(process.cwd(), "docs", componentDir)
  let demoFiles = fs
    .readdirSync(dir)
    .filter((file) => path.extname(file) === ".tsx")

  let demos: Record<string, string> = {}

  for (let file of demoFiles) {
    let content = fs.readFileSync(path.join(dir, file), "utf-8").trim()
    let slug = path.basename(file, path.extname(file))
    demos[slug] = content
  }

  return demos
}

function getStyleUtilsSource() {
  return fs.readFileSync(path.join(process.cwd(), "lib", "style.ts"), "utf-8")
}

function getThemeUtilsSource() {
  return fs.readFileSync(path.join(process.cwd(), "lib", "theme.tsx"), "utf-8")
}

function getThemeCssSource() {
  return fs.readFileSync(
    path.join(process.cwd(), "theme", "theme.css"),
    "utf-8",
  )
}

export {
  getComponentDocs,
  getComponentSource,
  getDemosSource,
  getGuides,
  getStyleUtilsSource,
  getThemeCssSource,
  getThemeUtilsSource,
}
