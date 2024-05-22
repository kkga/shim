import { Switch } from "@ui/Switch"

export default () => (
  <>
    <Switch defaultSelected>Selected</Switch>
    <Switch isDisabled>Disabled</Switch>
    <Switch isSelected isDisabled>
      Selected and disabled
    </Switch>
  </>
)
