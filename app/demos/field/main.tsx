'use client'
import { cxRenderProps } from '@lib/utils'
import { Description, Input, Label, fieldStyle } from '@ui/field'

/**
 * Utility components used in other form fields.
 * Not intended to be used directly, unless you're building a custom field.
 */

export default () => (
  <div className='flex flex-col gap-1.5 self-stretch'>
    <Label htmlFor='f'>Label</Label>
    <Input id='f' className={cxRenderProps(fieldStyle, 'h-6 px-2')} />
    <Description>Field description</Description>
  </div>
)
