"use client";

import { GearSix, User, XSquare } from "@phosphor-icons/react";
import { useState } from "react";
import { Collection, type Key } from "react-aria-components";
import { Tab, TabList, TabPanel, Tabs } from "@/shim-ui/tabs";

export default () => {
  const [tabId, setTabId] = useState<Key>("profile");
  const items = [
    {
      id: "profile",
      label: "Profile",
      icon: User,
      content: "Your profile information.",
      disabled: false,
    },
    {
      id: "settings",
      label: "Settings",
      icon: GearSix,
      content: "Change your settings here.",
      disabled: false,
    },
    {
      id: "disabled",
      label: "Disabled",
      icon: XSquare,
      content: "You can't see this.",
      disabled: true,
    },
  ];

  return (
    <Tabs
      disabledKeys={items
        .filter((item) => item.disabled)
        .map((item) => item.id)}
      onSelectionChange={setTabId}
      selectedKey={tabId}
    >
      <TabList items={items}>
        {({ id, icon: Icon, label }) => (
          <Tab aria-label={label} id={id}>
            <Icon size={16} weight="duotone" />
          </Tab>
        )}
      </TabList>

      <Collection items={items}>
        {({ content }) => <TabPanel className="py-4">{content}</TabPanel>}
      </Collection>
    </Tabs>
  );
};
