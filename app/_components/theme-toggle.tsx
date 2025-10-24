"use client";

import { CircleHalfIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "react-aria-components";
import { tv } from "tailwind-variants";
import { focusStyle } from "@/shim-ui/lib/style";

const style = tv({
  slots: {
    container: "group flex w-7 items-center text-neutral-text outline-none",
    track: [
      focusStyle(),
      "flex h-3 w-full shrink-0 items-center justify-start rounded-full outline-offset-1",
    ],
    handle:
      "flex size-4.5 items-center justify-center rounded-full bg-clip-content transition-transform will-change-transform",
  },
  variants: {
    size: {
      1: {
        container: "w-7",
        track: "h-3",
        handle: "size-4.5",
      },
      2: {
        container: "w-9",
        track: "h-4",
        handle: "size-5",
      },
    },
    isPressed: { true: "" },
    isSelected: { true: "" },
    dark: {
      true: {
        track: "bg-neutral-bg",
        handle: "-translate-x-0.75 bg-neutral-solid",
      },
    },
    light: {
      true: {
        track: "bg-neutral-bg",
        handle: "translate-x-3.25 bg-white shadow-xs",
      },
    },
  },
  compoundVariants: [
    {
      isPressed: true,
      class: { track: "bg-neutral-bg-active" },
    },
    {
      size: 2,
      dark: true,
      class: { handle: "-translate-x-0.5" },
    },
    {
      size: 2,
      light: true,
      class: { handle: "translate-x-4.5" },
    },
  ],
});

function ThemeToggle({ size }: { size?: 1 | 2 } = { size: 1 }) {
  let [mounted, setMounted] = useState(false);
  let { theme, systemTheme, resolvedTheme, setTheme } = useTheme();
  let { container, track, handle } = style({ size });

  let themes: string[];
  if (systemTheme === "dark") {
    themes = ["system", "light"];
  } else {
    themes = ["system", "dark"];
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleThemeChange = () => {
    const next = theme
      ? themes[(themes.indexOf(theme) + 1) % themes.length]
      : "system";
    setTheme(next);
  };

  return (
    <Switch
      aria-label="Toggle theme"
      className={container()}
      isSelected={resolvedTheme === "dark"}
      onChange={handleThemeChange}
    >
      {({ isPressed }) => (
        <div
          className={track({
            dark: resolvedTheme === "dark",
            light: resolvedTheme === "light",
            isPressed,
          })}
        >
          <div
            className={handle({
              dark: resolvedTheme === "dark",
              light: resolvedTheme === "light",
            })}
          >
            <CircleHalfIcon size={16} weight="fill" />
          </div>
        </div>
      )}
    </Switch>
  );
}

export { ThemeToggle };
