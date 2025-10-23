import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "popover",
        name: "main",
      },
    },
    {
      title: "Placement",
      description: (
        <p>
          Use the <code>placement</code> prop to position the popover relative
          to its trigger.
        </p>
      ),
      demo: {
        group: "popover",
        name: "placement",
      },
    },
  ],
} satisfies DocModule;
