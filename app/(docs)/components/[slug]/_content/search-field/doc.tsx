import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "search-field",
        name: "main",
      },
    },
    {
      title: "Controlled value",
      description: (
        <p>
          Manage the value with <code>value</code> and <code>onChange</code> to
          keep the search field in sync with application state.
        </p>
      ),
      demo: {
        group: "search-field",
        name: "controlled",
      },
      demoClassName: "items-stretch",
      code: "controlled",
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to adjust control spacing and
          typography.
        </p>
      ),
      demo: {
        group: "search-field",
        name: "size",
      },
      demoClassName: "items-stretch",
      code: "size",
    },
    {
      title: "Variant",
      description: (
        <p>
          Select a <code>variant</code> to match the search field with its
          container.
        </p>
      ),
      demo: {
        group: "search-field",
        name: "variant",
      },
      demoClassName: "items-stretch",
      code: "variant",
    },
    {
      title: "Prefix icon",
      description: (
        <p>
          Provide a <code>prefixIcon</code> to display a decorative or
          functional icon. Use <code>"filter"</code> for filter styling or pass
          a custom icon component.
        </p>
      ),
      demo: {
        group: "search-field",
        name: "prefixIcon",
      },
      demoClassName: "items-stretch",
      code: "prefix-icon",
    },
    {
      title: "States",
      description: (
        <p>
          Combine <code>isDisabled</code>, <code>isRequired</code>,
          <code>isInvalid</code>, and <code>errorMessage</code> to convey form
          state.
        </p>
      ),
      demo: {
        group: "search-field",
        name: "states",
      },
      demoClassName: "items-stretch",
      code: "states",
    },
  ],
} satisfies DocModule;
