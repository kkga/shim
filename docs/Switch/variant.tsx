import { Switch } from "@ui/Switch"

export default () => (
  <div className="grid grid-cols-3 items-center gap-2 self-start">
    <Switch variant="classic" />
    <Switch variant="classic" defaultSelected />
    <span>Classic</span>
    <Switch variant="soft" />
    <Switch variant="soft" defaultSelected />
    <span>Soft</span>
    <Switch variant="outline" />
    <Switch variant="outline" defaultSelected />
    <span>Outline</span>
  </div>
)
