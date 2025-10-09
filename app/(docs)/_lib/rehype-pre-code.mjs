import { visit } from "unist-util-visit";

const TITLE_REGEX = /title\s*=\s*(?:"([^"]+)"|([^"\s]+))/i;

function extractTitle(meta) {
  if (typeof meta !== "string") {
    return;
  }

  const match = meta.match(TITLE_REGEX);
  if (match) {
    return (match[1] || match[2]).trim();
  }

  return;
}

const rehypePreRaw = () => (tree) => {
  visit(tree, (node) => {
    if (node?.type !== "element" || node?.tagName !== "pre") {
      return;
    }

    const [codeEl] = node.children ?? [];
    if (codeEl?.tagName !== "code") {
      return;
    }

    const value = codeEl.children?.[0]?.value;
    if (typeof value === "string") {
      node.raw = value;
    }

    const title = extractTitle(codeEl.data?.meta);
    if (title) {
      node.title = title;
    }
  });
};

export default rehypePreRaw;
