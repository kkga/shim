import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
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
      code: "size",
    },
    {
      title: "Controlled selection with dynamic items",
      description: (
        <p>
          Combine <code>selectedKey</code>, <code>onSelectionChange</code>, and
          dynamic
          <code>items</code> to manage selection in application state.
        </p>
      ),
      demo: {
        group: "select",
        name: "controlled",
      },
      className: "items-stretch",
      code: "controlled",
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
      className: "items-stretch",
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
      className: "items-stretch",
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
      className: "items-stretch",
      code: "links",
    },
  ],
} satisfies DocModule;
