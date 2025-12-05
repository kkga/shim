import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "select",
        name: "main",
      },
      demoClassName: "max-w-3xs",
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to scale the select control.
        </p>
      ),
      demo: {
        group: "select",
        name: "size",
      },
      demoClassName: "max-w-3xs",
      code: "size",
    },
    {
      title: "Controlled selection with dynamic items",
      description: (
        <p>
          Combine <code>items</code>, <code>onChange</code>, and{" "}
          <code>value</code> props to control the selection state.
        </p>
      ),
      demo: {
        group: "select",
        name: "controlled",
      },
      demoClassName: "max-w-3xs",
      code: "controlled",
    },
    {
      title: "Multiple selection",
      description: (
        <p>
          Use the <code>selectionMode</code> prop to enable multiple selection.
        </p>
      ),
      demo: {
        group: "select",
        name: "multiple-selection",
      },
      demoClassName: "max-w-3xs",
      code: "multiple-selection",
    },
    {
      title: "Sections",
      description: (
        <p>
          Group options with <code>{"<SelectSection>"}</code> to add headings
          within the menu.
        </p>
      ),
      demo: {
        group: "select",
        name: "sections",
      },
      demoClassName: "max-w-3xs",
      code: "sections",
    },
    {
      title: "States",
      description: (
        <p>
          Use <code>isDisabled</code> to disable the field and{" "}
          <code>isInvalid</code> with
          <code>errorMessage</code> to show validation feedback.
        </p>
      ),
      demo: {
        group: "select",
        name: "states",
      },
      demoClassName: "max-w-3xs",
      code: "states",
    },
    {
      title: "Links",
      description: (
        <p>
          Provide an <code>href</code> on <code>{"<SelectItem>"}</code> to
          render navigable options and integrate with routing.
        </p>
      ),
      demo: {
        group: "select",
        name: "links",
      },
      demoClassName: "max-w-3xs",
      code: "links",
    },
  ],
} satisfies DocModule;
