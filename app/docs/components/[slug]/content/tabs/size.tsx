import { Tab, TabList, Tabs } from "@/components/tabs";

export default () => (
  <>
    <Tabs>
      <TabList size={1}>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList size={2}>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList size={3}>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList size={4}>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
  </>
);
