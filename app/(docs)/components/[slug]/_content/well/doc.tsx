import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "well",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the well.
        </p>
      ),
      demo: {
        group: "well",
        name: "size",
      },
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to set the visual style of the well.
        </p>
      ),
      demo: {
        group: "well",
        name: "variant",
      },
    },
  ],
} satisfies DocModule;
