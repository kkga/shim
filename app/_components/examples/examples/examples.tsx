"use client";

import { Collection } from "react-aria-components";
import { ThemeToggle } from "@/app/_components/theme-toggle";
import { Tab, TabList, TabPanel, Tabs } from "@/shim-ui/tabs";
import { ExampleIssueTracker } from "./issue-tracker";
import { ExampleRepo } from "./repo";

let items = [
  {
    id: "issue-tracker",
    name: "Demo: Issue tracker",
    description:
      "Uses a variety of components to create a GitHub repository page layout. Click around to see the components in action. Includes Menu, Tabs, SearchField, ComboBox, Button, Table, Select and more.",
    component: ExampleIssueTracker,
  },
  {
    id: "repository",
    name: "Demo: Repository",
    description:
      "A repository page layout. Includes Menu, Tabs, SearchField, ComboBox, Button, Table, Select and more.",
    component: ExampleRepo,
  },
];

export function Examples() {
  return (
    <Tabs>
      <div className="mb-4 flex items-center justify-between">
        <TabList items={items} size={1} variant="soft">
          {({ name }) => <Tab aria-label={name}>{name}</Tab>}
        </TabList>
        <div className="sticky right-4">
          <ThemeToggle />
        </div>
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
