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
    <Badge intent="success" size={3}>
      <CheckFatIcon aria-label="Approved" size={16} weight="duotone" />
    </Badge>
    <Badge intent="danger" size={3}>
      <LockIcon aria-label="Locked" size={16} weight="duotone" />
    </Badge>

    <Badge intent="warning" size={3}>
      <ClockCountdownIcon aria-label="Pending" size={16} weight="duotone" />
    </Badge>
    <Badge size={3}>
      <LeafIcon aria-label="New" size={16} weight="duotone" />
    </Badge>

    <Badge size={3}>
      <GitBranchIcon size={16} weight="duotone" />
      kkga/dev
    </Badge>

    <Badge intent="success" size={3}>
      <CheckFatIcon size={16} weight="duotone" />
      Approved
    </Badge>
  </>
);
