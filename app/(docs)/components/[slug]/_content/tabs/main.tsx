import {
  GearSixIcon,
  HouseIcon,
  UserIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Tab, TabList, TabPanel, Tabs } from "@/shim-ui/tabs";

export default () => (
  <Tabs>
    <TabList>
      <Tab id="home">
        <HouseIcon size={16} weight="duotone" />
        Home
      </Tab>
      <Tab id="profile">
        <UserIcon size={16} weight="duotone" />
        Profile
      </Tab>
      <Tab id="settings">
        <GearSixIcon size={16} weight="duotone" />
        Settings
      </Tab>
    </TabList>

    <TabPanel className="py-4" id="home">
      Welcome to the home tab!
    </TabPanel>
    <TabPanel className="py-4" id="profile">
      Your profile information.
    </TabPanel>
    <TabPanel className="py-4" id="settings">
      Change your settings.
    </TabPanel>
  </Tabs>
);
