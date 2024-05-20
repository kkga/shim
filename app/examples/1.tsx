"use client"

import * as Icon from "@phosphor-icons/react/dist/ssr"
import { Avatar } from "@ui/avatar"
import { Badge } from "@ui/badge"
import { Breadcrumb, Breadcrumbs } from "@ui/breadcrumbs"
import { Button } from "@ui/button"
import { ComboBox, ComboBoxItem } from "@ui/combobox"
import { DataList, DataListLabel, DataListValue } from "@ui/datalist"
import { Link } from "@ui/link"
import {
  Menu,
  MenuItem,
  MenuSection,
  MenuSeparator,
  MenuTrigger,
} from "@ui/menu"
import { Popover, PopoverTrigger } from "@ui/popover"
import { SearchField } from "@ui/searchfield"
import { Select, SelectItem } from "@ui/select"
import { Separator } from "@ui/separator"
import { Cell, Column, Row, Table, TableBody, TableHeader } from "@ui/table"
import { Tab, TabList, TabPanel, Tabs } from "@ui/tabs"
import { Tag, TagGroup } from "@ui/taggroup"
import { TextField } from "@ui/textfield"
import { ToggleButton } from "@ui/togglebutton"
import { Tooltip, TooltipTrigger } from "@ui/tooltip"

const fileColumns = [
  { id: "file", name: "File", isRowHeader: true },
  { id: "commit", name: "Last commit" },
  { id: "editDate", name: "Last edited" },
]

const fileRows = [
  {
    icon: <Icon.Folder size={16} weight="duotone" />,
    id: ".husky",
    commit: "chore: add commitlint",
    editDate: "2 weeks ago",
  },
  {
    icon: <Icon.Folder size={16} weight="duotone" />,
    id: "app",
    commit: "fix: update searchfield for themeprops",
    editDate: "yesterday",
  },
  {
    icon: <Icon.Folder size={16} weight="duotone" />,
    id: "components",
    commit: "fix: update searchfield for themeprops",
    editDate: "yesterday",
  },
  {
    icon: <Icon.Folder size={16} weight="duotone" />,
    id: "demos",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <Icon.Folder size={16} weight="duotone" />,
    id: "docs",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <Icon.File size={16} weight="duotone" />,
    id: ".gitignore",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <Icon.File size={16} weight="duotone" />,
    id: ".eslintrc.json",
    commit: "chore: update eslint",
    editDate: "1 week ago",
  },
  {
    icon: <Icon.File size={16} weight="duotone" />,
    id: "next.config.js",
    commit: "chore: update next config",
    editDate: "2 weeks ago",
  },
  {
    icon: <Icon.File size={16} weight="duotone" />,
    id: "package.json",
    commit: "chore: update packages",
    editDate: "2 weeks ago",
  },
  {
    icon: <Icon.File size={16} weight="duotone" />,
    id: "README.md",
    commit: "docs: update readme",
    editDate: "3 days ago",
  },
  {
    icon: <Icon.File size={16} weight="duotone" />,
    id: "tsconfig.json",
    commit: "chore: update tsconfig",
    editDate: "2 weeks ago",
  },
]

export function Example1() {
  return (
    <div className="s-box flex flex-col overflow-clip rounded-2xl bg-background shadow-[var(--shadow-xs)]">
      <div className="flex items-center gap-2 p-4 pb-2 text-[13px]">
        <MenuTrigger>
          <Button intent="neutral" isSquare aria-label="Menu">
            <Icon.List size={16} />
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

        <Separator className="my-1" orientation="vertical" />
        <Icon.GithubLogo size={16} />

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
              <Icon.Plus size={16} />
              <Icon.CaretDown size={12} />
            </Button>
            <Tooltip>Create new...</Tooltip>
          </TooltipTrigger>
          <Menu>
            <MenuItem>
              <Icon.Book size={16} weight="duotone" />
              New repository
            </MenuItem>
            <MenuItem>
              <Icon.Upload size={16} weight="duotone" />
              Import repository
            </MenuItem>
            <MenuSeparator />
            <MenuItem>
              <Icon.Laptop size={16} weight="duotone" />
              New codespace
            </MenuItem>
            <MenuItem>
              <Icon.CodeSimple size={16} weight="duotone" />
              New gist
            </MenuItem>
          </Menu>
        </MenuTrigger>

        <TooltipTrigger>
          <Button intent="neutral" isSquare>
            <Icon.GitPullRequest weight="duotone" size={16} />
          </Button>
          <Tooltip>Pull requests</Tooltip>
        </TooltipTrigger>

        <TooltipTrigger>
          <Button intent="neutral" isSquare className="relative">
            <div className="absolute -top-0.5 -right-0.5 size-2 rounded-full border border-accent-line bg-accent-9 shadow"></div>
            <Icon.Tray weight="duotone" size={16} />
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
            <Icon.Code weight="duotone" size={16} />
            Code
          </Tab>
          <Tab id="pr">
            <Icon.GitPullRequest weight="duotone" size={16} />
            Pull requests
          </Tab>
          <Tab id="settings">
            <Icon.Gear weight="duotone" size={16} />
            Settings
          </Tab>
        </TabList>

        <TabPanel className="flex flex-col gap-4 bg-panel p-4" id="code">
          <div className="flex gap-2">
            <div className="flex items-center gap-2">
              <h2 className="text-sm font-medium leading-none text-neutral-text-contrast">
                shim
              </h2>
              <Badge size={1} intent="neutral">
                Public
              </Badge>
            </div>
            <div className="grow-1"></div>
            <ToggleButton intent="neutral">
              <Icon.Eye weight="duotone" size={16} />
              Watch
              <Badge size={1} intent="neutral">
                20
              </Badge>
            </ToggleButton>
            <Button intent="neutral">
              <Icon.GitFork weight="duotone" size={16} />
              Fork
              <Badge size={1} intent="neutral">
                38
              </Badge>
            </Button>
            <Button intent="neutral">
              <Icon.Star weight="duotone" size={16} />
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
                    <Icon.GitBranch size={16} />
                    master
                  </SelectItem>

                  <SelectItem id="develop" textValue="develop">
                    <Icon.GitBranch size={16} />
                    develop
                  </SelectItem>

                  <SelectItem id="feature" textValue="feature/1">
                    <Icon.GitBranch size={16} />
                    feature/1
                  </SelectItem>
                </Select>

                <div className="flex-1"></div>

                <ComboBox defaultItems={fileRows} placeholder="Go to file">
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
                    <Icon.CaretDown size={12} />
                  </Button>
                  <Menu>
                    <MenuItem>
                      <Icon.Plus size={16} />
                      Create new file
                    </MenuItem>

                    <MenuItem>
                      <Icon.UploadSimple size={16} />
                      Upload files
                    </MenuItem>
                  </Menu>
                </MenuTrigger>

                <PopoverTrigger>
                  <Button intent="success">
                    <Icon.Code size={16} />
                    Code
                    <Icon.CaretDown size={12} />
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
                            <Icon.Desktop size={16} />
                            Open on desktop
                          </Button>

                          <Button intent="neutral" className="flex-1">
                            <Icon.DownloadSimple size={16} />
                            Download ZIP
                          </Button>
                        </div>
                      </TabPanel>
                      <TabPanel
                        className={"flex flex-col gap-4 p-4 py-8 text-center"}
                        id="codespaces"
                      >
                        <span className="text-sm font-medium text-neutral-text-contrast">
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
              <h4 className="text-sm font-medium leading-none text-neutral-text-contrast">
                About
              </h4>
              <p className="text-[13px]">
                Shim is a collection of pre-styled components, ready for your
                next project. Carefully crafted with React Aria and Tailwind CSS
                v4.
              </p>

              <DataList>
                <DataListLabel>
                  <Icon.Link size={16} />
                </DataListLabel>
                <DataListValue>
                  <Link className="font-medium" href="#">
                    shim.kkga.me
                  </Link>
                </DataListValue>
              </DataList>
              <TagGroup aria-label="Tags" color="green">
                <Tag>react</Tag>
                <Tag>react-aria</Tag>
                <Tag>tailwind-css</Tag>
                <Tag>typescript</Tag>
                <Tag>ui-components</Tag>
              </TagGroup>

              <Separator />

              <DataList>
                <DataListLabel>
                  <Icon.Scales size={16} />
                </DataListLabel>
                <DataListValue>MIT License</DataListValue>
                <DataListLabel>
                  <Icon.Star size={16} />
                </DataListLabel>
                <DataListValue>2.1k stars</DataListValue>
                <DataListLabel>
                  <Icon.Eye size={16} />
                </DataListLabel>
                <DataListValue>20 watchers</DataListValue>
                <DataListLabel>
                  <Icon.GitFork size={16} />
                </DataListLabel>
                <DataListValue>38 forks</DataListValue>
              </DataList>

              <Separator />

              <div className="flex items-center gap-2">
                <h4 className="text-sm font-medium leading-none text-neutral-text-contrast">
                  Releases
                </h4>
                <Badge intent="neutral" size={1}>
                  12
                </Badge>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-start gap-2">
                  <Icon.Tag size={16} />
                  <div>
                    <h4 className="text-xs font-medium leading-4 text-neutral-text-contrast">
                      May 1, 2024 Release
                    </h4>
                    <p className="text-xs text-neutral-text">2 weeks ago</p>
                  </div>
                  <Badge size={1}>Latest</Badge>
                </div>
              </div>
            </div>
          </div>
        </TabPanel>

        <TabPanel id="pr">Change your settings.</TabPanel>
      </Tabs>
    </div>
  )
}
