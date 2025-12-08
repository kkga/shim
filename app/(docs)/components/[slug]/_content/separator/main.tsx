import { Link } from "@/shim-ui/link";
import { Separator } from "@/shim-ui/separator";

export default () => (
  <div className="max-w-xs">
    <h3 className="font-semibold text-neutral-text-contrast">Shipping info</h3>
    <span>1234 Main St, Springfield, USA</span>
    <Separator />
    <div className="flex gap-1">
      <Link href="#">Edit address</Link>
      <Separator orientation="vertical" />
      <Link href="#">Edit shipping method</Link>
    </div>
  </div>
);
