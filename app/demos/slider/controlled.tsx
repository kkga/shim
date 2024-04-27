'use client'
import { Slider } from '@ui/slider'
import { useState } from 'react'

export default () => {
  const [value, setValue] = useState(73)

  return (
    <>
      <Slider label="Randomness" value={value} onChange={setValue} />
      <p>Value: {value}</p>
    </>
  )
}
