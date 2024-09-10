import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"

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
  </>
)
