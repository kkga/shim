import Link from "next/link";
import { formatDate, getAllDocs } from "app/docs/utils";

export function Docs() {
  let allDocs = getAllDocs();

  return (
    <div>
      {allDocs
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((doc) => (
          <Link
            key={doc.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/docs/${doc.slug}`}
          >
            <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
              <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
                {formatDate(doc.metadata.publishedAt, false)}
              </p>
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {doc.metadata.title}
              </p>
            </div>
          </Link>
        ))}
    </div>
  );
}
