"use client"

import {
  Book,
  CaretDown,
  Chats,
  CirclesThree,
  Code,
  CodeSimple,
  Desktop,
  DownloadSimple,
  Eye,
  File,
  Folder,
  Gear,
  GitBranch,
  GitFork,
  GitPullRequest,
  GithubLogo,
  House,
  Kanban,
  Laptop,
  Link as LinkIcon,
  List,
  Plus,
  Scales,
  Star,
  Tag as TagIcon,
  Tray,
  Upload,
  UploadSimple,
} from "@phosphor-icons/react"
import { Avatar } from "@ui/Avatar"
import { Badge } from "@ui/Badge"
import { Breadcrumb, Breadcrumbs } from "@ui/Breadcrumbs"
import { Button } from "@ui/Button"
import { ComboBox, ComboBoxItem } from "@ui/ComboBox"
import { DataList, DataListItem } from "@ui/DataList"
import { Link } from "@ui/Link"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@ui/Menu"
import { Popover, PopoverTrigger } from "@ui/Popover"
import { SearchField } from "@ui/SearchField"
import { Select, SelectItem } from "@ui/Select"
import { Separator } from "@ui/Separator"
import { Cell, Column, Row, Table, TableBody, TableHeader } from "@ui/Table"
import { Tab, TabList, TabPanel, Tabs } from "@ui/Tabs"
import { Tag, TagGroup } from "@ui/TagGroup"
import { TextField } from "@ui/TextField"
import { ToggleButton } from "@ui/ToggleButton"
import { Tooltip, TooltipTrigger } from "@ui/Tooltip"
import { ExampleContainer } from "./container"

const fileColumns = [
  { id: "file", name: "File", isRowHeader: true },
  { id: "commit", name: "Last commit" },
  { id: "editDate", name: "Last edited" },
]

const fileRows = [
  {
    icon: <Folder size={16} weight="duotone" />,
    id: ".husky",
    commit: "chore: add commitlint",
    editDate: "2 weeks ago",
  },
  {
    icon: <Folder size={16} weight="duotone" />,
    id: "app",
    commit: "fix: update searchfield for themeprops",
    editDate: "yesterday",
  },
  {
    icon: <Folder size={16} weight="duotone" />,
    id: "components",
    commit: "fix: update searchfield for themeprops",
    editDate: "yesterday",
  },
  {
    icon: <Folder size={16} weight="duotone" />,
    id: "demos",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <Folder size={16} weight="duotone" />,
    id: "docs",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <File size={16} weight="duotone" />,
    id: ".gitignore",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <File size={16} weight="duotone" />,
    id: ".eslintrc.json",
    commit: "chore: update eslint",
    editDate: "1 week ago",
  },
  {
    icon: <File size={16} weight="duotone" />,
    id: "next.config.js",
    commit: "chore: update next config",
    editDate: "2 weeks ago",
  },
  {
    icon: <File size={16} weight="duotone" />,
    id: "package.json",
    commit: "chore: update packages",
    editDate: "2 weeks ago",
  },
  {
    icon: <File size={16} weight="duotone" />,
    id: "README.md",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <File size={16} weight="duotone" />,
    id: "tsconfig.json",
    commit: "chore: update tsconfig",
    editDate: "2 weeks ago",
  },
]

export function ExampleRepo() {
  return (
    <ExampleContainer className="min-w-[800px]">
      <div className="flex items-center gap-2 p-4 pb-2 text-[13px]">
        <MenuTrigger>
          <Button intent="neutral" isSquare aria-label="Menu">
            <List size={16} />
          </Button>
          <Menu size={1}>
            <MenuItem>
              <House size={16} weight="duotone" />
              Home
            </MenuItem>
            <MenuItem>
              <CirclesThree size={16} weight="duotone" />
              Issues
            </MenuItem>
            <MenuItem>
              <GitPullRequest size={16} weight="duotone" /> Pull requests
            </MenuItem>
            <MenuItem>
              <Kanban size={16} weight="duotone" />
              Projects
            </MenuItem>
            <MenuItem>
              <Chats size={16} weight="duotone" />
              Discussions
            </MenuItem>
            <MenuItem>
              <Desktop size={16} weight="duotone" />
              Codespaces
            </MenuItem>
            <MenuSeparator />
            <MenuSection title="Repositories">
              <MenuItem>
                <Book size={16} weight="duotone" />
                kkga/shim
              </MenuItem>
              <MenuItem>
                <Book size={16} weight="duotone" />
                kkga/ter
              </MenuItem>
              <MenuItem>
                <Book size={16} weight="duotone" />
                kkga/config
              </MenuItem>
            </MenuSection>
          </Menu>
        </MenuTrigger>

        <Separator className="my-1" orientation="vertical" />
        <GithubLogo size={16} />

        <Breadcrumbs>
          <Breadcrumb href="/">kkga</Breadcrumb>
          <Breadcrumb>shim</Breadcrumb>
        </Breadcrumbs>

        <div className="grow-1" aria-hidden></div>

        <SearchField
          className="w-40"
          variant="soft"
          aria-label="Search"
          placeholder="Search..."
        />
        <Separator className="my-1" orientation="vertical" />

        <MenuTrigger>
          <TooltipTrigger>
            <Button intent="accent">
              <Plus size={16} />
              <CaretDown size={12} />
            </Button>
            <Tooltip>Create new...</Tooltip>
          </TooltipTrigger>
          <Menu>
            <MenuItem>
              <Book size={16} weight="duotone" />
              New repository
            </MenuItem>
            <MenuItem>
              <Upload size={16} weight="duotone" />
              Import repository
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <Laptop size={16} weight="duotone" />
              New codespace
            </MenuItem>
            <MenuItem>
              <CodeSimple size={16} weight="duotone" />
              New gist
            </MenuItem>
          </Menu>
        </MenuTrigger>

        <TooltipTrigger>
          <Button intent="neutral" isSquare>
            <GitPullRequest weight="duotone" size={16} />
          </Button>
          <Tooltip>Pull requests</Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Button intent="neutral" isSquare className="relative">
            <div className="border-accent-line bg-accent-9 absolute -right-0.5 -top-0.5 size-2 rounded-full border shadow"></div>
            <Tray weight="duotone" size={16} />
          </Button>
          <Tooltip>Notifications</Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Avatar
            src="https://avatars.githubusercontent.com/u/1460122?v=4"
            name="Gadzhi Kharkharov"
          />
          <Tooltip>Notifications</Tooltip>
        </TooltipTrigger>
      </div>

      <Tabs className="gap-0">
        <TabList className="gap-4 px-4">
          <Tab id="code">
            <Code weight="duotone" size={16} />
            Code
          </Tab>
          <Tab id="pr">
            <GitPullRequest weight="duotone" size={16} />
            Pull requests
          </Tab>
          <Tab id="settings">
            <Gear weight="duotone" size={16} />
            Settings
          </Tab>
        </TabList>

        <TabPanel className="bg-panel flex flex-col gap-4 p-4" id="code">
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-neutral-text-contrast text-sm font-medium leading-none">
                shim
              </h2>
              <Badge size={1} intent="neutral">
                Public
              </Badge>
            </div>
            <div className="grow-1"></div>
            <ToggleButton intent="neutral">
              <Eye weight="duotone" size={16} />
              Watch
              <Badge size={1} intent="neutral">
                20
              </Badge>
            </ToggleButton>
            <Button intent="neutral">
              <GitFork weight="duotone" size={16} />
              Fork
              <Badge size={1} intent="neutral">
                38
              </Badge>
            </Button>
            <Button intent="neutral">
              <Star weight="duotone" size={16} />
              Star
              <Badge size={1} intent="neutral">
                2.1k
              </Badge>
            </Button>
          </div>

          <Separator />

          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2 flex flex-col gap-4">
              <div className="flex gap-2">
                <Select aria-label="Branch" defaultSelectedKey="master">
                  <SelectItem id="master" textValue="master">
                    <GitBranch size={16} />
                    master
                  </SelectItem>

                  <SelectItem id="develop" textValue="develop">
                    <GitBranch size={16} />
                    develop
                  </SelectItem>

                  <SelectItem id="feature" textValue="feature/1">
                    <GitBranch size={16} />
                    feature/1
                  </SelectItem>
                </Select>

                <div className="flex-1"></div>

                <ComboBox
                  aria-label="Files"
                  defaultItems={fileRows}
                  placeholder="Go to file"
                >
                  {({ id, icon }) => (
                    <ComboBoxItem href="#" textValue={id}>
                      {icon}
                      {id}
                    </ComboBoxItem>
                  )}
                </ComboBox>

                <MenuTrigger>
                  <Button intent="neutral">
                    Add file
                    <CaretDown size={12} />
                  </Button>
                  <Menu>
                    <MenuItem>
                      <Plus size={16} />
                      Create new file
                    </MenuItem>

                    <MenuItem>
                      <UploadSimple size={16} />
                      Upload files
                    </MenuItem>
                  </Menu>
                </MenuTrigger>

                <PopoverTrigger>
                  <Button intent="success">
                    <Code size={16} />
                    Code
                    <CaretDown size={12} />
                  </Button>
                  <Popover placement="bottom end" className="w-xs">
                    <Tabs>
                      <TabList className="gap-4 px-4">
                        <Tab id="local">Local</Tab>
                        <Tab id="codespaces">Codespaces</Tab>
                      </TabList>
                      <TabPanel
                        className={"flex flex-col gap-4 p-4"}
                        id="local"
                      >
                        <TextField
                          label="Repository URL"
                          description="Clone using the web URL."
                          isReadOnly
                          value="https://github.com/kkga/shim.git"
                        />

                        <div className="flex gap-2">
                          <Button intent="neutral" className="flex-1">
                            <Desktop size={16} />
                            Open on desktop
                          </Button>

                          <Button intent="neutral" className="flex-1">
                            <DownloadSimple size={16} />
                            Download ZIP
                          </Button>
                        </div>
                      </TabPanel>
                      <TabPanel
                        className={"flex flex-col gap-4 p-4 py-8 text-center"}
                        id="codespaces"
                      >
                        <span className="text-neutral-text-contrast text-sm font-medium">
                          No codespaces
                        </span>
                        <p>
                          You do not have any codespaces with this repository
                          checked out
                        </p>
                        <Button className="self-center" intent="accent">
                          Create codespace
                        </Button>
                        <Link className="text-xs" intent="neutral" href="#">
                          Learn more about codespaces
                        </Link>
                      </TabPanel>
                    </Tabs>
                  </Popover>
                </PopoverTrigger>
              </div>

              <Table aria-label="Files">
                <TableHeader className="hidden" columns={fileColumns}>
                  {({ name, isRowHeader }) => (
                    <Column isRowHeader={isRowHeader}>{name}</Column>
                  )}
                </TableHeader>
                <TableBody items={fileRows}>
                  {({ icon, id, commit, editDate }) => (
                    <Row>
                      <Cell>
                        <div className="flex items-center gap-2">
                          {icon}
                          {id}
                        </div>
                      </Cell>
                      <Cell>{commit}</Cell>
                      <Cell>{editDate}</Cell>
                    </Row>
                  )}
                </TableBody>
              </Table>
            </div>

            <div className="flex flex-col gap-3 py-1">
              <h4 className="text-neutral-text-contrast text-sm font-medium leading-none">
                About
              </h4>
              <p className="text-[13px]">
                Shim is a collection of pre-styled components, ready for your
                next project. Carefully crafted with React Aria and Tailwind CSS
                v4.
              </p>

              <DataList labelPosition="side" className="mb-2">
                <DataListItem
                  label={<LinkIcon size={16} />}
                  value="shim.kkga.me"
                />
              </DataList>

              <TagGroup aria-label="Tags" color="green">
                <Tag>react</Tag>
                <Tag>react-aria</Tag>
                <Tag>tailwind-css</Tag>
                <Tag>typescript</Tag>
                <Tag>ui-components</Tag>
              </TagGroup>

              <Separator />

              <DataList labelPosition="side">
                <DataListItem
                  label={<Scales size={16} />}
                  value="MIT License"
                />
                <DataListItem label={<Star size={16} />} value="2.1k stars" />
                <DataListItem label={<Eye size={16} />} value="20 watchers" />
                <DataListItem label={<GitFork size={16} />} value="38 forks" />
              </DataList>

              <Separator />

              <div className="flex items-center gap-2">
                <h4 className="text-neutral-text-contrast text-sm font-medium leading-none">
                  Releases
                </h4>
                <Badge intent="neutral" size={1}>
                  12
                </Badge>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <TagIcon size={16} />
                  <div>
                    <h4 className="text-neutral-text-contrast text-xs font-medium leading-4">
                      May 1, 2024 Release
                    </h4>
                    <p className="text-neutral-text text-xs">2 weeks ago</p>
                  </div>
                  <Badge size={1}>Latest</Badge>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel id="pr">Change your settings.</TabPanel>
      </Tabs>
    </ExampleContainer>
  )
}
