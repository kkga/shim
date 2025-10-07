"use client";

import { ArrowUpRightIcon } from "@phosphor-icons/react";
import React, {
  type ComponentPropsWithoutRef,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { Key } from "react-aria-components";
import { twMerge } from "tailwind-merge";
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
}

interface Props extends Omit<ComponentPropsWithoutRef<"pre">, "children"> {
  code?: CodeItem[] | string;
  children?: string | { props: { children: string } };
  highlight?: boolean;
  clickToCopy?: boolean;
  onCodeTabChange?: (tab: Key) => void;
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
    <div className="sticky top-0 z-20 flex min-h-8 items-center bg-panel px-1 py-0">
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
  return (
    <div className="ml-auto flex gap-1">
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
      {content && <CopyButton className="backdrop-blur-sm" text={content} />}
    </div>
  );
}

function CodeContent({
  code,
  highlight = true,
}: {
  code: CodeItem;
  highlight?: boolean;
}) {
  const LONG_CODE_LINE_THRESHOLD = 20;

  let { content } = code;
  let isContentLong = useMemo(
    () => content.split("\n").length > LONG_CODE_LINE_THRESHOLD,
    [content]
  );

  let codeElement = (
    <pre className="w-full overflow-x-scroll whitespace-pre px-3 py-2 **:[code]:text-[100%]">
      <Code highlight={highlight}>
        {content.replace(TRAILING_NEWLINES_REGEX, "")}
      </Code>
    </pre>
  );

  return isContentLong ? (
    <Collapsible collapsed>{codeElement}</Collapsible>
  ) : (
    codeElement
  );
}

export function CodeBlock({ highlight, onCodeTabChange, ...props }: Props) {
  let normalizedCode = useMemo(
    () => normalizeCode(props.code, props.children),
    [props.code, props.children]
  );

  let [tab, setTab] = useState<Key | null>(
    () => normalizedCode[0].title || null
  );

  useEffect(() => {
    if (tab && onCodeTabChange) {
      onCodeTabChange(tab);
    }
  }, [tab, onCodeTabChange]);

  let selectedCode =
    normalizedCode.find((c) => c.title === tab) ?? normalizedCode[0];

  return (
    <div
      className={twMerge(
        "codeblock group relative isolate my-8 min-w-0 overflow-clip rounded-lg bg-panel text-neutral-text text-xs leading-relaxed",
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
              {c.note && (
                <div className="border-neutral-3 border-b px-3 py-2 font-medium text-[13px] text-neutral-text *:m-0!">
                  {c.note}
                </div>
              )}
              <CodeContent code={c} highlight={highlight} />
            </TabPanel>
          ))}
        </Tabs>
      ) : (
        <>
          <CodeHeader selectedCode={selectedCode}>
            <span className="px-2 font-medium font-sans text-neutral-text text-xs leading-6">
              {normalizedCode[0].title}
            </span>
          </CodeHeader>
          <CodeContent code={selectedCode} highlight={highlight} />
        </>
      )}
    </div>
  );
}

export type { Props as CodeBlockProps };
