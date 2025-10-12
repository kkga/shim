import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "tag-group",
        name: "main",
      },
    },
    {
      title: "Selection",
      description: (
        <p>
          Set <code>selectionMode</code> to allow single or multiple tag
          selection.
        </p>
      ),
      demo: {
        group: "tag-group",
        name: "selection",
      },
      code: "selection",
    },
    {
      title: "Removing",
      description: (
        <p>
          Handle tag removal by providing an <code>onRemove</code> callback.
        </p>
      ),
      demo: {
        group: "tag-group",
        name: "removing",
      },
      code: "removing",
    },
    {
      title: "Color",
      description: (
        <p>
          Use the <code>color</code> prop to change the tag appearance.
        </p>
      ),
      demo: {
        group: "tag-group",
        name: "color",
      },
      code: "color",
    },
    {
      title: "Size",
      description: (
        <p>
          Adjust the <code>size</code> prop to match the desired scale.
        </p>
      ),
      demo: {
        group: "tag-group",
        name: "size",
      },
      code: "size",
    },
  ],
} satisfies DocModule;
