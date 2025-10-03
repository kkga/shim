import { Link } from "@/shim-ui/link";

export default () => (
  <>
    <Link href="#intent" intent="neutral">
      Neutral
    </Link>
    <Link href="#intent" intent="accent">
      Accent
    </Link>
    <Link href="#intent" intent="warning">
      Warning
    </Link>
    <Link href="#intent" intent="success">
      Success
    </Link>
    <Link href="#intent" intent="error">
      Error
    </Link>
  </>
);
