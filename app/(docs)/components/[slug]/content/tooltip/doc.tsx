import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
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
  ],
} satisfies DocModule;
