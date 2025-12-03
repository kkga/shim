import { PushPinIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/shim-ui/button";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { ToggleButtonGroup } from "@/shim-ui/toggle-button-group";
import { Well } from "@/shim-ui/well";

export default () => (
  <>
    {(["soft", "ghost", "solid"] as const).map((variant) => (
      <Well className="gap-4" key={variant}>
        <code className="col-span-full mb-2 text-xs">variant: "{variant}"</code>

        <Button className="col-span-full" variant={variant}>
          Button
        </Button>
      </Well>
    ))}

    {(["soft", "ghost"] as const).map((variant) => (
      <Well className="grid grid-cols-[1fr_auto] gap-4" key={variant}>
        <code className="col-span-full mb-2 text-xs">
          variant: "{variant}"{" "}
          <span className="font-normal font-sans">(ToggleButton)</span>
        </code>

        <ToggleButtonGroup defaultSelectedKeys={[1]} variant={variant}>
          <ToggleButton id={1}>Left</ToggleButton>
          <ToggleButton id={2}>Center</ToggleButton>
          <ToggleButton id={3}>Right</ToggleButton>
        </ToggleButtonGroup>
        <ToggleButton variant={variant}>
          <PushPinIcon size={16} />
        </ToggleButton>
      </Well>
    ))}
  </>
);
