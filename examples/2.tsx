"use client"

import {
  Archive,
  CaretDown,
  CheckCircle,
  Checks,
  CircleHalf,
  Clock,
  DeviceMobile,
  DotsThree,
  Folder,
  FunnelSimple,
  MagnifyingGlass,
  MapTrifold,
  PencilRuler,
  Plus,
  RoadHorizon,
  SignOut,
  SlidersHorizontal,
  Stack,
  Star,
  Tray,
  UserFocus,
  Users,
  UsersThree,
  XCircle,
  XSquare,
} from "@phosphor-icons/react"
import { Avatar } from "@ui/Avatar"
import { Badge } from "@ui/Badge"
import { Breadcrumb, Breadcrumbs } from "@ui/Breadcrumbs"
import { Button } from "@ui/Button"
import { DataList, DataListItem } from "@ui/DataList"
import { Kbd } from "@ui/Kbd"
import { Link } from "@ui/Link"
import { ListBox, ListBoxItem, ListBoxSection } from "@ui/ListBox"
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@ui/Menu"
import { Popover, PopoverTrigger } from "@ui/Popover"
import { Select, SelectItem } from "@ui/Select"
import { Separator } from "@ui/Separator"
import { Switch } from "@ui/Switch"
import { Tag, TagGroup } from "@ui/TagGroup"
import { TextArea } from "@ui/TextArea"
import { ToggleButton } from "@ui/ToggleButton"
import { Tooltip, TooltipTrigger } from "@ui/Tooltip"
import { useMemo, useState } from "react"
import { Selection } from "react-aria-components"

const items = [
  {
    id: "LIN-5737",
    title: "Update list of predefined values",
    description: "Marked as In-progress",
    text: "The list of predefined values needs to be updated to include the new values that were added to the system.",
    user: "John Doe",
    status: "in-progress",
    age: "2d",
  },
  {
    id: "LIN-2341",
    title: "Add support for custom themes",
    description: "Marked as In-progress",
    text: "The app should support custom themes to allow users to customize the look and feel of the app.",
    user: "Amelie Welch",
    status: "in-progress",
    age: "3d",
  },
  {
    id: "LIN-4391",
    title: "Refactor the list component",
    description: "Assigned to you",
    text: "The list component needs to be refactored to improve performance and make it easier to maintain.",
    user: "Amelie Welch",
    status: "in-progress",
    age: "3d",
  },
  {
    id: "LIN-5214",
    title: "Improve the performance of the app",
    description: "Marked as Done",
    text: "The app is running slow and needs to be optimized to improve performance.",
    user: "John Appleseed",
    status: "done",
    age: "4d",
  },
  {
    id: "LIN-2343",
    title: "Update list component to support drag and drop",
    description: "Marked as Done",
    text: "The list component needs to be updated to support drag and drop functionality.",
    user: "John Appleseed",
    status: "done",
    age: "4d",
  },
  {
    id: "LIN-2344",
    title: "Improve initial loading performance",
    description: "Marked as Done",
    text: "The app takes too long to load initially and needs to be optimized to improve performance.",
    user: "Mark Johnson",
    status: "done",
    age: "5d",
  },
  {
    id: "LIN-2345",
    title: "Add support for dark mode",
    description: "Marked as Done",
    text: "The app should support dark mode to reduce eye strain and improve user experience.",
    user: "Dean Smith",
    status: "done",
    age: "6d",
  },
  {
    id: "LIN-2346",
    title: "Add support for light mode",
    description: "Marked as Done",
    text: "The app should support light mode to give users more options for customizing the app.",
    user: "Dean Smith",
    status: "done",
    age: "7d",
  },
  {
    id: "LIN-2347",
    title: "Add support for custom themes",
    description: "Marked as Done",
    text: "The app should support custom themes to allow users to customize the look and feel of the app",
    user: "Dean Smith",
    status: "done",
    age: "8d",
  },
  {
    id: "LIN-2348",
    title: "Implement localization",
    description: "Marked as In-progress",
    text: "The app should support multiple languages to cater to a global audience.",
    user: "Jane Doe",
    status: "in-progress",
    age: "1d",
  },
  {
    id: "LIN-2349",
    title: "Add a search feature",
    description: "Marked as Done",
    text: "A search feature should be added to help users find specific items quickly.",
    user: "John Appleseed",
    status: "done",
    age: "2d",
  },
  {
    id: "LIN-2350",
    title: "Improve navigation",
    description: "Assigned to you",
    text: "The navigation of the app should be improved for better user experience.",
    user: "Amelie Welch",
    status: "in-progress",
    age: "3d",
  },
  {
    id: "LIN-2351",
    title: "Fix bugs in the login feature",
    description: "Marked as Done",
    text: "There are several bugs in the login feature that need to be fixed.",
    user: "Mark Johnson",
    status: "done",
    age: "4d",
  },
  {
    id: "LIN-2352",
    title: "Update the app's design",
    description: "Marked as In-progress",
    text: "The design of the app needs to be updated to make it more modern and appealing.",
    user: "Dean Smith",
    status: "in-progress",
    age: "5d",
  },
  {
    id: "LIN-2353",
    title: "Add a feedback feature",
    description: "Marked as Done",
    text: "A feedback feature should be added to collect user feedback and improve the app.",
    user: "Jane Doe",
    status: "done",
    age: "6d",
  },
]

export function Example2() {
  let [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["LIN-5737"]),
  )
  let breadcrumbs = useMemo(
    () => [
      {
        id: "mobile-app",
        text: "Mobile app",
        href: "#",
        icon: <DeviceMobile size={16} className="text-accent-text" />,
      },
      {
        id: [...selectedKeys][0],
        text: [...selectedKeys][0],
        href: null,
        icon: null,
      },
    ],
    [selectedKeys],
  )
  let selectedItem = useMemo(
    () => items.find((item) => item.id === [...selectedKeys][0]),
    [selectedKeys],
  )

  return (
    <div className="s-box bg-background flex h-[600px] rounded-lg shadow-[var(--shadow-xs)]">
      <div className="flex min-w-[180px] flex-col gap-2.5 p-3 text-xs">
        <div className="flex items-center gap-1">
          <MenuTrigger>
            <Button
              intent="neutral"
              variant="ghost"
              aria-label="Menu"
              className="text-neutral-text-contrast"
            >
              Acme Inc.
              <CaretDown size={12} />
            </Button>
            <Menu className="min-w-[180px]">
              <MenuItem>
                <SlidersHorizontal size={16} weight="duotone" />
                Preferences
                <Kbd variant="plain" className="ml-auto">
                  G then S
                </Kbd>
              </MenuItem>
              <MenuSeparator />
              <SubmenuTrigger>
                <MenuItem>
                  <UsersThree size={16} weight="duotone" />
                  Workspace
                </MenuItem>
                <Menu>
                  <MenuItem>Personal</MenuItem>
                  <MenuItem>Work</MenuItem>
                  <MenuItem>Organization</MenuItem>
                </Menu>
              </SubmenuTrigger>
              <MenuItem>
                <SignOut size={16} weight="duotone" />
                Log out
                <Kbd variant="plain" className="ml-auto">
                  ⎇⇧Q
                </Kbd>
              </MenuItem>
            </Menu>
          </MenuTrigger>

          <Button isSquare intent="neutral" variant="ghost" className="ml-auto">
            <MagnifyingGlass size={16} />
          </Button>

          <Button isSquare intent="neutral">
            <Plus size={16} />
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
              <Tray size={16} weight="duotone" />
              Inbox
              <Badge intent="neutral" className="ml-0" size={1}>
                15
              </Badge>
            </ListBoxItem>
            <ListBoxItem textValue="my-issues">
              <UserFocus size={16} weight="duotone" />
              My issues
            </ListBoxItem>
          </ListBoxSection>

          <ListBoxSection title="Workspace">
            <ListBoxItem textValue="views">
              <Stack size={16} weight="duotone" />
              Views
            </ListBoxItem>
            <ListBoxItem textValue="roadmaps">
              <MapTrifold size={16} weight="duotone" />
              Roadmaps
            </ListBoxItem>
            <ListBoxItem textValue="teams">
              <Users size={16} weight="duotone" />
              Teams
            </ListBoxItem>
          </ListBoxSection>

          <ListBoxSection title="Favorites">
            <ListBoxItem textValue="mobile-app">
              <DeviceMobile
                size={16}
                weight="duotone"
                className="text-accent-text"
              />
              Mobile app
            </ListBoxItem>
            <ListBoxItem textValue="roadmap">
              <RoadHorizon
                size={16}
                weight="duotone"
                className="text-success-text"
              />
              3Q24 Roadmap
            </ListBoxItem>
            <ListBoxItem textValue="design-system">
              <PencilRuler
                size={16}
                weight="duotone"
                className="text-warning-text"
              />
              Design system
            </ListBoxItem>

            <ListBoxItem textValue="projects">
              <Folder size={16} weight="duotone" />
              Projects
            </ListBoxItem>

            <ListBoxItem textValue="docs">
              <Folder size={16} weight="duotone" />
              Docs
            </ListBoxItem>
          </ListBoxSection>
        </ListBox>
      </div>

      <div className="bg-panel shadow-xs ring-neutral-3 m-2 ml-0 flex flex-1 rounded ring">
        <div className="border-neutral-3 flex w-[280px] flex-col border-r">
          <div className="border-neutral-3 flex items-center gap-1.5 border-b p-1 px-2 text-xs">
            <span className="text-neutral-text-contrast ml-1 font-medium">
              Inbox
            </span>
            <MenuTrigger>
              <Button
                isSquare
                intent="neutral"
                variant="ghost"
                aria-label="Inbox menu"
              >
                <DotsThree weight="bold" size={16} />
              </Button>
              <Menu>
                <MenuItem>
                  <Checks size={16} weight="duotone" />
                  Mark all as read
                  <Kbd variant="plain" className="ml-auto">
                    ⎇U
                  </Kbd>
                </MenuItem>
                <MenuItem>
                  <XSquare size={16} weight="duotone" />
                  Empty inbox
                  <Kbd variant="plain" className="ml-auto">
                    ⎇⇧D
                  </Kbd>
                </MenuItem>
              </Menu>
            </MenuTrigger>

            <MenuTrigger>
              <Button
                isSquare
                intent="neutral"
                variant="ghost"
                className="ml-auto"
              >
                <FunnelSimple size={16} />
              </Button>
              <Menu selectionMode="multiple" placement="bottom end">
                <MenuItem>Assignments</MenuItem>
                <MenuItem>Mentions</MenuItem>
                <MenuItem>Status changes</MenuItem>
                <MenuItem>Comments</MenuItem>
              </Menu>
            </MenuTrigger>
            <PopoverTrigger>
              <Button isSquare intent="neutral" variant="ghost">
                <SlidersHorizontal size={16} />
              </Button>
              <Popover placement="bottom end">
                <div className="flex w-[220px] flex-col gap-2 p-3">
                  <Select
                    labelPosition="side"
                    label="Ordering"
                    defaultSelectedKey={"newest"}
                  >
                    <SelectItem id="newest">Newest</SelectItem>
                    <SelectItem id="oldest">Oldest</SelectItem>
                    <SelectItem id="priorty">Priority</SelectItem>
                  </Select>
                  <Separator />
                  <div className="flex flex-col">
                    <Switch labelPosition="start" defaultSelected>
                      Show snoozed
                    </Switch>
                    <Switch labelPosition="start">Show read</Switch>
                  </div>
                  <Separator />
                  <TagGroup
                    label="Display properties"
                    selectionMode="multiple"
                    defaultSelectedKeys={"id"}
                  >
                    <Tag>ID</Tag>
                    <Tag>Assignee</Tag>
                    <Tag>Priority</Tag>
                  </TagGroup>
                </div>
              </Popover>
            </PopoverTrigger>
          </div>
          <div className="overflow-auto">
            <ListBox
              aria-label="Inbox"
              className="p-1"
              items={items}
              selectionMode="single"
              disallowEmptySelection
              selectedKeys={selectedKeys}
              onSelectionChange={setSelectedKeys}
            >
              {({ title, description, user, status, age, id }) => (
                <ListBoxItem key={id} className="h-auto px-2 py-1.5">
                  <div className="grid flex-1 grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-2.5 gap-y-0.5">
                    <Avatar
                      name={user}
                      src={`https://source.unsplash.com/random/100x100/?face$${id}`}
                      className="row-span-2 place-self-center"
                    />
                    <span className="text-neutral-text-contrast col-start-2 row-start-1 truncate">
                      {title}
                    </span>
                    <span className="text-neutral-text col-start-2 row-start-2">
                      {description}
                    </span>
                    <span className="text-neutral-text col-start-3 row-start-2 text-right">
                      {age}
                    </span>
                    <div className="col-start-3 row-start-1">
                      {status === "in-progress" && (
                        <CircleHalf
                          size={16}
                          weight="duotone"
                          className="text-warning-text"
                        />
                      )}
                      {status === "done" && (
                        <CheckCircle
                          size={16}
                          weight="duotone"
                          className="text-success-text"
                        />
                      )}
                      {status === "cancelled" && (
                        <XCircle
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
          <div className="border-neutral-3 flex items-center gap-1 border-b p-1 pl-2 text-xs">
            <Breadcrumbs items={breadcrumbs}>
              {({ text, href, icon }) => (
                <Breadcrumb href={href ?? ""} key={text}>
                  <div className="text-neutral-text-contrast flex items-center gap-1 font-medium">
                    {icon ?
                      <span>{icon}</span>
                    : null}
                    {text}
                  </div>
                </Breadcrumb>
              )}
            </Breadcrumbs>

            <MenuTrigger>
              <Button variant="ghost" intent="neutral" isSquare>
                <DotsThree weight="bold" size={16} />
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
                  <Star weight={isSelected ? "fill" : "regular"} size={16} />
                )}
              </ToggleButton>
              <Tooltip>
                Favorite
                <Kbd variant="plain">⎇F</Kbd>
              </Tooltip>
            </TooltipTrigger>

            <TooltipTrigger>
              <Button
                intent="neutral"
                variant="ghost"
                isSquare
                className="ml-auto"
                aria-label="Archive"
              >
                <Archive size={16} />
              </Button>
              <Tooltip>
                Archive
                <Kbd variant="plain">⌫</Kbd>
              </Tooltip>
            </TooltipTrigger>
            <TooltipTrigger>
              <Button
                intent="neutral"
                variant="ghost"
                isSquare
                aria-label="Snooze"
              >
                <Clock size={16} />
              </Button>
              <Tooltip>
                Snooze
                <Kbd variant="plain">H</Kbd>
              </Tooltip>
            </TooltipTrigger>
          </div>

          <div className="flex flex-col gap-3 p-4 text-sm">
            <h4 className="text-neutral-text-contrast text-balance text-base font-medium leading-tight">
              {selectedItem?.title}
            </h4>

            <p className="text-neutral-text">{selectedItem?.text}</p>

            <DataList labelPosition="side">
              <DataListItem label="ID" value={selectedItem?.id} />
              <DataListItem
                label="Assignee"
                value={<Link href="#">{selectedItem?.user}</Link>}
              />
              <DataListItem
                label="Status"
                value={
                  selectedItem?.status === "in-progress" ?
                    <div className="text-warning-text flex items-center gap-1.5">
                      <CircleHalf
                        className="shrink-0"
                        size={16}
                        weight="duotone"
                      />
                      In progress
                    </div>
                  : <div className="text-success-text flex items-center gap-1.5">
                      <CheckCircle
                        className="shrink-0"
                        size={16}
                        weight="duotone"
                      />
                      Done
                    </div>
                }
              />
            </DataList>

            <div className="mt-1 flex flex-col items-start gap-1">
              <Button intent="neutral" variant="ghost">
                + Add sub-issues
              </Button>
              <Button intent="neutral" variant="ghost">
                + Add links
              </Button>
            </div>
            <Separator />
            <h5 className="text-neutral-text-contrast text-sm font-medium">
              Activity
            </h5>
            <div className="flex flex-col text-xs">
              <div className="flex items-center gap-2">
                <Avatar
                  name={selectedItem?.user || "John Doe"}
                  src={`https://source.unsplash.com/random/100x100/?face$${selectedItem?.id}`}
                  size={1}
                />
                <span>
                  <span className="text-neutral-text-contrast font-medium">
                    {selectedItem?.user}
                  </span>{" "}
                  {selectedItem?.description}
                  <span className="px-1.5">&middot;</span>
                  <span className="text-neutral-text">{selectedItem?.age}</span>
                </span>
              </div>
            </div>
            <div className="mt-2 flex flex-col gap-2">
              <TextArea placeholder="Add a comment..." />
              <Button intent="accent" variant="ghost" className="ml-auto">
                Post
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
