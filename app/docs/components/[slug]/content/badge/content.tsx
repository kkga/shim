import {
  CheckFatIcon,
  ClockCountdownIcon,
  GitBranchIcon,
  LeafIcon,
  LockIcon,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/shim-ui/badge";

export default () => (
  <>
    <div className="flex flex-wrap gap-2">
      <Badge intent="success">
        <CheckFatIcon aria-label="Approved" size={12} weight="duotone" />
      </Badge>
      <Badge intent="danger">
        <LockIcon aria-label="Locked" size={12} weight="duotone" />
      </Badge>
    </div>

    <div className="flex flex-wrap gap-2">
      <Badge intent="warning" size={3}>
        <ClockCountdownIcon aria-label="Pending" size={16} weight="duotone" />
      </Badge>
      <Badge size={3}>
        <LeafIcon aria-label="New" size={16} weight="duotone" />
      </Badge>
    </div>

    <div>
      <Badge size={2}>
        <GitBranchIcon size={14} weight="duotone" />
        kkga/dev
      </Badge>
    </div>

    <div>
      <Badge intent="success" size={2}>
        <CheckFatIcon size={14} weight="duotone" />
        Approved
      </Badge>
    </div>
  </>
);
