"use client"
import { Theme } from "@lib/theme"
import { Checkbox, CheckboxGroup } from "@ui/Checkbox"
import { NumberField } from "@ui/NumberField"
import { Radio, RadioGroup } from "@ui/RadioGroup"
import { SearchField } from "@ui/SearchField"
import { Separator } from "@ui/Separator"
import { Slider } from "@ui/Slider"
import { TextArea } from "@ui/TextArea"
import { TextField } from "@ui/TextField"

export default () => (
  <div className="flex gap-4">
    <div className="flex grow-1 basis-3xs flex-col gap-3">
      <strong>Size: 1</strong>
      <Separator />
      <Theme size={1}>
        <TextField label="Label" />
        <TextArea label="Label" />
        <NumberField label="Label" />
        <Slider isFilled label="Label" />
        <SearchField label="Label" />
        <RadioGroup defaultValue="1" label="Label">
          <Radio value="1">Option</Radio>
          <Radio value="2">Option</Radio>
        </RadioGroup>
        <CheckboxGroup defaultValue={["1"]} label="Label">
          <Checkbox value="1">Option</Checkbox>
          <Checkbox value="2">Option</Checkbox>
        </CheckboxGroup>
      </Theme>
    </div>

    <Separator orientation="vertical" />

    <div className="flex grow-1 basis-2xs flex-col gap-3">
      <strong>Size: 2</strong>
      <Separator />
      <Theme size={2}>
        <TextField label="Label" />
        <TextArea label="Label" />
        <NumberField label="Label" />
        <Slider isFilled label="Label" />
        <SearchField label="Label" />
        <RadioGroup defaultValue="1" label="Label">
          <Radio value="1">Option</Radio>
          <Radio value="2">Option</Radio>
        </RadioGroup>
        <CheckboxGroup defaultValue={["1"]} label="Label">
          <Checkbox value="1">Option</Checkbox>
          <Checkbox value="2">Option</Checkbox>
        </CheckboxGroup>
      </Theme>
    </div>

    <Separator orientation="vertical" />

    <div className="flex grow-1 basis-xs flex-col gap-3">
      <strong>Size: 3</strong>
      <Separator />
      <Theme size={3}>
        <TextField label="Label" />
        <TextArea label="Label" />
        <NumberField label="Label" />
        <Slider isFilled label="Label" />
        <SearchField label="Label" />
        <RadioGroup defaultValue="1" label="Label">
          <Radio value="1">Option</Radio>
          <Radio value="2">Option</Radio>
        </RadioGroup>
        <CheckboxGroup defaultValue={["1"]} label="Label">
          <Checkbox value="1">Option</Checkbox>
          <Checkbox value="2">Option</Checkbox>
        </CheckboxGroup>
      </Theme>
    </div>
  </div>
)
