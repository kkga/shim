import { Link } from "@/app/(docs)/_components/mdx-components";
import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      demo: {
        group: "autocomplete",
        name: "main",
      },
    },
    {
      title: "Content",
      description: (
        <>
          <p>
            Autocomplete uses the <Link href="/components/menu">Menu</Link>{" "}
            component underneath and and supports both static and dynamic items.
          </p>
          <p>
            Pass an <code>items</code> prop and a render function as children to
            render dynamic collections. The render function receives each item
            from <code>items</code> and should return a React element.
          </p>
        </>
      ),
      demo: {
        group: "autocomplete",
        name: "content",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Use <code>size</code> prop to set the size for both the search field
          and the menu.
        </p>
      ),
      demo: {
        group: "autocomplete",
        name: "size",
      },
    },
  ],
} satisfies DocModule;
