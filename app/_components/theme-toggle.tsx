"use client";

import { MoonIcon, SunIcon } from "@phosphor-icons/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/shim-ui/button";
import type { Size } from "@/shim-ui/lib/theme";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";

function ThemeToggle({ size = 2 }: { size?: Size }) {
  let [mounted, setMounted] = useState(false);
  let { theme, systemTheme, resolvedTheme, setTheme } = useTheme();

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
    return <div aria-hidden="true" className="size-7" />;
  }

  const handleThemeChange = () => {
    const next = theme
      ? themes[(themes.indexOf(theme) + 1) % themes.length]
      : "system";
    setTheme(next);
  };

  return (
    <TooltipTrigger>
      <Button
        aria-label="Toggle theme"
        isIconOnly
        onClick={handleThemeChange}
        size={size}
        variant="ghost"
      >
        {resolvedTheme === "dark" ? (
          <MoonIcon size={16} />
        ) : (
          <SunIcon size={16} />
        )}
      </Button>
      <Tooltip>Toggle theme</Tooltip>
    </TooltipTrigger>
  );
}

export { ThemeToggle };
