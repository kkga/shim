"use client";

import { Highlight, type Language, themes } from "prism-react-renderer";
import { LiveEditor, LiveError, LivePreview, LiveProvider } from "react-live";
import { Badge } from "../ui/badge";

interface CodeBlockProps {
  children: string;
  className: string;
  live: boolean;
}

function CodeBlock({ children, className, live, ...props }: CodeBlockProps) {
  const language = className?.replace(/language-/, "") as Language;
  const code = children.replace(/\n$/, "");

  const codeBlock = (
    <Highlight {...props} code={code} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
        // style={style}
        // className={className}
        // className="font-mono text-xs bg-transparent rounded-lg p-4 overflow-auto"
        >
          {tokens.map((line, i) => (
            <div key={i} className={getLineProps({ line }).className}>
              {line.map((token, key) => (
                <span key={key} className={getTokenProps({ token }).className}>
                  {getTokenProps({ token }).children}
                </span>
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );

  if (live) {
    return (
      <LiveProvider
        code={code}
        scope={{
          Badge,
        }}
      >
        <LivePreview />

        <LiveEditor
          code={code}
          language={language}
          className="font-mono text-xs bg-transparent rounded-lg p-4 overflow-auto"
          theme={themes.github}
        />
        <LiveError />
      </LiveProvider>
    );
  }

  return codeBlock;
}

export default CodeBlock;
