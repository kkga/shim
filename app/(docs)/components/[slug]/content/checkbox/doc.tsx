import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "checkbox",
        name: "main",
      },
    },
    {
      title: "Group",
      description: (
        <p>
          Use the <code>CheckboxGroup</code> component to group checkboxes
          together with an accessible label. The <code>label</code> prop is
          required to provide an accessible name for the group.
        </p>
      ),
      demo: {
        group: "checkbox",
        name: "group",
      },
    },
    {
      title: "States",
      description: (
        <p>
          Use the <code>isSelected</code>, <code>isDisabled</code>, and
          <code> isIndeterminate</code> props to set the state of the checkbox.
        </p>
      ),
      demo: {
        group: "checkbox",
        name: "states",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the group or
          individual checkboxes.
        </p>
      ),
      demo: {
        group: "checkbox",
        name: "size",
      },
      className: "grid grid-cols-2 place-self-start",
    },
    {
      title: "Variant",
      description: (
        <p>
          Use the <code>variant</code> prop to set the variant of the group or
          individual checkboxes.
        </p>
      ),
      demo: {
        group: "checkbox",
        name: "variant",
      },
      demoLayout: "row",
      className: "gap-4",
    },
    {
      title: "Checkbox description",
      description: (
        <p>
          Use the <code>description</code> prop to provide additional context
          for the checkbox.
        </p>
      ),
      demo: {
        group: "checkbox",
        name: "description",
      },
      code: "checkbox-description",
    },
  ],
} satisfies DocModule;
