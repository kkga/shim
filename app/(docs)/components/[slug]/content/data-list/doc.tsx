import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      title: "Orientation",
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
          Use the <code>size</code> prop to control the size of the data list.
          Child components that support <code>size</code> will inherit it
          automatically.
        </p>
      ),
      demo: {
        group: "data-list",
        name: "size",
      },
    },
  ],
} satisfies DocModule;
