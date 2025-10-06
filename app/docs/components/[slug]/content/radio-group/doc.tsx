import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
    {
      title: "Label position",
      description: (
        <p>
          Use the <code>labelPosition</code> prop to choose where the label
          appears.
        </p>
      ),
      demo: {
        group: "radio-group",
        name: "label-position",
      },
      code: "label-position",
    },
    {
      title: "Size",
      description: (
        <p>
          Adjust the <code>size</code> prop to match the radio button scale with
          nearby controls.
        </p>
      ),
      demo: {
        group: "radio-group",
        name: "size",
      },
      code: "size",
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to align radio buttons with the
          surrounding surface style.
        </p>
      ),
      demo: {
        group: "radio-group",
        name: "variant",
      },
      className: "flex-row gap-6",
      code: "variant",
    },
    {
      title: "Orientation",
      description: (
        <p>
          Switch between horizontal and vertical layouts with the{" "}
          <code>orientation</code>
          prop.
        </p>
      ),
      demo: {
        group: "radio-group",
        name: "orientation",
      },
      code: "orientation",
    },
    {
      title: "Radio descriptions",
      description: (
        <p>
          Add descriptive helper text with the <code>description</code> prop.
        </p>
      ),
      demo: {
        group: "radio-group",
        name: "radio-description",
      },
      code: "radio-description",
    },
  ],
} satisfies DocModule;
