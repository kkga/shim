"use client";
import { Checkbox, CheckboxGroup } from "@/shim-ui/checkbox";
import { Theme } from "@/shim-ui/lib/theme";
import { NumberField } from "@/shim-ui/number-field";
import { Radio, RadioGroup } from "@/shim-ui/radio-group";
import { SearchField } from "@/shim-ui/search-field";
import { Slider } from "@/shim-ui/slider";
import { TextArea } from "@/shim-ui/text-area";
import { TextField } from "@/shim-ui/text-field";

export default () => (
  <>
    <div className="flex grow-1 basis-2xs flex-col gap-3 rounded-lg border border-neutral-line p-4">
      <h5>Label position: top</h5>
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

    <div className="flex grow-1 basis-2xs flex-col gap-3 rounded-lg border border-neutral-line p-4">
      <h5>Label position: side</h5>
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
  </>
);
