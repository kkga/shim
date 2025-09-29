"use client";
import { Theme } from "@lib/theme";
import { Checkbox, CheckboxGroup } from "@/components/checkbox";
import { NumberField } from "@/components/number-field";
import { Radio, RadioGroup } from "@/components/radio-group";
import { SearchField } from "@/components/search-field";
import { Separator } from "@/components/separator";
import { Slider } from "@/components/slider";
import { TextArea } from "@/components/text-area";
import { TextField } from "@/components/text-field";

export default () => (
  <div className="flex gap-4">
    <div className="flex grow-1 flex-col gap-3">
      <strong>Label position: top</strong>
      <Separator />
      <Theme labelPosition="top">
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

    <div className="flex grow-1 flex-col gap-3">
      <strong>Label position: side</strong>
      <Separator />
      <Theme labelPosition="side">
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
