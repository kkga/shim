import { visit } from "unist-util-visit";

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
  });
};

export default rehypePreRaw;
