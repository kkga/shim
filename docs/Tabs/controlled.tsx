"use client"

import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"
import { useState } from "react"
import type { Key } from "react-aria-components"

export default () => {
  const [tabId, setTabId] = useState<Key>("favorites")

  return (
    <>
      <p>Selected tab: {tabId}</p>
      <Tabs selectedKey={tabId} onSelectionChange={setTabId}>
        <TabList>
          <Tab id="recent">Recent</Tab>
          <Tab id="favorites">Favorites</Tab>
        </TabList>

        <TabPanel id="recent">Recent items.</TabPanel>
        <TabPanel id="favorites">Favorite items.</TabPanel>
      </Tabs>
    </>
  )
}
