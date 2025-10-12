import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "color-slider",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the color slider.
        </p>
      ),
      demo: {
        group: "color-slider",
        name: "size",
      },
    },
    {
      title: "Orientation",
      description: (
        <p>
          Use the <code>orientation</code> prop to control the orientation of
          the color slider.
        </p>
      ),
      demo: {
        group: "color-slider",
        name: "orientation",
      },
    },
  ],
} satisfies DocModule;
