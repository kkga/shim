import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "data-list",
        name: "main",
      },
    },
    {
      title: "Label Position",
      description: (
        <p>
          Use the <code>labelPosition</code> prop to set the label position.
        </p>
      ),
      demo: {
        group: "data-list",
        name: "label-position",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the data list. Child
          components that support <code>size</code> will use the same size
          unless overridden.
        </p>
      ),
      demo: {
        group: "data-list",
        name: "size",
      },
    },
  ],
} satisfies DocModule;
