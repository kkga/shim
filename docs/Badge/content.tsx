import {
  CheckFat,
  ClockCountdown,
  GitBranch,
  Leaf,
  Lock,
} from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/components/badge";

export default () => (
  <>
    <div className="flex flex-wrap gap-2">
      <Badge intent="success">
        <CheckFat aria-label="Approved" size={12} weight="duotone" />
      </Badge>
      <Badge intent="error">
        <Lock aria-label="Locked" size={12} weight="duotone" />
      </Badge>
    </div>

    <div className="flex flex-wrap gap-2">
      <Badge intent="warning" size={3}>
        <ClockCountdown aria-label="Pending" size={16} weight="duotone" />
      </Badge>
      <Badge size={3}>
        <Leaf aria-label="New" size={16} weight="duotone" />
      </Badge>
    </div>

    <div>
      <Badge size={2}>
        <GitBranch size={14} weight="duotone" />
        kkga/dev
      </Badge>
    </div>

    <div>
      <Badge intent="success" size={2}>
        <CheckFat size={14} weight="duotone" />
        Approved
      </Badge>
    </div>
  </>
);
