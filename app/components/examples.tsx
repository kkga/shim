"use client"

import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"
import { Collection } from "react-aria-components"
import { ExampleIssueTracker, ExampleRepo } from "../../examples"
import { H4, P } from "./mdx/mdx-components"
import { ThemeButton } from "./sidebar/theme-button"

import { AnimatePresence, motion } from "framer-motion"

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
]

export function Examples() {
  return (
    <Tabs>
      <div className="mb-2 flex justify-between">
        <TabList variant="soft" items={items}>
          {({ name }) => <Tab aria-label={name}>{name}</Tab>}
        </TabList>
        <ThemeButton />
      </div>

      <AnimatePresence>
        <Collection items={items}>
          {({ component: Component, name, description }) => (
            <TabPanel>
              <motion.div
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Component />
                <H4>Example: {name}</H4>
                <P className="text-sm">{description}</P>
              </motion.div>
            </TabPanel>
          )}
        </Collection>
      </AnimatePresence>
    </Tabs>
  )
}
