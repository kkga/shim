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
  ],
} satisfies DocModule;
