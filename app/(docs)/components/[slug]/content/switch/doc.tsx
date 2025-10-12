import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "switch",
        name: "main",
      },
    },
    {
      title: "States",
      description: (
        <p>
          Set the initial value with <code>defaultSelected</code> and disable
          the control with <code>isDisabled</code>.
        </p>
      ),
      demo: {
        group: "switch",
        name: "states",
      },
      code: "states",
      className: "gap-2 items-start",
    },
    {
      title: "Variant",
      description: (
        <p>
          Choose a <code>variant</code> to match the switch with its surface.
        </p>
      ),
      demo: {
        group: "switch",
        name: "variant",
      },
      code: "variant",
      className: "gap-2 items-start",
    },
    {
      title: "Label position",
      description: (
        <p>
          Use <code>labelPosition</code> to move the label beside or above the
          switch.
        </p>
      ),
      demo: {
        group: "switch",
        name: "label-position",
      },
      className: "gap-2 items-start",
      code: "label-position",
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
        group: "switch",
        name: "size",
      },
      code: "size",
      className: "gap-2 items-start",
    },
    {
      title: "Controlled",
      description: (
        <p>
          Manage state explicitly with <code>isSelected</code> and
          <code>onChange</code>.
        </p>
      ),
      demo: {
        group: "switch",
        name: "controlled",
      },
      code: "controlled",
      className: "gap-2 items-start",
    },
  ],
} satisfies DocModule;
