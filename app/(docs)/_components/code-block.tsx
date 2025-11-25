"use client";

import { ArrowUpRightIcon, WarningDiamondIcon } from "@phosphor-icons/react";
import React, { type ComponentPropsWithoutRef, useMemo, useState } from "react";
import type { Key } from "react-aria-components";
import { cn, cx } from "tailwind-variants";
import { LinkButton } from "@/shim-ui/button";
import { Tab, TabList, TabPanel, Tabs } from "@/shim-ui/tabs";
import { Code } from "./code";
import { Collapsible } from "./collapsible";
import { CopyButton } from "./copy-button";

const TRAILING_NEWLINES_REGEX = /\n+$/;

export interface CodeItem {
  content: string;
  note?: React.ReactNode;
  title?: string;
  sourceUrl?: string;
  raw?: string;
  highlight?: boolean;
}

function normalizeCode(
  code?: Props["code"],
  children?: Props["children"]
): CodeItem[] {
  if (!code) {
    const content =
      typeof children === "object" && "props" in children
        ? children.props.children
        : (children as string) || "";
    return [{ content }];
  }

  if (typeof code === "string") {
    return [{ content: code }];
  }

  return code;
}

function CodeHeader({
  children,
  selectedCode,
}: {
  children?: React.ReactNode;
  selectedCode: CodeItem;
}) {
  return (
    <div
      className={cn(
        "z-20 flex min-h-8 items-center rounded-t-lg px-1 py-0",
        children
          ? "border-b border-b-neutral-3 bg-panel backdrop-blur-md"
          : "pointer-events-none absolute inset-x-0"
      )}
    >
      {children}
      <CodeActions
        content={selectedCode.raw || selectedCode.content}
        sourceUrl={selectedCode.sourceUrl}
      />
    </div>
  );
}

function CodeActions({
  sourceUrl,
  content,
}: {
  sourceUrl?: string;
  content?: string;
}) {
  if (sourceUrl === undefined && content === undefined) {
    return null;
  }

  return (
    <div className="pointer-events-auto ml-auto flex gap-1">
      {sourceUrl && (
        <LinkButton
          className="backdrop-blur-sm"
          href={sourceUrl}
          target="_blank"
          variant="ghost"
        >
          GitHub
          <ArrowUpRightIcon size={16} />
        </LinkButton>
      )}
      {content && <CopyButton className="backdrop-blur-md" text={content} />}
    </div>
  );
}

const LONG_CODE_LINE_THRESHOLD = 20;

function CodePane({
  code,
  highlight = true,
}: {
  code: CodeItem;
  highlight?: boolean;
}) {
  let { content, note } = code;
  let isContentLong = content.split("\n").length > LONG_CODE_LINE_THRESHOLD;
  let codeElement = (
    <pre className="min-h-8 w-full overflow-x-scroll whitespace-pre px-3 py-2 **:[code]:text-[100%]">
      <Code highlight={highlight}>
        {content.replace(TRAILING_NEWLINES_REGEX, "")}
      </Code>
    </pre>
  );

  return (
    <>
      {note && (
        <div className="flex items-start gap-2 border-neutral-3 border-b px-3 py-2 font-medium text-neutral-text *:m-0!">
          <WarningDiamondIcon className="h-lh" size={16} weight="duotone" />
          {note}
        </div>
      )}
      {isContentLong ? (
        <Collapsible collapsed>{codeElement}</Collapsible>
      ) : (
        codeElement
      )}
    </>
  );
}

interface Props extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: CodeItem[] | string;
  children?: string | { props: { children: string } };
  clickToCopy?: boolean;
}

export function CodeBlock(props: Props) {
  let normalizedCode = useMemo(
    () => normalizeCode(props.code, props.children),
    [props.code, props.children]
  );

  let [tab, setTab] = useState<Key | null>(
    () => normalizedCode[0].title || null
  );

  let selectedCode =
    normalizedCode.find((c) => c.title === tab) ?? normalizedCode[0];

  return (
    <div
      className={cx(
        "group relative isolate my-6 min-w-0 overflow-clip rounded-lg border border-neutral-3 bg-panel font-normal text-neutral-text text-xs leading-5",
        props.className
      )}
    >
      {normalizedCode.length > 1 ? (
        <Tabs onSelectionChange={(key) => setTab(key)} selectedKey={tab}>
          <CodeHeader selectedCode={selectedCode}>
            <TabList size={1}>
              {normalizedCode.map((c) => (
                <Tab className="px-2" id={c.title} key={c.title}>
                  {c.title}
                </Tab>
              ))}
            </TabList>
          </CodeHeader>

          {normalizedCode.map((c) => (
            <TabPanel id={c.title} key={c.title}>
              <CodePane code={c} highlight={c.highlight} />
            </TabPanel>
          ))}
        </Tabs>
      ) : (
        <>
          <CodeHeader selectedCode={selectedCode}>
            {normalizedCode[0].title && (
              <span className="px-2 font-medium font-sans text-neutral-text text-xs leading-6">
                {normalizedCode[0].title}
              </span>
            )}
          </CodeHeader>
          <CodePane code={selectedCode} highlight={selectedCode.highlight} />
        </>
      )}
    </div>
  );
}

export type { Props as CodeBlockProps };
