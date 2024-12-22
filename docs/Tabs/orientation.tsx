import { GearSix, User } from "@phosphor-icons/react/dist/ssr"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"

export default () => (
  <Tabs orientation="vertical">
    <TabList className="w-[120px]">
      <Tab id="profile">
        <User weight="duotone" size={16} />
        Profile
      </Tab>
      <Tab id="settings">
        <GearSix weight="duotone" size={16} />
        Settings
      </Tab>
    </TabList>

    <TabPanel className="px-4 py-2" id="profile">
      Your profile.
    </TabPanel>
    <TabPanel className="px-4 py-2" id="settings">
      Your settings.
    </TabPanel>
  </Tabs>
)
