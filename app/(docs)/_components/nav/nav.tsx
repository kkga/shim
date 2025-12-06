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
import { tv } from "tailwind-variants";
import { match } from "ts-pattern";
import { Badge } from "@/shim-ui/badge";
import { Separator } from "@/shim-ui/separator";
import { CategoryIcon } from "./category-icon";
import { NavFooter } from "./nav-footer";
import { NavHeader } from "./nav-header";
import type { NavItem } from "./utils";

const style = tv({
  slots: {
    header:
      "col-span-full flex h-7 items-center gap-1.5 px-2 font-medium text-neutral-text-contrast text-sm leading-none",
    item: "focus-ring flex h-7 items-center gap-2 rounded px-2 text-neutral-text text-sm leading-none",
  },
  variants: {
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
}

function StatusBadge({ status }: { status: string }) {
  if (typeof status !== "string" || status === "stable") {
    return null;
  }

  return (
    <Badge
      intent={match(status)
        .with("planned", () => "neutral" as const)
        .with("beta", () => "accent" as const)
        .with("alpha", () => "warning" as const)
        .otherwise(() => "neutral" as const)}
      size={1}
    >
      {status.length > 0 ? `${status[0].toUpperCase()}${status.slice(1)}` : ""}
    </Badge>
  );
}

export function Nav({ navSections }: Props) {
  let pathname = usePathname();
  let { header: headerStyle, item: itemStyle } = style();

  return (
    <div className="background-gradient sticky top-0 z-30 flex flex-col border-neutral-3 border-b bg-pure lg:h-svh lg:border-b-0">
      <NavHeader navSections={navSections} />

      <Separator className="m-0 mx-3 hidden w-auto self-stretch bg-neutral-3 lg:block" />

      <nav
        className="hidden grow overflow-y-scroll p-3 lg:block"
        style={{
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 12px, black calc(100% - 12px), transparent 100%)",
          maskImage:
            "linear-gradient(to bottom, transparent, black 12px, black calc(100% - 12px), transparent 100%)",
          scrollbarWidth: "thin",
        }}
      >
        <ListBox
          aria-label="Navigation"
          items={navSections}
          renderEmptyState={() => (
            <p className="p-2 text-center font-medium text-neutral-text-subtle text-sm">
              Nothing found
            </p>
          )}
          selectedKeys={[pathname]}
          selectionMode="single"
        >
          {({ section, items: sectionItems }) => (
            <ListBoxSection
              className="not-last:mb-4 flex flex-col gap-y-px"
              id={section}
            >
              {section !== "Overview" && (
                <Header className={headerStyle()} key={section}>
                  {/* <CategoryIcon name={section} /> */}
                  {section}
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
                    {...(src.startsWith("http")
                      ? { target: "_blank", rel: "noopener" }
                      : {})}
                    textValue={name}
                  >
                    {({ isHovered }) => (
                      <>
                        {section === "Overview" && <CategoryIcon name={name} />}
                        {name}
                        <StatusBadge status={status} />

                        {isHovered
                          ? src.startsWith("http") && (
                              <ArrowSquareOutIcon
                                className="ml-auto text-neutral-text"
                                size={16}
                              />
                            )
                          : null}
                      </>
                    )}
                  </ListBoxItem>
                )}
              </Collection>
            </ListBoxSection>
          )}
        </ListBox>
      </nav>

      <Separator className="m-0 mx-3 hidden w-auto self-stretch bg-neutral-3 lg:block" />
      <NavFooter />
    </div>
  );
}
