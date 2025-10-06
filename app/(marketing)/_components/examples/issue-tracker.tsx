"use client";

import {
  ArchiveIcon,
  CaretDownIcon,
  CheckCircleIcon,
  ChecksIcon,
  CircleHalfIcon,
  ClockIcon,
  DeviceMobileIcon,
  DotsThreeIcon,
  FolderIcon,
  FunnelSimpleIcon,
  MagnifyingGlassIcon,
  MapTrifoldIcon,
  PencilRulerIcon,
  PlusIcon,
  RoadHorizonIcon,
  SignOutIcon,
  SlidersHorizontalIcon,
  StackIcon,
  StarIcon,
  TrayIcon,
  UserFocusIcon,
  UsersIcon,
  UsersThreeIcon,
  XCircleIcon,
  XSquareIcon,
} from "@phosphor-icons/react";
import { useMemo, useState } from "react";
import type { Selection } from "react-aria-components";
import { Avatar } from "@/shim-ui/avatar";
import { Badge } from "@/shim-ui/badge";
import { Breadcrumb, Breadcrumbs } from "@/shim-ui/breadcrumbs";
import { Button } from "@/shim-ui/button";
import { DataList, DataListItem } from "@/shim-ui/data-list";
import { Kbd } from "@/shim-ui/kbd";
import { Link } from "@/shim-ui/link";
import { ListBox, ListBoxItem, ListBoxSection } from "@/shim-ui/list-box";
import {
  Menu,
  MenuItem,
  MenuSeparator,
  MenuTrigger,
  SubmenuTrigger,
} from "@/shim-ui/menu";
import { Popover, PopoverTrigger } from "@/shim-ui/popover";
import { Select, SelectItem } from "@/shim-ui/select";
import { Separator } from "@/shim-ui/separator";
import { Switch } from "@/shim-ui/switch";
import { Tag, TagGroup } from "@/shim-ui/tag-group";
import { TextArea } from "@/shim-ui/text-area";
import { ToggleButton } from "@/shim-ui/toggle-button";
import { Tooltip, TooltipTrigger } from "@/shim-ui/tooltip";
import { ExampleContainer } from "./container";

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
];

export function ExampleIssueTracker() {
  let [selectedKeys, setSelectedKeys] = useState<Selection>(
    new Set(["LIN-5737"])
  );
  let breadcrumbs = useMemo(
    () => [
      {
        id: "mobile-app",
        text: "Mobile app",
        href: "#",
        icon: <DeviceMobileIcon className="text-accent-text" size={16} />,
      },
      {
        id: [...selectedKeys][0],
        text: [...selectedKeys][0],
      },
    ],
    [selectedKeys]
  );
  let selectedItem = useMemo(
    () => items.find((item) => item.id === [...selectedKeys][0]),
    [selectedKeys]
  );

  return (
    <ExampleContainer className="min-w-[800px]">
      <div className="flex flex-1 flex-row overflow-auto bg-panel">
        <div className="flex min-w-[160px] flex-col gap-2.5 p-3 text-xs">
          <div className="flex items-center gap-1">
            <MenuTrigger>
              <Button
                aria-label="Menu"
                className="text-neutral-text-contrast"
                intent="neutral"
                variant="ghost"
              >
                Acme <CaretDownIcon size={12} />
              </Button>
              <Menu className="min-w-[180px]">
                <MenuItem>
                  <SlidersHorizontalIcon size={16} weight="duotone" />
                  Preferences
                  <Kbd className="ml-auto" variant="plain">
                    G then S
                  </Kbd>
                </MenuItem>
                <MenuSeparator />
                <SubmenuTrigger>
                  <MenuItem>
                    <UsersThreeIcon size={16} weight="duotone" />
                    Workspace
                  </MenuItem>
                  <Menu>
                    <MenuItem>Personal</MenuItem>
                    <MenuItem>Work</MenuItem>
                    <MenuItem>Organization</MenuItem>
                  </Menu>
                </SubmenuTrigger>
                <MenuItem>
                  <SignOutIcon size={16} weight="duotone" />
                  Log out
                  <Kbd className="ml-auto" variant="plain">
                    ⎇⇧Q
                  </Kbd>
                </MenuItem>
              </Menu>
            </MenuTrigger>

            <Button
              className="ml-auto"
              intent="neutral"
              isIconOnly
              variant="ghost"
            >
              <MagnifyingGlassIcon size={16} />
            </Button>

            <Button intent="neutral" isIconOnly>
              <PlusIcon size={16} />
            </Button>
          </div>

          <ListBox
            aria-label="Navigation"
            className="gap-2"
            defaultSelectedKeys={["inbox"]}
            disallowEmptySelection
            selectionMode="single"
          >
            <ListBoxSection>
              <ListBoxItem id="inbox" textValue="inbox">
                <TrayIcon size={16} weight="duotone" />
                Inbox
                <Badge className="ml-0" intent="neutral" size={1}>
                  15
                </Badge>
              </ListBoxItem>
              <ListBoxItem textValue="my-issues">
                <UserFocusIcon size={16} weight="duotone" />
                My issues
              </ListBoxItem>
            </ListBoxSection>

            <ListBoxSection title="Workspace">
              <ListBoxItem textValue="views">
                <StackIcon size={16} weight="duotone" />
                Views
              </ListBoxItem>
              <ListBoxItem textValue="roadmaps">
                <MapTrifoldIcon size={16} weight="duotone" />
                Roadmaps
              </ListBoxItem>
              <ListBoxItem textValue="teams">
                <UsersIcon size={16} weight="duotone" />
                Teams
              </ListBoxItem>
            </ListBoxSection>

            <ListBoxSection title="Favorites">
              <ListBoxItem textValue="mobile-app">
                <DeviceMobileIcon
                  className="text-accent-text"
                  size={16}
                  weight="duotone"
                />
                Mobile app
              </ListBoxItem>
              <ListBoxItem textValue="roadmap">
                <RoadHorizonIcon
                  className="text-success-text"
                  size={16}
                  weight="duotone"
                />
                3Q24 Roadmap
              </ListBoxItem>
              <ListBoxItem textValue="design-system">
                <PencilRulerIcon
                  className="text-warning-text"
                  size={16}
                  weight="duotone"
                />
                Design system
              </ListBoxItem>

              <ListBoxItem textValue="projects">
                <FolderIcon size={16} weight="duotone" />
                Projects
              </ListBoxItem>

              <ListBoxItem textValue="docs">
                <FolderIcon size={16} weight="duotone" />
                Docs
              </ListBoxItem>
            </ListBoxSection>
          </ListBox>
        </div>

        <div className="m-2 ml-0 flex flex-1 rounded bg-background shadow-xs ring ring-neutral-3">
          <div className="flex w-[240px] flex-col border-neutral-3 border-r">
            <div className="flex items-center gap-1.5 border-neutral-3 border-b p-1 px-2 text-xs">
              <span className="ml-1 font-medium text-neutral-text-contrast">
                Inbox
              </span>
              <MenuTrigger>
                <Button
                  aria-label="Inbox menu"
                  intent="neutral"
                  isIconOnly
                  variant="ghost"
                >
                  <DotsThreeIcon size={16} weight="bold" />
                </Button>
                <Menu>
                  <MenuItem>
                    <ChecksIcon size={16} weight="duotone" />
                    Mark all as read
                    <Kbd className="ml-auto" variant="plain">
                      ⎇U
                    </Kbd>
                  </MenuItem>
                  <MenuItem>
                    <XSquareIcon size={16} weight="duotone" />
                    Empty inbox
                    <Kbd className="ml-auto" variant="plain">
                      ⎇⇧D
                    </Kbd>
                  </MenuItem>
                </Menu>
              </MenuTrigger>

              <MenuTrigger>
                <Button
                  className="ml-auto"
                  intent="neutral"
                  isIconOnly
                  variant="ghost"
                >
                  <FunnelSimpleIcon size={16} />
                </Button>
                <Menu placement="bottom end" selectionMode="multiple">
                  <MenuItem>Assignments</MenuItem>
                  <MenuItem>Mentions</MenuItem>
                  <MenuItem>Status changes</MenuItem>
                  <MenuItem>Comments</MenuItem>
                </Menu>
              </MenuTrigger>
              <PopoverTrigger>
                <Button intent="neutral" isIconOnly variant="ghost">
                  <SlidersHorizontalIcon size={16} />
                </Button>
                <Popover placement="bottom end">
                  <div className="flex w-[220px] flex-col gap-2 p-3">
                    <Select
                      defaultSelectedKey={"newest"}
                      label="Ordering"
                      labelPosition="side"
                    >
                      <SelectItem id="newest">Newest</SelectItem>
                      <SelectItem id="oldest">Oldest</SelectItem>
                      <SelectItem id="priorty">Priority</SelectItem>
                    </Select>
                    <Separator />
                    <div className="flex flex-col">
                      <Switch defaultSelected labelPosition="start">
                        Show snoozed
                      </Switch>
                      <Switch labelPosition="start">Show read</Switch>
                    </div>
                    <Separator />
                    <TagGroup
                      defaultSelectedKeys={"id"}
                      label="Display properties"
                      selectionMode="multiple"
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
                disallowEmptySelection
                items={items}
                onSelectionChange={setSelectedKeys}
                selectedKeys={selectedKeys}
                selectionMode="single"
              >
                {({ title, description, user, status, age, id }) => (
                  <ListBoxItem
                    className="h-auto px-2 py-1.5"
                    key={id}
                    textValue={title}
                  >
                    <div className="grid flex-1 grid-cols-[auto_1fr_auto] grid-rows-[auto_auto] gap-x-2.5 gap-y-0.5">
                      <Avatar
                        className="row-span-2 place-self-center"
                        name={user}
                        size={2}
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
                          <CircleHalfIcon
                            className="text-warning-text"
                            size={16}
                            weight="duotone"
                          />
                        )}
                        {status === "done" && (
                          <CheckCircleIcon
                            className="text-success-text"
                            size={16}
                            weight="duotone"
                          />
                        )}
                        {status === "cancelled" && (
                          <XCircleIcon
                            className="text-neutral-text"
                            size={16}
                            weight="duotone"
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
            <div className="flex items-center gap-1 border-neutral-3 border-b p-1 pl-2 text-xs">
              <Breadcrumbs items={breadcrumbs}>
                {({ text, href, icon }) => (
                  <Breadcrumb href={href ?? ""} key={text}>
                    <div className="flex items-center gap-1 font-medium text-neutral-text-contrast">
                      {icon ? <span>{icon}</span> : null}
                      {text}
                    </div>
                  </Breadcrumb>
                )}
              </Breadcrumbs>

              <MenuTrigger>
                <Button intent="neutral" isIconOnly variant="ghost">
                  <DotsThreeIcon size={16} weight="bold" />
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
                  <MenuItem intent="danger">Delete</MenuItem>
                </Menu>
              </MenuTrigger>

              <TooltipTrigger>
                <ToggleButton
                  aria-label="Favorite"
                  intent="neutral"
                  isIconOnly
                  variant="ghost"
                >
                  {({ isSelected }) => (
                    <StarIcon
                      size={16}
                      weight={isSelected ? "fill" : "regular"}
                    />
                  )}
                </ToggleButton>
                <Tooltip>
                  Favorite
                  <Kbd variant="plain">⎇F</Kbd>
                </Tooltip>
              </TooltipTrigger>

              <TooltipTrigger>
                <Button
                  aria-label="Archive"
                  className="ml-auto"
                  intent="neutral"
                  isIconOnly
                  variant="ghost"
                >
                  <ArchiveIcon size={16} />
                </Button>
                <Tooltip>
                  Archive
                  <Kbd variant="plain">⌫</Kbd>
                </Tooltip>
              </TooltipTrigger>
              <TooltipTrigger>
                <Button
                  aria-label="Snooze"
                  intent="neutral"
                  isIconOnly
                  variant="ghost"
                >
                  <ClockIcon size={16} />
                </Button>
                <Tooltip>
                  Snooze
                  <Kbd variant="plain">H</Kbd>
                </Tooltip>
              </TooltipTrigger>
            </div>

            <div className="flex flex-col gap-3 p-4 text-sm">
              <h4 className="text-balance font-medium text-base text-neutral-text-contrast leading-tight">
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
                    selectedItem?.status === "in-progress" ? (
                      <div className="flex items-center gap-1.5 text-warning-text">
                        <CircleHalfIcon
                          className="shrink-0"
                          size={16}
                          weight="duotone"
                        />
                        In progress
                      </div>
                    ) : (
                      <div className="flex items-center gap-1.5 text-success-text">
                        <CheckCircleIcon
                          className="shrink-0"
                          size={16}
                          weight="duotone"
                        />
                        Done
                      </div>
                    )
                  }
                />
              </DataList>

              <div className="mt-1 flex flex-col items-start gap-1">
                <Button intent="neutral" variant="ghost">
                  <PlusIcon size={12} />
                  Add sub-issues
                </Button>
                <Button intent="neutral" variant="ghost">
                  <PlusIcon size={12} />
                  Add links
                </Button>
              </div>
              <Separator />
              <h5 className="font-medium text-neutral-text-contrast text-sm">
                Activity
              </h5>
              <div className="flex flex-col text-xs">
                <div className="flex items-center gap-2">
                  <Avatar name={selectedItem?.user || "John Doe"} size={1} />
                  <span>
                    <span className="font-medium text-neutral-text-contrast">
                      {selectedItem?.user}
                    </span>{" "}
                    {selectedItem?.description}
                    <span className="px-1.5">&middot;</span>
                    <span className="text-neutral-text">
                      {selectedItem?.age}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-2 flex flex-col gap-2">
                <TextArea aria-label="Comment" placeholder="Add a comment..." />
                <Button className="ml-auto" intent="accent" variant="ghost">
                  Post
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ExampleContainer>
  );
}
