'use client'
import { Slider } from '@ui/slider'
import { useState } from 'react'

export default () => {
  const [range, setRange] = useState([17, 73])

  return (
    <>
      <Slider label="Randomness range" value={range} onChange={setRange} />
      <p>Range: {range[0]}-{range[1]}</p>
    </>
  )
}
