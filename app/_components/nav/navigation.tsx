"use client";

import {
  ArrowSquareOutIcon,
  ArticleIcon,
  CalendarIcon,
  CardsIcon,
  CheckFatIcon,
  CursorClickIcon,
  FlagBannerIcon,
  GithubLogoIcon,
  HandGrabbingIcon,
  HouseSimpleIcon,
  LightningIcon,
  PaletteIcon,
  PathIcon,
  RowsIcon,
  SwatchesIcon,
  TextboxIcon,
  WarningDiamondIcon,
  XLogoIcon,
} from "@phosphor-icons/react";
import { usePathname } from "next/navigation";
import { useMemo, useState } from "react";
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
} from "react-aria-components";
import { tv } from "tailwind-variants";
import { match } from "ts-pattern";
import { Badge } from "@/components/badge";
import { SearchField } from "@/components/search-field";
import { focusStyle } from "@/lib/style";

export interface NavItem {
  name: string;
  src: string;
  category: string;
  status?: string;
}

export function getIcon(name: string): React.ReactNode {
  return (
    match(name)
      // Category Icons
      .with("Intro", () => <HouseSimpleIcon size={16} weight="duotone" />)
      .with("Overlays", () => <CardsIcon size={16} weight="duotone" />)
      .with("Forms", () => <TextboxIcon size={16} weight="duotone" />)
      .with("Status", () => <WarningDiamondIcon size={16} weight="duotone" />)
      .with("Buttons", () => <CursorClickIcon size={16} weight="duotone" />)
      .with("Pickers", () => <CheckFatIcon size={16} weight="duotone" />)
      .with("Navigation", () => <PathIcon size={16} weight="duotone" />)
      .with("Collections", () => <RowsIcon size={16} weight="duotone" />)
      .with("Content", () => <ArticleIcon size={16} weight="duotone" />)
      .with("Date and time", () => <CalendarIcon size={16} weight="duotone" />)
      .with("Drag and drop", () => (
        <HandGrabbingIcon size={16} weight="duotone" />
      ))
      .with("Color", () => <PaletteIcon size={16} weight="duotone" />)

      // Guide Icons
      .with("Get started", () => <FlagBannerIcon size={16} weight="duotone" />)
      .with("Theming", () => <SwatchesIcon size={16} weight="duotone" />)
      .with("Changelog", () => <LightningIcon size={16} weight="duotone" />)
      .with("GitHub", () => <GithubLogoIcon size={16} weight="duotone" />)
      .with("Twitter", () => <XLogoIcon size={16} weight="duotone" />)

      // Default case
      .otherwise((): React.ReactNode => null)
  );
}

const categorizeItems = (items: NavItem[]) => {
  const categories = Array.from(
    new Set(items.map((item) => item.category))
  ).sort((a, b) => {
    if (a === "Intro") {
      return -1;
    }
    if (b === "Intro") {
      return 1;
    }
    return a.localeCompare(b);
  });

  return categories.reduce(
    (acc, category) => {
      acc[category] = items.filter((item) => item.category === category);
      return acc;
    },
    {} as Record<string, NavItem[]>
  );
};

const filterItems = (items: NavItem[], filter?: string) => {
  if (!(items && filter)) {
    return items;
  }

  const lowerFilter = filter.toLowerCase();
  return items.filter(
    ({ name, category }) =>
      name.toLowerCase().includes(lowerFilter) ||
      category.toLowerCase().includes(lowerFilter)
  );
};

const style = tv({
  slots: {
    header:
      "col-span-full flex items-center font-medium text-neutral-text leading-none",
    headerIcon: "flex items-center justify-center text-neutral-text",
    item: [
      focusStyle(),
      "flex items-center rounded font-book text-neutral-text-contrast leading-none",
    ],
  },
  variants: {
    size: {
      1: {
        header: "h-7 gap-2 px-2 text-xs leading-7",
        headerIcon: "size-7",
        item: "h-7 gap-2 px-2 text-sm leading-7",
      },
      2: {
        header: "h-8 gap-2 px-2 text-[13px] leading-8",
        headerIcon: "size-8",
        item: "h-8 gap-2 px-2 text-sm leading-8",
      },
    },
    isDisabled: {
      true: { item: "text-neutral-text-subtle" },
    },
    isHovered: {
      true: { item: "bg-neutral-bg-hover" },
    },
    isSelected: {
      true: { item: "bg-neutral-bg-active text-neutral-text-contrast" },
    },
  },
});

export function Navigation({
  items,
  onAction,
  size = 1,
}: {
  items: NavItem[];
  onAction?: () => void;
  size?: 1 | 2;
}) {
  let pathname = usePathname();
  let [filter, setFilter] = useState("");
  let { header: headerStyle, item: itemStyle } = style({ size });

  let sections = useMemo(() => {
    let filteredItems = filterItems(items, filter);
    let itemsByCategory = categorizeItems(filteredItems);
    return [
      ...Object.entries(itemsByCategory).map(([section, categoryItems]) => ({
        section,
        items: categoryItems,
      })),
    ];
  }, [filter, items]);

  return (
    <div className="relative flex h-full flex-col overflow-auto">
      <div className="px-3 py-0.5">
        <SearchField
          aria-label="Filter navigation items"
          onChange={setFilter}
          onClear={() => setFilter("")}
          placeholder="Filter"
          prefixIcon={null}
          // biome-ignore lint/style/noMagicNumbers: no need to create a constant for this
          size={size > 1 ? 3 : 2}
          value={filter}
          variant="outline"
        />
      </div>

      <nav
        className="grow overflow-y-scroll px-3 py-4"
        style={{
          maskImage: "linear-gradient(to bottom, transparent, black 16px )",
        }}
      >
        <ListBox
          aria-label="Navigation"
          className="grid auto-cols-fr gap-1"
          items={sections}
          key={`${items.length}-${filter}`}
          layout="grid"
          renderEmptyState={() => (
            <p className="p-4 text-center font-medium text-neutral-text-subtle text-sm">
              Nothing found
            </p>
          )}
          selectedKeys={[pathname]}
          selectionMode="single"
        >
          {({ section, items: sectionItems }) => (
            <ListBoxSection
              className="col-span-full mb-4 grid grid-cols-subgrid gap-y-0.5"
              id={section}
            >
              {section !== "Intro" && (
                <Header className={headerStyle()} key={section}>
                  {getIcon(section)}
                  {section}
                  <div className="h-px grow bg-neutral-3" />
                </Header>
              )}
              <Collection items={sectionItems}>
                {({ src, name, status }) => (
                  <ListBoxItem
                    className={({ isHovered, isSelected, isDisabled }) =>
                      itemStyle({
                        isHovered,
                        isSelected,
                        isDisabled,
                      })
                    }
                    href={(() => {
                      if (status === "planned") {
                        return;
                      }
                      return src.startsWith("http") ? src : `/docs/${src}`;
                    })()}
                    id={src.startsWith("http") ? src : `/docs/${src}`}
                    isDisabled={status === "planned"}
                    key={src.startsWith("http") ? src : `/docs/${src}`}
                    onAction={onAction}
                    target={src.startsWith("http") ? "_blank" : undefined}
                    textValue={name}
                  >
                    {({ isHovered }) => (
                      <>
                        {section === "Intro" && getIcon(name)}
                        {name}
                        {status && (
                          <Badge
                            className="text-current"
                            intent="neutral"
                            size={size}
                          >
                            {status[0].toUpperCase() + status.slice(1)}
                          </Badge>
                        )}

                        {isHovered && src.startsWith("http") && (
                          <ArrowSquareOutIcon
                            className="ml-auto text-neutral-text"
                            size={16}
                          />
                        )}
                      </>
                    )}
                  </ListBoxItem>
                )}
              </Collection>
            </ListBoxSection>
          )}
        </ListBox>
      </nav>
    </div>
  );
}
