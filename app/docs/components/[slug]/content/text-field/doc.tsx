import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
    {
      title: "Label position",
      description: (
        <p>
          Use the <code>labelPosition</code> prop to position the label.
        </p>
      ),
      demo: {
        group: "text-field",
        name: "labelPosition",
      },
      code: "label-position",
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to adjust spacing and typography.
        </p>
      ),
      demo: {
        group: "text-field",
        name: "size",
      },
      code: "size",
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to choose the visual treatment.
        </p>
      ),
      demo: {
        group: "text-field",
        name: "variant",
      },
      code: "variant",
    },
  ],
} satisfies DocModule;
