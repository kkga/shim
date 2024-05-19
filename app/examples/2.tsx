"use client"
import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Avatar } from "@ui/avatar"
import { Badge } from "@ui/badge"
import { Breadcrumb, Breadcrumbs } from "@ui/breadcrumbs"
import { Button } from "@ui/button"
import { ListBox, ListBoxItem, ListBoxSection } from "@ui/listbox"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@ui/menu"
import { ToggleButton } from "@ui/togglebutton"
import { Tooltip, TooltipTrigger } from "@ui/tooltip"

const items = [
  {
    id: "LIN-5737",
    title: "Update list of predefined values",
    description: "John mentioned you",
    user: "John Doe",
    status: "in-progress",
    age: "2d",
  },
  {
    id: "LIN-2341",
    title: "Add support for custom themes",
    description: "Jane mentioned you",
    user: "Amelie Welch",
    status: "in-progress",
    age: "3d",
  },
  {
    id: "LIN-4391",
    title: "Refactor the list component",
    description: "Issue assigned to you",
    user: "Amelie Welch",
    status: "in-progress",
    age: "3d",
  },
  {
    id: "LIN-5214",
    title: "Improve the performance of the app",
    description: "Issue assigned to you",
    user: "John Appleseed",
    status: "done",
    age: "4d",
  },
  {
    id: "LIN-2343",
    title: "Update list component to support drag and drop",
    description: "Issue assigned to you",
    user: "John Appleseed",
    status: "done",
    age: "4d",
  },
]

export function Example2() {
  return (
    <div className="s-box flex h-[600px] rounded-lg bg-background shadow-[var(--shadow-xs)]">
      <div className="flex min-w-[200px] flex-col gap-2.5 p-3 text-xs">
        <div className="flex items-center gap-1">
          <MenuTrigger>
            <Button
              intent="neutral"
              variant="ghost"
              aria-label="Menu"
              className="text-neutral-text-contrast"
            >
              Acme Inc.
              <Icon.CaretDown size={12} />
            </Button>
            <Menu size={1}>
              <MenuItem>
                <Icon.House size={16} weight="duotone" />
                Home
              </MenuItem>
              <MenuItem>
                <Icon.CirclesThree size={16} weight="duotone" />
                Issues
              </MenuItem>
              <MenuItem>
                <Icon.GitPullRequest size={16} weight="duotone" /> Pull requests
              </MenuItem>
              <MenuItem>
                <Icon.Kanban size={16} weight="duotone" />
                Projects
              </MenuItem>
              <MenuItem>
                <Icon.Chats size={16} weight="duotone" />
                Discussions
              </MenuItem>
              <MenuItem>
                <Icon.Desktop size={16} weight="duotone" />
                Codespaces
              </MenuItem>
              <MenuSeparator />
              <MenuSection title="Repositories">
                <MenuItem>
                  <Icon.Book size={16} weight="duotone" />
                  kkga/shim
                </MenuItem>
                <MenuItem>
                  <Icon.Book size={16} weight="duotone" />
                  kkga/ter
                </MenuItem>
                <MenuItem>
                  <Icon.Book size={16} weight="duotone" />
                  kkga/config
                </MenuItem>
              </MenuSection>
            </Menu>
          </MenuTrigger>

          <Button isSquare intent="neutral" variant="ghost" className="ml-auto">
            <Icon.MagnifyingGlass size={16} />
          </Button>

          <Button isSquare intent="neutral">
            <Icon.Plus size={16} />
          </Button>
        </div>

        <ListBox
          className="gap-2"
          defaultSelectedKeys={["inbox"]}
          selectionMode="single"
          disallowEmptySelection
        >
          <ListBoxSection>
            <ListBoxItem id="inbox" textValue="inbox">
              <Icon.Tray size={16} weight="duotone" />
              Inbox
              <Badge intent="neutral" className="ml-0" size={1}>
                15
              </Badge>
            </ListBoxItem>
            <ListBoxItem textValue="my-issues">
              <Icon.UserFocus size={16} weight="duotone" />
              My issues
            </ListBoxItem>
          </ListBoxSection>

          <ListBoxSection title="Workspace">
            <ListBoxItem textValue="views">
              <Icon.Stack size={16} weight="duotone" />
              Views
            </ListBoxItem>
            <ListBoxItem textValue="roadmaps">
              <Icon.MapTrifold size={16} weight="duotone" />
              Roadmaps
            </ListBoxItem>
            <ListBoxItem textValue="teams">
              <Icon.Users size={16} weight="duotone" />
              Teams
            </ListBoxItem>
          </ListBoxSection>

          <ListBoxSection title="Favorites">
            <ListBoxItem textValue="mobile-app">
              <Icon.DeviceMobile
                size={16}
                weight="duotone"
                className="text-accent-text"
              />
              Mobile app
            </ListBoxItem>
            <ListBoxItem textValue="roadmap">
              <Icon.RoadHorizon
                size={16}
                weight="duotone"
                className="text-success-text"
              />
              3Q24 Roadmap
            </ListBoxItem>
            <ListBoxItem textValue="design-system">
              <Icon.PencilRuler
                size={16}
                weight="duotone"
                className="text-warning-text"
              />
              Design system
            </ListBoxItem>

            <ListBoxItem textValue="projects">
              <Icon.Folder size={16} weight="duotone" />
              Projects
            </ListBoxItem>

            <ListBoxItem textValue="docs">
              <Icon.Folder size={16} weight="duotone" />
              Docs
            </ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </div>

      <div className="m-2 ml-0 flex flex-1 rounded bg-panel ring shadow-xs ring-neutral-3">
        <div className="flex w-[280px] flex-col border-r border-neutral-3">
          <div className="flex items-center gap-1 border-b border-neutral-3 p-1 px-2 text-xs">
            <span className="ml-1 font-medium text-neutral-text-contrast">
              Inbox
            </span>
            <Button
              isSquare
              intent="neutral"
              variant="ghost"
              className="ml-auto"
            >
              <Icon.FunnelSimple size={16} />
            </Button>
            <Button isSquare intent="neutral" variant="ghost">
              <Icon.SlidersHorizontal size={16} />
            </Button>
          </div>
          <div>
            <ListBox
              className="p-1"
              items={items}
              selectionMode="single"
              disallowEmptySelection
              defaultSelectedKeys={["LIN-5737"]}
            >
              {({ title, description, user, status, age, id }) => (
                <ListBoxItem className="h-auto py-1.5 px-2">
                  <div className="grid flex-1 grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-2.5 gap-y-0.5">
                    <Avatar
                      name={user}
                      src={`https://source.unsplash.com/random/100x100/?face$${id}`}
                      className="row-span-2 place-self-center"
                    />
                    <span className="col-start-2 row-start-1 truncate text-neutral-text-contrast">
                      {title}
                    </span>
                    <span className="col-start-2 row-start-2 text-neutral-text">
                      {description}
                    </span>
                    <span className="col-start-3 row-start-2 text-right text-neutral-text">
                      {age}
                    </span>
                    <div className="col-start-3 row-start-1">
                      {status === "in-progress" && (
                        <Icon.CircleHalf
                          size={16}
                          weight="duotone"
                          className="text-warning-text"
                        />
                      )}
                      {status === "done" && (
                        <Icon.CheckCircle
                          size={16}
                          weight="duotone"
                          className="text-success-text"
                        />
                      )}
                      {status === "cancelled" && (
                        <Icon.XCircle
                          size={16}
                          weight="duotone"
                          className="text-neutral-text"
                        />
                      )}
                    </div>
                  </div>
                </ListBoxItem>
              )}
            </ListBox>
          </div>
        </div>

        <div className="flex flex-1 flex-col">
          <div className="flex items-center gap-1 border-b border-neutral-3 p-1 pl-2 text-xs">
            <Breadcrumbs>
              <Breadcrumb href="#">
                <div className="flex items-center gap-1 font-medium text-neutral-text-contrast">
                  <Icon.DeviceMobile size={16} className="text-accent-text" />
                  Mobile app
                </div>
              </Breadcrumb>
              <Breadcrumb>
                <div className="flex items-center gap-1 font-medium text-neutral-text-contrast">
                  LIN-5737
                </div>
              </Breadcrumb>
            </Breadcrumbs>
            <MenuTrigger>
              <Button variant="ghost" intent="neutral" isSquare>
                <Icon.DotsThree weight="bold" size={16} />
              </Button>
              <Menu>
                <MenuItem>Copy link</MenuItem>
                <SubmenuTrigger>
                  <MenuItem>Move to</MenuItem>
                  <Menu>
                    <MenuItem>Project</MenuItem>
                    <MenuItem>Workspace</MenuItem>
                    <MenuItem>Organization</MenuItem>
                  </Menu>
                </SubmenuTrigger>
                <MenuSeparator />
                <MenuItem intent="error">Delete</MenuItem>
              </Menu>
            </MenuTrigger>

            <TooltipTrigger>
              <ToggleButton
                intent="neutral"
                isSquare
                variant="ghost"
                aria-label="Favorite"
              >
                {({ isSelected }) => (
                  <Icon.Star
                    weight={isSelected ? "fill" : "regular"}
                    size={16}
                  />
                )}
              </ToggleButton>
              <Tooltip>Favorite</Tooltip>
            </TooltipTrigger>

            <TooltipTrigger>
              <Button
                intent="neutral"
                variant="ghost"
                isSquare
                className="ml-auto"
                aria-label="Archive"
              >
                <Icon.Archive size={16} />
              </Button>
              <Tooltip>Archive</Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
              <Button
                intent="neutral"
                variant="ghost"
                isSquare
                aria-label="Snooze"
              >
                <Icon.Clock size={16} />
              </Button>
              <Tooltip>Snooze</Tooltip>
            </TooltipTrigger>
          </div>
        </div>
      </div>
    </div>
  )
}
