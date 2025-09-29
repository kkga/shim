import { visit } from "unist-util-visit";

// biome-ignore lint/suspicious/noExplicitAny: ok
export const preProcess = () => (tree: any) => {
  visit(tree, (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      const [codeEl] = node.children;
      if (codeEl.tagName !== "code") {
        return;
      }
      node.raw = codeEl.children?.[0].value;
    }
  });
};

const trailingNewlinesRegex = /\n+$/;

// biome-ignore lint/suspicious/noExplicitAny: ok
export const postProcess = () => (tree: any) => {
  visit(tree, "element", (node) => {
    if (node?.type === "element" && node?.tagName === "pre") {
      node.properties.raw = node.raw.replace(trailingNewlinesRegex, "");
    }
  });
};
