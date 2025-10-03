"use client";

import { Collection } from "react-aria-components";
import { ExampleIssueTracker } from "@/app/_components/examples/issue-tracker";
import { ExampleRepo } from "@/app/_components/examples/repo";
import { Tab, TabList, TabPanel, Tabs } from "@/shim-ui/tabs";
import { ThemeToggle } from "../theme-toggle";

let items = [
  {
    id: "issue-tracker",
    name: "Issue tracker",
    description:
      "Uses a variety of components to create a GitHub repository page layout. Click around to see the components in action. Includes Menu, Tabs, SearchField, ComboBox, Button, Table, Select and more.",
    component: ExampleIssueTracker,
  },
  {
    id: "repository",
    name: "Repository",
    description:
      "A repository page layout. Includes Menu, Tabs, SearchField, ComboBox, Button, Table, Select and more.",
    component: ExampleRepo,
  },
];

export function Examples() {
  return (
    <Tabs>
      <div className="mb-2 flex items-center justify-between">
        <TabList items={items} variant="soft">
          {({ name }) => <Tab aria-label={name}>{name}</Tab>}
        </TabList>
        <ThemeToggle />
      </div>

      <Collection items={items}>
        {({ component: Component }) => (
          <TabPanel>
            <Component />
          </TabPanel>
        )}
      </Collection>
    </Tabs>
  );
}
