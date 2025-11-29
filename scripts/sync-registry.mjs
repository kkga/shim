#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

// Matches alias component imports: from "@/shim-ui/<component>" (excluding lib)
const IMPORT_RE = /from\s+"@\/shim-ui\/(?!lib)([a-z0-9-]+)(?:["/])/g;

function parseRegistry(registryPath) {
  const raw = readFileSync(registryPath, "utf8");
  try {
    return JSON.parse(raw);
  } catch (e) {
    console.error("Failed to parse registry.json:", e);
    process.exit(1);
  }
}

function buildNameIndex(items) {
  const map = new Map();
  for (const item of items) {
    if (item && typeof item.name === "string") {
      map.set(item.name, true);
    }
  }
  return map;
}

function extractImports(source) {
  const found = new Set();
  for (const match of source.matchAll(IMPORT_RE)) {
    const depName = match[1];
    if (depName) {
      found.add(depName);
    }
  }
  return found;
}

function computeDependencies(root, item, knownNames) {
  const deps = new Set();
  for (const rel of item.files) {
    const filePath = resolve(root, rel);
    let source;
    try {
      source = readFileSync(filePath, "utf8");
    } catch {
      continue;
    }
    for (const depName of extractImports(source)) {
      if (depName !== item.name && knownNames.has(depName)) {
        deps.add(depName);
      }
    }
  }
  return Array.from(deps).sort();
}

function diffDependencies(prev, next) {
  const prevSet = new Set(prev);
  const nextSet = new Set(next);
  const added = [];
  const removed = [];
  for (const d of nextSet) {
    if (!prevSet.has(d)) {
      added.push(d);
    }
  }
  for (const d of prevSet) {
    if (!nextSet.has(d)) {
      removed.push(d);
    }
  }
  return { added: added.sort(), removed: removed.sort() };
}

function updateItems(root, items) {
  const knownNames = buildNameIndex(items);
  const changes = [];
  let updatedCount = 0;
  for (const item of items) {
    if (!item || typeof item.name !== "string") {
      continue;
    }
    if (!Array.isArray(item.files) || item.files.length === 0) {
      continue;
    }
    const prev = Array.isArray(item.dependencies)
      ? item.dependencies.slice().sort()
      : [];
    const next = computeDependencies(root, item, knownNames);
    const changed = next.join("\u0000") !== prev.join("\u0000");
    if (changed) {
      const diff = diffDependencies(prev, next);
      item.dependencies = next;
      updatedCount += 1;
      changes.push({ name: item.name, prev, next, ...diff });
    }
  }
  return { updatedCount, changes };
}

function main() {
  const root = resolve(process.cwd());
  const registryPath = resolve(root, "shim-ui/registry/registry.json");
  const json = parseRegistry(registryPath);
  if (!Array.isArray(json.items)) {
    console.error("registry.json missing items array");
    process.exit(1);
  }
  const { updatedCount, changes } = updateItems(root, json.items);
  if (updatedCount > 0) {
    writeFileSync(registryPath, `${JSON.stringify(json, null, 2)}\n`);
  }
  console.log(`Sync complete. Updated ${updatedCount} item(s).`);
  for (const c of changes) {
    const added = c.added.length ? ` +${c.added.join(",")}` : "";
    const removed = c.removed.length ? ` -${c.removed.join(",")}` : "";
    console.log(
      `  • ${c.name}: [${c.prev.join(",")}] -> [${c.next.join(",")}]${added}${removed}`
    );
  }
}

main();
