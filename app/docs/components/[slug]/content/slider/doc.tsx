import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
    {
      title: "Controlled value",
      description: (
        <p>
          Control the slider value with <code>value</code> and{" "}
          <code>onChange</code> to keep it in sync with application state.
        </p>
      ),
      demo: {
        group: "slider",
        name: "controlled",
      },
      className: "items-stretch",
      code: "controlled",
    },
    {
      title: "Controlled range",
      description: (
        <p>
          Provide an array to <code>value</code> for a range slider with two
          thumbs.
        </p>
      ),
      demo: {
        group: "slider",
        name: "controlled-range",
      },
      className: "items-stretch",
      code: "controlled-range",
    },
    {
      title: "Label position",
      description: (
        <p>
          Set <code>labelPosition</code> to move the label above or beside the
          track.
        </p>
      ),
      demo: {
        group: "slider",
        name: "label-position",
      },
      className: "items-stretch",
      code: "label-position",
    },
    {
      title: "Filled track",
      description: (
        <p>
          Use the <code>isFilled</code> prop to fill the region between the
          start and the current value.
        </p>
      ),
      demo: {
        group: "slider",
        name: "filled",
      },
      className: "items-stretch",
      code: "filled",
    },
    {
      title: "Variant",
      description: (
        <p>
          Select a <code>variant</code> to align the slider with the current
          surface.
        </p>
      ),
      demo: {
        group: "slider",
        name: "variant",
      },
      className: "items-stretch",
      code: "variant",
    },
    {
      title: "Size",
      description: (
        <p>
          Adjust the <code>size</code> prop to change thumb and track
          dimensions.
        </p>
      ),
      demo: {
        group: "slider",
        name: "size",
      },
      className: "items-stretch",
      code: "size",
    },
    {
      title: "Orientation",
      description: (
        <p>
          Toggle <code>orientation</code> to render the slider horizontally or
          vertically.
        </p>
      ),
      demo: {
        group: "slider",
        name: "orientation",
      },
      className: "items-stretch",
      code: "orientation",
    },
  ],
} satisfies DocModule;
