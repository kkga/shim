import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "text-area",
        name: "main",
      },
    },
    {
      title: "Label position",
      description: (
        <p>
          Use the <code>labelPosition</code> prop to place the label.
        </p>
      ),
      demo: {
        group: "text-area",
        name: "label-position",
      },
      code: "label-position",
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to adjust the control height and
          typography.
        </p>
      ),
      demo: {
        group: "text-area",
        name: "size",
      },
      code: "size",
    },
    {
      title: "Variant",
      description: (
        <p>
          Select a <code>variant</code> to match the text area with its
          container.
        </p>
      ),
      demo: {
        group: "text-area",
        name: "variant",
      },
      code: "variant",
    },
  ],
} satisfies DocModule;
