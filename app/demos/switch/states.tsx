import { Switch } from '@ui/switch'

export default () => (
  <>
    <Switch defaultSelected>Selected</Switch>
    <Switch isDisabled>Disabled</Switch>
    <Switch isSelected isDisabled>Selected and disabled</Switch>
  </>
)
