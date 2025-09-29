import { GearSixIcon, UserIcon } from "@phosphor-icons/react/dist/ssr";
import { Tab, TabList, TabPanel, Tabs } from "@/components/tabs";

export default () => (
  <Tabs orientation="vertical">
    <TabList className="w-[120px]">
      <Tab id="profile">
        <UserIcon size={16} weight="duotone" />
        Profile
      </Tab>
      <Tab id="settings">
        <GearSixIcon size={16} weight="duotone" />
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
);
