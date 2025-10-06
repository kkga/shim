import type { DocModule } from "@/app/(docs)/components/schema";

export default {
  sections: [
    {
      title: "Content",
      description: (
        <>
          <p>
            Menu follows the{" "}
            <a href="https://react-spectrum.adobe.com/react-aria/collections.html">
              Collections API
            </a>{" "}
            and supports both static and dynamic items.
          </p>
          <p>
            Pass an <code>items</code> prop and a render function as children to
            render dynamic collections. The render function receives each item
            from
            <code>items</code> and should return a React element.
          </p>
        </>
      ),
      demo: {
        group: "menu",
        name: "content",
      },
      className: "items-start",
    },
    {
      title: "Selection",
      description: (
        <>
          <p>
            Menu supports single, multiple, and uncontrolled selection modes.
          </p>
          <p>
            Enable selection by setting the <code>selectionMode</code> prop. The
            default is <code>none</code>.
          </p>
        </>
      ),
      demo: {
        group: "menu",
        name: "selection",
      },
    },
    {
      title: "Size",
      description: (
        <p>
          Set the overall menu dimensions with the <code>size</code> prop.
        </p>
      ),
      demo: {
        group: "menu",
        name: "size",
      },
      className: "flex-row",
    },
    {
      title: "Sections",
      description: (
        <p>
          Group items with <code>{"<MenuSection>"}</code> and provide a heading
          via the
          <code>title</code> prop.
        </p>
      ),
      demo: {
        group: "menu",
        name: "sections",
      },
      className: "items-start",
    },
    {
      title: "Submenu",
      description: (
        <p>
          Create nested menus with <code>{"<SubmenuTrigger>"}</code>. Pass a
          trigger element followed by a submenu rendered with{" "}
          <code>{"<Menu>"}</code>.
        </p>
      ),
      demo: {
        group: "menu",
        name: "submenu",
      },
      className: "items-start",
    },
  ],
} satisfies DocModule;
