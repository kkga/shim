import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "table",
        name: "main",
      },
    },
    {
      title: "Content",
      description: (
        <p>
          Provide columns via the <code>columns</code> prop on{" "}
          <code>{"<TableHeader>"}</code> and data with <code>items</code> on{" "}
          <code>{"<TableBody>"}</code> to render dynamic tables.
        </p>
      ),
      demo: {
        group: "table",
        name: "content",
      },
      code: "content",
    },
    {
      title: "Sorting",
      description: (
        <>
          <p>
            Enable column sorting by providing a <code>sortDescriptor</code>{" "}
            with a <code>column</code> key and <code>direction</code> value.
            Direction accepts <code>"ascending"</code> or{" "}
            <code>"descending"</code> and the column matches the column key.
          </p>
        </>
      ),
      demo: {
        group: "table",
        name: "sorting",
      },
      code: "sorting",
    },
    {
      title: "Selection",
      description: (
        <p>
          Tables support single and multiple row selection via the{" "}
          <code>selectionMode</code> prop. Set it to <code>"single"</code> or{" "}
          <code>"multiple"</code> to enable selection. Use{" "}
          <code>selectedKeys</code> and <code>onSelectionChange</code> to
          control the selected rows.
        </p>
      ),
      demo: {
        group: "table",
        name: "selection",
      },
      code: "selection",
    },
    {
      title: "Variant",
      description: (
        <p>
          Tables support three visual variants: <code>"surface"</code>,{" "}
          <code>"ghost"</code>, and <code>"zebra"</code>. The{" "}
          <code>"surface"</code> variant has a solid background and borders,
          while the <code>"ghost"</code> variant has a transparent background
          and no borders. The <code>"zebra"</code> variant alternates row
          background colors for better readability.
        </p>
      ),
      demo: {
        group: "table",
        name: "variant",
      },
      code: "variant",
    },
    {
      title: "Size",
      description: (
        <p>
          Tables support four sizes that adjust the padding and typography of
          the table elements. The sizes are numbered from <code>1</code> to{" "}
          <code>4</code>, with <code>1</code> being the smallest and{" "}
          <code>4</code> the largest.
        </p>
      ),
      demo: {
        group: "table",
        name: "size",
      },
      code: "size",
    },
  ],
} satisfies DocModule;
