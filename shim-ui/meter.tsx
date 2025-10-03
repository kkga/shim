"use client";

import { useMemo } from "react";
import {
  Meter as RacMeter,
  type MeterProps as RacMeterProps,
} from "react-aria-components";
import { twJoin } from "tailwind-merge";
import { Description, Label } from "@/shim-ui/field";
import { cxRenderProps } from "@/shim-ui/lib/style";

interface MeterProps extends RacMeterProps {
  label?: string;
  description?: string;
  color?: string | ((value: number) => string);
}

const HIGH_PERCENTAGE_THRESHOLD = 80;

function Meter({ label, description, color, value, ...props }: MeterProps) {
  let barColor = useMemo(() => {
    if (color instanceof Function) {
      return color(value ?? 0);
    }
    return color;
  }, [color, value]);

  return (
    <RacMeter
      {...props}
      className={cxRenderProps(props.className, "flex flex-col gap-1.5")}
    >
      {/* TODO: these values dont work */}
      {({ percentage, valueText }) => {
        let textColor = "";
        if (!color) {
          if (percentage > HIGH_PERCENTAGE_THRESHOLD) {
            color = "var(--color-error-solid)";
          } else {
            color = "var(--color-neutral-solid)";
          }
        }
        return (
          <>
            <div className="flex justify-between gap-2">
              <Label>{label}</Label>
              <span className={twJoin("text-xs", textColor)}>{valueText}</span>
            </div>
            <div className="flex h-4 items-center">
              <div className="relative h-1.5 w-full overflow-hidden rounded-[2px] bg-neutral-bg ring ring-neutral-solid/20 ring-inset">
                <div
                  className="absolute top-0 left-0 h-full bg-accent-solid"
                  style={{
                    width: `${percentage}%`,
                    backgroundColor: barColor,
                  }}
                />
              </div>
            </div>
            {description && (
              <Description slot="description">{description}</Description>
            )}
          </>
        );
      }}
    </RacMeter>
  );
}

export { Meter };
export type { MeterProps };
