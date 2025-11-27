import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "tooltip",
        name: "main",
      },
    },
    {
      title: "Placement",
      description: (
        <p>
          Use the <code>placement</code> prop to control where the tooltip
          appears relative to its trigger.
        </p>
      ),
      demo: {
        group: "tooltip",
        name: "placement",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the tooltip.
        </p>
      ),
      demo: {
        group: "tooltip",
        name: "size",
      },
      demoLayout: "row",
    },
  ],
} satisfies DocModule;
