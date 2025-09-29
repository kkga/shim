"use client";

import { useState } from "react";
import type { Key } from "react-aria-components";
import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

export default () => {
  const [tabId, setTabId] = useState<Key>("favorites");

  return (
    <>
      <p>Selected tab: {tabId}</p>
      <Tabs onSelectionChange={setTabId} selectedKey={tabId}>
        <TabList>
          <Tab id="recent">Recent</Tab>
          <Tab id="favorites">Favorites</Tab>
        </TabList>
      </Tabs>
    </>
  );
};
