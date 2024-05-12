import { Switch } from "@ui/switch"

export default () => (
  <div className="grid grid-cols-2 gap-2 self-start">
    <Switch variant="classic" />
    <Switch variant="classic" defaultSelected />
    <Switch variant="soft" />
    <Switch variant="soft" defaultSelected />
    <Switch variant="outline" />
    <Switch variant="outline" defaultSelected />
  </div>
)
