import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "toolbar",
        name: "main",
      },
    },
    {
      title: "Orientation",
      description: (
        <p>
          Use the <code>orientation</code> prop to render the toolbar
          horizontally or vertically.
        </p>
      ),
      demo: {
        group: "toolbar",
        name: "orientation",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the toolbar and its
          children.
        </p>
      ),
      demo: {
        group: "toolbar",
        name: "size",
      },
    },
  ],
} satisfies DocModule;
