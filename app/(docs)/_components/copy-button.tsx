"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react";
import { type ReactNode, useEffect, useState } from "react";
import { useClipboard } from "@/app/_lib/use-clipboard";
import { Button, type ButtonProps } from "@/shim-ui/button";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";

const COPY_FEEDBACK_TIMEOUT_MS = 1500;

function CopyButton({
  children,
  text,
  className,
  size,
}: { text: string; children?: ReactNode } & Omit<ButtonProps, "children">) {
  const { copyToClipboard } = useClipboard();
  const [justCopied, setJustCopied] = useState(false);

  const handleCopy = () => {
    copyToClipboard(text)
      .then(() => {
        setJustCopied(true);
      })
      .catch((error) => {
        throw new Error(
          `Failed to copy! ${error instanceof Error ? error.message : String(error)}`
        );
      });
  };

  useEffect(() => {
    if (justCopied) {
      const timeout = setTimeout(() => {
        setJustCopied(false);
      }, COPY_FEEDBACK_TIMEOUT_MS);
      return () => {
        clearTimeout(timeout);
      };
    }
  }, [justCopied]);

  let iconOrChildren: React.ReactNode;
  if (justCopied) {
    iconOrChildren = <CheckIcon size={16} weight="bold" />;
  } else if (children) {
    iconOrChildren = children;
  } else {
    iconOrChildren = <CopyIcon size={16} weight="duotone" />;
  }

  return (
    <TooltipTrigger>
      <Button
        aria-label="Copy to clipboard"
        className={className}
        intent={justCopied ? "success" : "neutral"}
        isIconOnly
        onPress={handleCopy}
        size={size}
        variant="ghost"
      >
        {iconOrChildren}
      </Button>
      <Tooltip>Copy</Tooltip>
    </TooltipTrigger>
  );
}

export { CopyButton };
