"use client";
import { ArrowSquareOutIcon } from "@phosphor-icons/react/dist/ssr";
import { usePathname } from "next/navigation";
import {
  Collection,
  Header,
  ListBox,
  ListBoxItem,
  ListBoxSection,
} from "react-aria-components";
import { twJoin } from "tailwind-merge";
import { tv } from "tailwind-variants";
import { match } from "ts-pattern";
import { Badge } from "@/shim-ui/badge";
import { focusStyle } from "@/shim-ui/lib/style";
import { CategoryIcon } from "./category-icon";
import type { NavItem } from "./utils";

const style = tv({
  slots: {
    header:
      "col-span-full flex items-center font-medium text-neutral-text leading-none",
    headerIcon: "flex items-center justify-center text-neutral-text",
    item: [
      focusStyle(),
      "flex items-center rounded text-neutral-text-contrast leading-none",
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

interface Props {
  navSections: {
    section: string;
    items: NavItem[];
  }[];
  className?: string;
}

export function SideNav({ navSections, className }: Props) {
  let pathname = usePathname();
  let { header: headerStyle, item: itemStyle } = style({ size: 1 });

  return (
    <nav
      className={twJoin("grow overflow-y-scroll p-4", className)}
      style={{
        maskImage: "linear-gradient(to bottom, transparent, black 16px )",
        scrollbarWidth: "thin",
      }}
    >
      <ListBox
        aria-label="Navigation"
        className="grid auto-cols-fr gap-1"
        items={navSections}
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
            className="col-span-full mb-4 grid grid-cols-subgrid gap-y-0.25"
            id={section}
          >
            {section !== "Intro" && (
              <Header className={headerStyle()} key={section}>
                <CategoryIcon name={section} />
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
                    return src.startsWith("http") ? src : `/${src}`;
                  })()}
                  id={src.startsWith("http") ? src : `/${src}`}
                  isDisabled={status === "planned"}
                  key={src.startsWith("http") ? src : `/${src}`}
                  target={src.startsWith("http") ? "_blank" : undefined}
                  textValue={name}
                >
                  {({ isHovered }) => (
                    <>
                      {section === "Intro" && <CategoryIcon name={name} />}
                      {name}
                      {status && status !== "stable" && (
                        <Badge
                          intent={match(status)
                            .with("planned", () => "neutral" as const)
                            .with("beta", () => "accent" as const)
                            .with("alpha", () => "warning" as const)
                            .otherwise(() => "neutral" as const)}
                          size={1}
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
  );
}
