import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "tabs",
        name: "main",
      },
    },
    {
      title: "Variant",
      description: (
        <p>
          Set the <code>variant</code> prop on <code>{"<TabList>"}</code> to
          adjust tab styling.
        </p>
      ),
      demo: {
        group: "tabs",
        name: "variant",
      },
      code: "variant",
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop on <code>{"<TabList>"}</code> to
          control tab spacing and typography.
        </p>
      ),
      demo: {
        group: "tabs",
        name: "size",
      },
      code: "size",
    },
    {
      title: "Orientation",
      description: (
        <p>
          Switch between horizontal and vertical layouts via the{" "}
          <code>orientation</code> prop.
        </p>
      ),
      demo: {
        group: "tabs",
        name: "orientation",
      },
      code: "orientation",
    },
    {
      title: "Controlled",
      description: (
        <p>
          Manage tab selection with <code>selectedKey</code> and{" "}
          <code>onSelectionChange</code>.
        </p>
      ),
      demo: {
        group: "tabs",
        name: "controlled",
      },
      code: "controlled",
    },
    {
      title: "Dynamic content",
      description: (
        <p>
          Render tabs from dynamic data by passing an <code>items</code>{" "}
          iterable and a render function as children.
        </p>
      ),
      demo: {
        group: "tabs",
        name: "dynamic",
      },
      code: "dynamic",
    },
  ],
} satisfies DocModule;
