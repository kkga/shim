import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
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
