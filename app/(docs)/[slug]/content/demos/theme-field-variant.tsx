import { Checkbox, CheckboxGroup } from "@/shim-ui/checkbox";
import { NumberField } from "@/shim-ui/number-field";
import { Radio, RadioGroup } from "@/shim-ui/radio-group";
import { SearchField } from "@/shim-ui/search-field";
import { Slider } from "@/shim-ui/slider";
import { Switch } from "@/shim-ui/switch";
import { TextField } from "@/shim-ui/text-field";

export default () => (
  <>
    <div>
      <h5 className="text-neutral-text!">Classic</h5>
      <div className="grid grid-cols-4 gap-4">
        <TextField className="col-span-2" defaultValue="Hello" />
        <NumberField className="col-span-2" defaultValue={0} />
        <SearchField className="col-span-full" />
        <Switch className="col-span-1" defaultSelected />
        <Slider className="col-span-3" defaultValue={50} isFilled />
        <RadioGroup className="col-span-2" defaultValue="1">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </RadioGroup>
        <CheckboxGroup className="col-span-2" defaultValue={["1"]}>
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
        </CheckboxGroup>
      </div>
    </div>

    <div>
      <h5 className="text-neutral-text!">Soft</h5>
      <div className="grid grid-cols-4 gap-4">
        <TextField className="col-span-2" defaultValue="Hello" variant="soft" />
        <NumberField className="col-span-2" defaultValue={0} variant="soft" />
        <SearchField className="col-span-full" variant="soft" />
        <Switch className="col-span-1" defaultSelected variant="soft" />
        <Slider
          className="col-span-3"
          defaultValue={50}
          isFilled
          variant="soft"
        />
        <RadioGroup className="col-span-2" defaultValue="1" variant="soft">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </RadioGroup>
        <CheckboxGroup
          className="col-span-2"
          defaultValue={["1"]}
          variant="soft"
        >
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
        </CheckboxGroup>
      </div>
    </div>

    <div>
      <h5 className="text-neutral-text!">Outline</h5>
      <div className="grid grid-cols-4 gap-4">
        <TextField
          className="col-span-2"
          defaultValue="Hello"
          variant="outline"
        />
        <NumberField
          className="col-span-2"
          defaultValue={0}
          variant="outline"
        />
        <SearchField className="col-span-full" variant="outline" />
        <Switch className="col-span-1" defaultSelected variant="outline" />
        <Slider
          className="col-span-3"
          defaultValue={50}
          isFilled
          variant="outline"
        />
        <RadioGroup className="col-span-2" defaultValue="1" variant="outline">
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
        </RadioGroup>
        <CheckboxGroup
          className="col-span-2"
          defaultValue={["1"]}
          variant="outline"
        >
          <Checkbox value="1">Option 1</Checkbox>
          <Checkbox value="2">Option 2</Checkbox>
        </CheckboxGroup>
      </div>
    </div>
  </>
);
