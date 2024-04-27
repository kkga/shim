import {
  Meter as RACMeter,
  type MeterProps as RACMeterProps,
} from "react-aria-components";
import { Description, Label } from "./Field";
import { cxRenderProps } from "@lib/utils";

interface MeterProps extends RACMeterProps {
  label?: string;
  description?: string;
}

function Meter({ label, description, ...props }: MeterProps) {
  return (
    <RACMeter
      {...props}
      className={cxRenderProps(props.className, "flex flex-col gap-1")}
    >
      {({ percentage, valueText }) => (
        <>
          <div className="mb-1 flex justify-between gap-2">
            <Label>{label}</Label>
            <span
              className={`text-xs ${
                percentage >= 80 ? "text-error-text" : "text-neutral-text"
              }`}
            >
              {valueText}
            </span>
          </div>
          <div className="relative h-1.5 w-full overflow-hidden rounded-[2px] bg-neutral-bg ring ring-neutral-solid/20 ring-inset">
            <div
              className={`absolute top-0 left-0 h-full ${getColor(percentage)}`}
              style={{ width: percentage + "%" }}
            />
          </div>
          {description && <Description>{description}</Description>}
        </>
      )}
    </RACMeter>
  );
}

const getColor = (percentage: number) => {
  if (percentage < 70) {
    return "bg-success-solid";
  }

  if (percentage < 80) {
    return "bg-warning-solid";
  }

  return "bg-error-solid";
};

export { Meter };
export type { MeterProps };
