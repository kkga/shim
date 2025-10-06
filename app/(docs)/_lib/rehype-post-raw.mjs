import { visit } from "unist-util-visit";

const trailingNewlinesRegex = /\n+$/;

const rehypePostRaw = () => (tree) => {
  visit(tree, "element", (node) => {
    if (node?.type !== "element" || node?.tagName !== "pre") {
      return;
    }

    if (typeof node.raw !== "string") {
      return;
    }

    const trimmed = node.raw.replace(trailingNewlinesRegex, "");
    node.properties = node.properties ?? {};
    node.properties.raw = trimmed;
  });
};

export default rehypePostRaw;
