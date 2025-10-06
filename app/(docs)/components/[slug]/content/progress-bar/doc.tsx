import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      title: "Indeterminate",
      description: (
        <p>
          Use the <code>isIndeterminate</code> prop to show ongoing progress
          without a known completion value.
        </p>
      ),
      demo: {
        group: "progress-bar",
        name: "indeterminate",
      },
    },
  ],
} satisfies DocModule;
