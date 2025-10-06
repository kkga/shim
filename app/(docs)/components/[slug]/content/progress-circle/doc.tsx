import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      title: "Size",
      description: (
        <p>
          Adjust the <code>size</code> prop to change the diameter.
        </p>
      ),
      demo: {
        group: "progress-circle",
        name: "size",
      },
    },
    {
      title: "Indeterminate",
      description: (
        <p>
          Use the <code>isIndeterminate</code> prop to indicate ongoing progress
          without a known completion state.
        </p>
      ),
      demo: {
        group: "progress-circle",
        name: "indeterminate",
      },
    },
  ],
} satisfies DocModule;
