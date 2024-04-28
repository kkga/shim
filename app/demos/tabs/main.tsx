import { GearSix, User } from '@phosphor-icons/react/dist/ssr'
import { Tab, TabList, TabPanel, Tabs } from '@ui/tabs'

export default () => (
  <Tabs>
    <TabList>
      <Tab id='profile'>
        <User weight='duotone' size={16} />
        Profile
      </Tab>
      <Tab id='settings'>
        <GearSix weight='duotone' size={16} />
        Settings
      </Tab>
    </TabList>

    <TabPanel id='profile'>Your profile information.</TabPanel>
    <TabPanel id='settings'>Change your settings.</TabPanel>
  </Tabs>
)
