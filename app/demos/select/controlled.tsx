'use client'

import { Select, SelectItem } from '@ui/select'
import { useState } from 'react'
import { Key } from 'react-aria-components'

export default () => {
  const options = [
    { name: 'Open' },
    { name: 'Closed' },
    { name: 'In Progress' },
    { name: 'Resolved' },
  ]
  const [status, setStatus] = useState<Key>('Open')

  return (
    <>
      <Select
        aria-label='Status'
        items={options}
        selectedKey={status}
        onSelectionChange={setStatus}
      >
        {(item) => <SelectItem id={item.name}>{item.name}</SelectItem>}
      </Select>
      <p>
        Selected: <strong>{status}</strong>
      </p>
    </>
  )
}
