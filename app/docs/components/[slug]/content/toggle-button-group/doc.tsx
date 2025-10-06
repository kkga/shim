import type { DocModule } from "@/app/docs/components/schema";

export default {
  sections: [
    {
      title: "Selection mode",
      description: (
        <p>
          Configure how many buttons may be active by setting the
          <code>selectionMode</code> prop.
        </p>
      ),
      demo: {
        group: "toggle-button-group",
        name: "selection-mode",
      },
      className: "items-start",
      code: "selection-mode",
    },
    {
      title: "States",
      description: (
        <p>
          Use <code>isDisabled</code> on the group or individual buttons to
          control interactivity.
        </p>
      ),
      demo: {
        group: "toggle-button-group",
        name: "states",
      },
      className: "items-start",
      code: "states",
    },
    {
      title: "Size",
      description: (
        <p>
          Set the <code>size</code> prop to scale each button in the group.
        </p>
      ),
      demo: {
        group: "toggle-button-group",
        name: "size",
      },
      className: "self-start",
      code: "size",
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to align the group with its surface.
        </p>
      ),
      demo: {
        group: "toggle-button-group",
        name: "variant",
      },
      className: "self-start",
      code: "variant",
    },
  ],
} satisfies DocModule;
