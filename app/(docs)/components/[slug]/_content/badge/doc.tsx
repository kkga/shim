import { Note } from "@/app/(docs)/_components/note";
import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "badge",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the badge.
        </p>
      ),
      demo: {
        group: "badge",
        name: "size",
      },
      demoLayout: "row",
    },
    {
      title: "Intent",
      description: (
        <p>
          Use the <code>intent</code> prop to set the semantic color of the
          badge.
        </p>
      ),
      demo: {
        group: "badge",
        name: "intent",
      },
      demoLayout: "row",
    },
    {
      title: "Content",
      description: (
        <>
          <p>
            Badges can contain a label, icon, or both. Use icons by passing an
            icon component as a child.
          </p>
          <p>
            If the only child is an SVG element, the badge will be sized to a
            square. This can be controlled by setting the <code>isSquare</code>{" "}
            prop.
          </p>
          <Note preset="aria-label" />
        </>
      ),
      demo: {
        group: "badge",
        name: "content",
      },
      demoLayout: "row",
    },
  ],
} satisfies DocModule;
