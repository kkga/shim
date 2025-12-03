import { Checkbox, CheckboxGroup } from "@/shim-ui/checkbox";
import { NumberField } from "@/shim-ui/number-field";
import { Radio, RadioGroup } from "@/shim-ui/radio-group";
import { SearchField } from "@/shim-ui/search-field";
import { Slider } from "@/shim-ui/slider";
import { Switch } from "@/shim-ui/switch";
import { TextField } from "@/shim-ui/text-field";
import { Well } from "@/shim-ui/well";

export default () =>
  (["classic", "soft", "outline"] as const).map((variant) => (
    <Well className="grid grid-cols-4 gap-4" key={variant}>
      <code className="col-span-full mb-2 text-xs">variant: "{variant}"</code>

      <TextField
        className="col-span-2"
        defaultValue="Hello"
        variant={variant}
      />
      <NumberField className="col-span-2" defaultValue={0} variant={variant} />
      <SearchField className="col-span-full" variant={variant} />
      <Switch className="col-span-1" defaultSelected variant={variant} />
      <Slider
        className="col-span-3"
        defaultValue={50}
        isFilled
        variant={variant}
      />
      <RadioGroup className="col-span-2" defaultValue="1" variant={variant}>
        <Radio value="1">Option 1</Radio>
        <Radio value="2">Option 2</Radio>
      </RadioGroup>
      <CheckboxGroup
        className="col-span-2"
        defaultValue={["1"]}
        variant={variant}
      >
        <Checkbox value="1">Option 1</Checkbox>
        <Checkbox value="2">Option 2</Checkbox>
      </CheckboxGroup>
    </Well>
  ));
