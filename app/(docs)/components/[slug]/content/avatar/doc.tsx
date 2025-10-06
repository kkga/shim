import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the avatar.
        </p>
      ),
      demo: {
        group: "avatar",
        name: "size",
      },
      className: "flex-row",
    },
    {
      title: "Radius",
      description: (
        <p>
          Use the <code>radius</code> prop to set the border radius of the
          avatar.
        </p>
      ),
      demo: {
        group: "avatar",
        name: "radius",
      },
      className: "flex-row",
    },
  ],
} satisfies DocModule;
