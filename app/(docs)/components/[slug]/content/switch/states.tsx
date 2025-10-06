import { Switch } from "@/shim-ui/switch";

export default () => (
  <>
    <Switch defaultSelected>Selected</Switch>
    <Switch isDisabled>Disabled</Switch>
    <Switch isDisabled isSelected>
      Selected and disabled
    </Switch>
  </>
);
