import { Link } from "@/app/(docs)/_components/mdx-components";
import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "breadcrumbs",
        name: "main",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use the <code>size</code> prop to set the size of the breadcrumbs.
        </p>
      ),
      demo: {
        group: "breadcrumbs",
        name: "size",
      },
    },
    {
      title: "Content",
      description: (
        <>
          <p>
            Breadcrumbs follow the{" "}
            <Link href="https://react-spectrum.adobe.com/react-aria/collections.html">
              Collections API
            </Link>{" "}
            and supports both static and dynamic items.
          </p>
          <p>
            Pass an <code>items</code> prop and a render function as children to
            render dynamic collections. The render function receives each item
            from <code>items</code> and should return a React element.
          </p>
        </>
      ),
      demo: {
        group: "breadcrumbs",
        name: "content",
      },
    },
  ],
} satisfies DocModule;
