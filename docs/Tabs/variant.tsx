import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

export default () => (
  <>
    <Tabs>
      <TabList variant="soft">
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList variant="underline">
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
  </>
);
