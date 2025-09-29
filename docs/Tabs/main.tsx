import { GearSix, User } from "@phosphor-icons/react/dist/ssr";
import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

export default () => (
  <Tabs>
    <TabList>
      <Tab id="profile">
        <User size={16} weight="duotone" />
        Profile
      </Tab>
      <Tab id="settings">
        <GearSix size={16} weight="duotone" />
        Settings
      </Tab>
    </TabList>

    <TabPanel className="py-4" id="profile">
      Your profile information.
    </TabPanel>
    <TabPanel className="py-4" id="settings">
      Change your settings.
    </TabPanel>
  </Tabs>
);
