import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "toggle-button",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Adjust the <code>size</code> prop to scale the toggle button.
        </p>
      ),
      demo: {
        group: "toggle-button",
        name: "size",
      },
      className: "flex-row items-start",
      code: "size",
    },
    {
      title: "Intent",
      description: (
        <p>
          Use the <code>intent</code> prop to apply semantic color styling.
        </p>
      ),
      demo: {
        group: "toggle-button",
        name: "intent",
      },
      className: "flex-row items-start",
      code: "intent",
    },
    {
      title: "Variant",
      description: (
        <p>
          Select the visual treatment with the <code>variant</code> prop.
        </p>
      ),
      demo: {
        group: "toggle-button",
        name: "variant",
      },
      className: "flex-row items-start",
      code: "variant",
    },
    {
      title: "States",
      description: (
        <p>
          Combine <code>isSelected</code> and <code>isDisabled</code> to
          communicate state.
        </p>
      ),
      demo: {
        group: "toggle-button",
        name: "states",
      },
      className: "flex-row items-start",
      code: "states",
    },
    {
      title: "Controlled",
      description: (
        <p>
          Control state explicitly with <code>isSelected</code> and{" "}
          <code>onChange</code>.
        </p>
      ),
      demo: {
        group: "toggle-button",
        name: "controlled",
      },
      className: "items-start",
      code: "controlled",
    },
  ],
} satisfies DocModule;
