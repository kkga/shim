import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "date-field",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use <code>size</code> prop to set the size of the DateField component.
        </p>
      ),
      demo: {
        group: "date-field",
        name: "size",
      },
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to set the visual style.
        </p>
      ),
      demo: {
        group: "date-field",
        name: "variant",
      },
    },
  ],
} satisfies DocModule;
