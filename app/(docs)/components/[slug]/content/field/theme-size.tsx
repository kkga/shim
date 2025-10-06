"use client";
import { Checkbox, CheckboxGroup } from "@/shim-ui/checkbox";
import { Theme } from "@/shim-ui/lib/theme";
import { NumberField } from "@/shim-ui/number-field";
import { Radio, RadioGroup } from "@/shim-ui/radio-group";
import { SearchField } from "@/shim-ui/search-field";
import { Separator } from "@/shim-ui/separator";
import { Slider } from "@/shim-ui/slider";
import { TextArea } from "@/shim-ui/text-area";
import { TextField } from "@/shim-ui/text-field";

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
);
