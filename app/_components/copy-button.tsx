"use client";

import { CheckIcon, CopyIcon } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { Button } from "@/components/button";

const useClipboard = () => {
  const [copiedText, setCopiedText] = useState<string | null>("");

  const copyToClipboard = (value: string) =>
    new Promise<string>((resolve, reject) => {
      try {
        if (navigator?.clipboard?.writeText) {
          navigator.clipboard
            .writeText(value)
            .then(() => {
              setCopiedText(value);
              resolve(value);
            })
            .catch((e) => {
              setCopiedText(null);
              reject(e);
            });
        } else {
          setCopiedText(null);
          throw new Error("Clipboard not supported");
        }
      } catch (e) {
        reject(e);
      }
    });

  return { copiedText, copyToClipboard };
};

const COPY_FEEDBACK_TIMEOUT_MS = 1500;

function CopyButton({
  children,
  text,
  className,
}: {
  text: string;
  children?: React.ReactNode;
  className?: string;
}) {
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
    <Button
      className={className}
      intent={justCopied ? "success" : "neutral"}
      onPress={handleCopy}
      variant="ghost"
    >
      Copy
      {iconOrChildren}
    </Button>
  );
}

export { CopyButton };
