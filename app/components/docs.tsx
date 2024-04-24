import Link from "next/link";
import { getAllDocs } from "app/docs/utils";

export function Docs() {
  let allDocs = getAllDocs();

  return (
    <div>
      {allDocs.map((doc) => (
        <Link
          key={doc.slug}
          className="flex flex-col space-y-1 mb-4"
          href={`/docs/${doc.slug}`}
        >
          <div className="w-full flex flex-col md:flex-row space-x-0 md:space-x-2">
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {doc.metadata.name}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
