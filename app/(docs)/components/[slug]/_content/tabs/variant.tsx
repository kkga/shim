import { Tab, TabList, Tabs } from "@/shim-ui/tabs";

export default () => (
  <>
    <Tabs>
      <TabList variant="soft">
        <Tab id="home">Home</Tab>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
    <Tabs>
      <TabList variant="underline">
        <Tab id="home">Home</Tab>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
  </>
);
