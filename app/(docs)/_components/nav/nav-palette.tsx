"use client";

import { ListIcon } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import { Collection, useFilter } from "react-aria-components";
import {
  Autocomplete,
  AutocompleteItem,
  AutocompleteSection,
} from "@/shim-ui/autocomplete";
import { Button } from "@/shim-ui/button";
import { Dialog, DialogTrigger } from "@/shim-ui/dialog";
import { Kbd } from "@/shim-ui/kbd";
import type { NavItem } from "./utils";

const MAC_REGEX = /mac(os|intosh)/i;

interface Props {
  navSections: {
    section: string;
    items: NavItem[];
  }[];
}

export function NavPalette({ navSections }: Props) {
  let [isOpen, setOpen] = useState(false);
  let { contains } = useFilter({ sensitivity: "base" });
  let isMac = useMemo(
    () =>
      typeof navigator === "undefined"
        ? false
        : MAC_REGEX.test(navigator.userAgent),
    []
  );

  useEffect(() => {
    type KeyDownHandler = (e: KeyboardEvent) => void;

    const handleKeyDown: KeyDownHandler = (e) => {
      if (e.key === "k" && (isMac ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev: boolean) => !prev);
      } else if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <DialogTrigger isOpen={isOpen} onOpenChange={setOpen}>
      <Button
        className="px-1.5"
        intent="neutral"
        onPress={() => setOpen(true)}
        size={2}
        variant="soft"
      >
        <ListIcon size={16} />
        <Kbd size={1}>⌘K</Kbd>
      </Button>

      <Dialog
        aria-label="Navigation"
        className="h-full max-h-2/3 max-w-lg p-0"
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <div className="flex h-full flex-col gap-4 overflow-auto p-4">
          <Autocomplete
            autoFocus
            filter={contains}
            items={navSections}
            placeholder="Search docs"
            size={3}
            variant="soft"
          >
            {({ section, items: sectionItems }) => (
              <AutocompleteSection id={section} title={section}>
                <Collection items={sectionItems} key={section}>
                  {({ src, name }) => (
                    <AutocompleteItem
                      href={src.startsWith("http") ? src : `/${src}`}
                      key={name}
                    >
                      {name}
                    </AutocompleteItem>
                  )}
                </Collection>
              </AutocompleteSection>
            )}
          </Autocomplete>
        </div>
      </Dialog>
    </DialogTrigger>
  );
}
