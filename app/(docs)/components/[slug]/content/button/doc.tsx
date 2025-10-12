import { Note } from "@/app/(docs)/_components/note";
import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "button",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the button.
        </p>
      ),
      demo: {
        group: "button",
        name: "size",
      },
      className: "flex-row items-start",
    },
    {
      title: "Intent",
      description: (
        <p>
          Use the <code>intent</code> prop to set the semantic color.
        </p>
      ),
      demo: {
        group: "button",
        name: "intent",
      },
      className: "flex-row items-start",
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to set the visual style.
        </p>
      ),
      demo: {
        group: "button",
        name: "variant",
      },
      code: "variant",
      className: "flex-row items-start",
    },
    {
      title: "Content",
      description: (
        <>
          <p>
            Buttons can contain a label, icon, or both. Use icons by passing an
            icon component as a child.
          </p>
          <p>
            If the only child is an SVG element, the button will be sized to a
            square. Control this with the <code>isIconOnly</code> prop.
          </p>
          <Note intent="info" title="Accessibility">
            If a visible label isn&apos;t specified, provide an{" "}
            <code>aria-label</code> for accessibility.
          </Note>
        </>
      ),
      demo: {
        group: "button",
        name: "content",
      },
      code: "content",
      className: "flex-row",
    },
    {
      title: "Disabled",
      description: (
        <p>
          Use the <code>isDisabled</code> prop to disable the button.
        </p>
      ),
      demo: {
        group: "button",
        name: "disabled",
      },
      className: "flex-row items-start",
    },
    {
      title: "Pending",
      description: (
        <p>
          Use the <code>isPending</code> prop to display a loading spinner while
          preserving the button&apos;s width. The button remains disabled during
          the pending state.
        </p>
      ),
      demo: {
        group: "button",
        name: "pending",
      },
      className: "items-start",
    },
  ],
} satisfies DocModule;
