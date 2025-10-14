import GithubSlugger from "github-slugger";
import { visit } from "unist-util-visit";

const slugger = new GithubSlugger();

export default function remarkToc() {
  return (tree) => {
    const toc = [];
    slugger.reset();

    visit(tree, "heading", (node) => {
      const depth = node.depth;

      // Extract text content from the heading
      let text = "";
      visit(node, "text", (textNode) => {
        text += textNode.value;
      });

      if (text.trim()) {
        const slug = slugger.slug(text.trim());

        toc.push({
          value: text.trim(),
          href: `#${slug}`,
          depth,
        });
      }
    });

    // Inject the TOC as an export in the MDX file
    if (toc.length > 0) {
      tree.children.unshift({
        type: "mdxjsEsm",
        value: `export const toc = ${JSON.stringify(toc)};`,
        data: {
          estree: {
            type: "Program",
            body: [
              {
                type: "ExportNamedDeclaration",
                declaration: {
                  type: "VariableDeclaration",
                  declarations: [
                    {
                      type: "VariableDeclarator",
                      id: { type: "Identifier", name: "toc" },
                      init: {
                        type: "Literal",
                        value: toc,
                        raw: JSON.stringify(toc),
                      },
                    },
                  ],
                  kind: "const",
                },
                specifiers: [],
                source: null,
              },
            ],
            sourceType: "module",
          },
        },
      });
    }
  };
}
