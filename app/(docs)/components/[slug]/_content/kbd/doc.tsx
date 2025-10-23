import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "kbd",
        name: "main",
      },
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to set the appearance of the kbd.
        </p>
      ),
      demo: {
        group: "kbd",
        name: "variant",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to adjust the size of the keyboard
          input.
        </p>
      ),
      demo: {
        group: "kbd",
        name: "size",
      },
    },
  ],
} satisfies DocModule;
