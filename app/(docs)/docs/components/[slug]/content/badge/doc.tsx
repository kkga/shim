import { Note } from "@/app/(docs)/docs/_components/note";
import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
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
    },
    {
      title: "Content",
      description: (
        <>
          <p>
            Badges can contain a label, icon, or both. Use icons by passing an
            icon component as a child. If the only child is an SVG element, the
            badge will be sized to a square. This can be controlled by setting
            the <code>isSquare</code> prop.
          </p>
          <Note>
            If a visible label isn&apos;t specified, an <code>aria-label</code>{" "}
            must be provided to the icon for accessibility.
          </Note>
        </>
      ),
      demo: {
        group: "badge",
        name: "content",
      },
    },
  ],
} satisfies DocModule;
