import { Switch } from "@/shim-ui/switch";

export default () => (
  <div className="grid grid-cols-3 items-center gap-2 self-start">
    <Switch variant="classic" />
    <Switch defaultSelected variant="classic" />
    <span>Classic</span>
    <Switch variant="soft" />
    <Switch defaultSelected variant="soft" />
    <span>Soft</span>
    <Switch variant="outline" />
    <Switch defaultSelected variant="outline" />
    <span>Outline</span>
  </div>
);
