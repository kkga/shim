import { Tab, TabList, Tabs } from "@/shim-ui/tabs";

export default () =>
  ([1, 2, 3, 4] as const).map((size) => (
    <Tabs key={size}>
      <TabList size={size} variant="soft">
        <Tab id="home">Home</Tab>
        <Tab id="profile">Profile</Tab>
        <Tab id="settings">Settings</Tab>
      </TabList>
    </Tabs>
  ));
