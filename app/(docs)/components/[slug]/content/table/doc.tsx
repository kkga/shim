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
          <code>{"<TableHeader>"}</code>
          and data with <code>items</code> on <code>{"<TableBody>"}</code> to
          render dynamic tables.
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
          </p>
          <p>
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
  ],
} satisfies DocModule;
