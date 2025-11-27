import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "disclosure-group",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop on <code>DisclosureGroup</code> to size
          the child
          <code>Disclosure</code> components.
        </p>
      ),
      demo: {
        group: "disclosure-group",
        name: "size",
      },
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop on <code>DisclosureGroup</code> to
          set the visual style of the child <code>Disclosure</code> components.
        </p>
      ),
      demo: {
        group: "disclosure-group",
        name: "variant",
      },
    },
  ],
} satisfies DocModule;
