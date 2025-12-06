import { PushPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Badge } from "@/shim-ui/badge";
import { Button } from "@/shim-ui/button";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { Well } from "@/shim-ui/well";

export default () => (
  <>
    {(["soft", "solid", "ghost"] as const).map((variant) => (
      <Well className="grid grid-cols-[1fr_auto]" key={variant}>
        <Badge className="col-span-full">{variant}</Badge>
        <Button intent="accent" variant={variant}>
          Let's go
        </Button>
        <ToggleButton aria-label="Pin" intent="accent" variant={variant}>
          <PushPinIcon size={16} />
        </ToggleButton>
      </Well>
    ))}
  </>
);
