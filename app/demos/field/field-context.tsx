"use client"
import { Checkbox, CheckboxGroup } from "@ui/checkbox"
import { FieldContext } from "@ui/field"
import { NumberField } from "@ui/numberfield"
import { Radio, RadioGroup } from "@ui/radiogroup"
import { SearchField } from "@ui/searchfield"
import { Separator } from "@ui/separator"
import { Slider } from "@ui/slider"
import { TextArea } from "@ui/textarea"
import { TextField } from "@ui/textfield"

export default () => (
  <div className="flex gap-4">
    <div className="flex grow-1 basis-2xs flex-col gap-3">
      <FieldContext.Provider value={{}}>
        <TextField label="Label" />
        <TextArea label="Label" />
        <NumberField label="Label" />
        <Slider label="Label" />
        <SearchField label="Label" />
        <RadioGroup defaultValue="1" label="Label">
          <Radio value="1">Option</Radio>
          <Radio value="2">Option</Radio>
        </RadioGroup>
        <CheckboxGroup defaultValue={["1"]} label="Label">
          <Checkbox value="1">Option</Checkbox>
          <Checkbox value="2">Option</Checkbox>
        </CheckboxGroup>
      </FieldContext.Provider>
    </div>

    <Separator orientation="vertical" />

    <div className="flex grow-1 basis-2xs flex-col gap-3">
      <FieldContext.Provider value={{ variant: "soft", labelPosition: "side" }}>
        <TextField label="Label" />
        <TextArea label="Label" />
        <NumberField label="Label" />
        <Slider label="Label" />
        <SearchField label="Label" />
        <RadioGroup defaultValue="1" label="Label">
          <Radio value="1">Option</Radio>
          <Radio value="2">Option</Radio>
        </RadioGroup>
        <CheckboxGroup defaultValue={["1"]} label="Label">
          <Checkbox value="1">Option</Checkbox>
          <Checkbox value="2">Option</Checkbox>
        </CheckboxGroup>
      </FieldContext.Provider>
    </div>

    <Separator orientation="vertical" />

    <div className="flex grow-1 basis-2xs flex-col gap-3">
      <FieldContext.Provider value={{ variant: "outline" }}>
        <TextField label="Label" />
        <TextArea label="Label" />
        <NumberField label="Label" />
        <Slider label="Label" />
        <SearchField label="Label" />
        <RadioGroup defaultValue="1" label="Label">
          <Radio value="1">Option</Radio>
          <Radio value="2">Option</Radio>
        </RadioGroup>
        <CheckboxGroup defaultValue={["1"]} label="Label">
          <Checkbox value="1">Option</Checkbox>
          <Checkbox value="2">Option</Checkbox>
        </CheckboxGroup>
      </FieldContext.Provider>
    </div>
  </div>
)
