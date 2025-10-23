"use client";

import { ArrowSquareOutIcon, ListIcon, XIcon } from "@phosphor-icons/react";
import { useEffect, useMemo, useState } from "react";
import {
  Collection,
  Autocomplete as RacAutocomplete,
  useFilter,
} from "react-aria-components";
import { match } from "ts-pattern";
import { AutocompleteItem, AutocompleteSection } from "@/shim-ui/autocomplete";
import { Badge } from "@/shim-ui/badge";
import { Button } from "@/shim-ui/button";
import { Dialog, DialogTrigger } from "@/shim-ui/dialog";
import { Kbd } from "@/shim-ui/kbd";
import { Menu } from "@/shim-ui/menu";
import { TextField } from "@/shim-ui/text-field";
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
      } else if (e.key === "/") {
        e.preventDefault();
        setOpen(true);
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
        variant="ghost"
      >
        <ListIcon size={16} />
        <Kbd size={1}>⌘K</Kbd>
      </Button>

      <Dialog
        aria-label="Navigation"
        className="h-full max-w-md rounded-xl p-0 lg:max-h-2/3"
        isDismissable
        isOpen={isOpen}
        onOpenChange={setOpen}
      >
        <div className="flex h-full flex-col overflow-auto">
          <RacAutocomplete filter={contains}>
            <div className="flex gap-2 border-neutral-3 border-b p-2">
              <TextField
                autoFocus
                className="grow *:[input]:outline-0!"
                placeholder="Go to..."
                size={3}
                variant="soft"
              />
              <Button
                intent="neutral"
                isIconOnly
                onPress={() => setOpen(false)}
                size={3}
                variant="soft"
              >
                <XIcon size={20} />
              </Button>
            </div>
            <Menu
              className="p-2"
              items={navSections}
              onAction={() => setOpen(false)}
              renderEmptyState={() => (
                <p className="p-4 text-center font-medium text-neutral-text-subtle text-sm">
                  No results found
                </p>
              )}
              size={3}
              withPopover={false}
            >
              {({ section, items: sectionItems }) => (
                <AutocompleteSection id={section} title={section}>
                  <Collection items={sectionItems} key={section}>
                    {({ src, name, status }) => (
                      <AutocompleteItem
                        href={(() => {
                          if (status === "planned") {
                            return;
                          }
                          return src.startsWith("http") ? src : `/${src}`;
                        })()}
                        isDisabled={status === "planned"}
                        key={name}
                        target={src.startsWith("http") ? "_blank" : undefined}
                        textValue={name}
                      >
                        {() => (
                          <>
                            {name}
                            {src.startsWith("http") && (
                              <ArrowSquareOutIcon
                                className="ml-0 text-neutral-text"
                                size={16}
                              />
                            )}
                            {status && status !== "stable" && (
                              <Badge
                                className="ml-1"
                                intent={match(status)
                                  .with("planned", () => "neutral" as const)
                                  .with("beta", () => "accent" as const)
                                  .with("alpha", () => "warning" as const)
                                  .otherwise(() => "neutral" as const)}
                                size={2}
                              >
                                {status[0].toUpperCase() + status.slice(1)}
                              </Badge>
                            )}
                          </>
                        )}
                      </AutocompleteItem>
                    )}
                  </Collection>
                </AutocompleteSection>
              )}
            </Menu>
          </RacAutocomplete>

          {/* <Autocomplete
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
          </Autocomplete> */}
        </div>
      </Dialog>
    </DialogTrigger>
  );
}
