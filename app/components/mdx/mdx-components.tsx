import Link from "next/link";
import Image from "next/image";
import { MDXRemote, compileMDX } from "next-mdx-remote/rsc";
import { highlight } from "sugar-high";
import React from "react";
import CodeBlock from "./CodeBlock";
import rehypeMdxCodeProps from "rehype-mdx-code-props";
import { Code } from "bright";
import { Badge } from "../ui/badge";
import dynamic from "next/dynamic";
import { Main } from "next/document";

Code.theme = "github-dark";

// interface PreProps {
//   live?: boolean;
//   children?: React.ReactNode;
// }

// function Pre({ children, live, ...props }: PreProps) {
//   if (React.isValidElement(children) && children.type === "code") {
//     return (
//       <div {...props}>
//         <CodeBlock live={live} {...children.props} />
//       </div>
//     );
//   }
//   return <pre {...props}>{children}</pre>;
// }

function Table({ data }) {
  let headers = data.headers.map((header, index) => (
    <th key={index}>{header}</th>
  ));
  let rows = data.rows.map((row, index) => (
    <tr key={index}>
      {row.map((cell, cellIndex) => (
        <td key={cellIndex}>{cell}</td>
      ))}
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>{headers}</tr>
      </thead>
      <tbody>{rows}</tbody>
    </table>
  );
}

function CustomLink(props) {
  let href = props.href;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...props}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props) {
  return <Image alt={props.alt} className="rounded-lg" {...props} />;
}

// function Code({ children, ...props }) {
//   if (props.code) {
//     let codeHTML = highlight(props.code);
//     return (
//       <pre>
//         <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
//       </pre>
//     );
//   }
//   let codeHTML = highlight(children);
//   return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
// }

function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .trim() // Remove whitespace from both ends of a string
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w\-]+/g, "") // Remove all non-word characters except for -
    .replace(/\-\-+/g, "-"); // Replace multiple - with single -
}

function createHeading(level) {
  const Heading = ({ children }) => {
    let slug = slugify(children);
    return React.createElement(
      `h${level}`,
      { id: slug },
      [
        React.createElement("a", {
          href: `#${slug}`,
          key: `link-${slug}`,
          className: "anchor",
        }),
      ],
      children
    );
  };

  Heading.displayName = `Heading${level}`;

  return Heading;
}

export const mdxComponents = {
  h1: createHeading(1),
  h2: createHeading(2),
  h3: createHeading(3),
  h4: createHeading(4),
  h5: createHeading(5),
  h6: createHeading(6),
  Image: RoundedImage,
  a: CustomLink,
  // pre: Pre,
  pre: Code,
  Code: Code,
  // Code: (props) => <Code {...props} />,
  // code: Code,
  Table,
  Badge,
  BadgeDemo: {
    Main: dynamic(() => import("@/demos/badge").then((mod) => mod.Main)),
    Size: dynamic(() => import("@/demos/badge").then((mod) => mod.Size)),
  },
};

// export async function CustomMDX(props) {
//   const { frontmatter, content } = await compileMDX({
//     source: props.source,
//     options: {
//       scope: props.scope,
//     },
//     components: {
//       ...components,
//       ...(props.components || {}),
//     },
//   });

//   return content;
// }

// export function CustomMDX(props) {
//   return (
//     <MDXRemote
//       {...props}
//       options={{
//         mdxOptions: {
//           rehypePlugins: [rehypeMdxCodeProps],
//         },
//       }}
//       components={{
//         ...components,
//         // pre: (props) => <Pre {...props} />,
//       }}

//       // components={{ ...components, ...(props.components || {}) }}
//     />
//   );
// }
