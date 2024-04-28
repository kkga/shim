'use client'
import { GearSix, User, XSquare } from '@phosphor-icons/react'
import { Tab, TabList, TabPanel, Tabs } from '@ui/tabs'
import { useState } from 'react'
import { Collection, type Key } from 'react-aria-components'

export default () => {
  const [tabId, setTabId] = useState<Key>('profile')
  const items = [
    {
      id: 'profile',
      label: 'Profile',
      icon: User,
      content: 'Your profile information.',
      disabed: false,
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: GearSix,
      content: 'Change your settings here.',
      disabled: false,
    },
    {
      id: 'disabled',
      label: 'Disabled',
      icon: XSquare,
      content: "You can't see this.",
      disabled: true,
    },
  ]

  return (
    <Tabs
      selectedKey={tabId}
      disabledKeys={items.filter(item => item.disabled).map(item => item.id)}
      onSelectionChange={setTabId}
      className='col-span-full w-full'
    >
      <TabList items={items}>
        {({ id, icon, label }) => {
          const Icon = icon
          return (
            <Tab id={id}>
              <Icon weight='duotone' size={16} />
              {label}
            </Tab>
          )
        }}
      </TabList>

      <Collection items={items}>{({ content }) => <TabPanel>{content}</TabPanel>}</Collection>
    </Tabs>
  )
}
