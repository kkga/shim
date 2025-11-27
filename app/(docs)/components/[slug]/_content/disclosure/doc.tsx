import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "disclosure",
        name: "main",
      },
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to change the visual style of the
          disclosure.
        </p>
      ),
      demo: {
        group: "disclosure",
        name: "variant",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to adjust the size of the disclosure.
        </p>
      ),
      demo: {
        group: "disclosure",
        name: "size",
      },
    },
  ],
} satisfies DocModule;
