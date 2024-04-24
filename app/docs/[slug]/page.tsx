import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { formatDate, getAllDocs } from "app/docs/utils";
import { baseUrl } from "app/sitemap";

export async function generateStaticParams() {
  let docs = getAllDocs();

  return docs.map((doc) => ({
    slug: doc.slug,
  }));
}

export function generateMetadata({ params }) {
  let doc = getAllDocs().find((doc) => doc.slug === params.slug);
  if (!doc) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = doc.metadata;
  let ogImage = image
    ? image
    : `${baseUrl}/og?title=${encodeURIComponent(title)}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${baseUrl}/docs/${doc.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Doc({ params }) {
  let doc = getAllDocs().find((doc) => doc.slug === params.slug);

  if (!doc) {
    notFound();
  }

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: doc.metadata.title,
            datePublished: doc.metadata.publishedAt,
            dateModified: doc.metadata.publishedAt,
            description: doc.metadata.summary,
            image: doc.metadata.image
              ? `${baseUrl}${doc.metadata.image}`
              : `/og?title=${encodeURIComponent(doc.metadata.title)}`,
            url: `${baseUrl}/docs/${doc.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {doc.metadata.title}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(doc.metadata.publishedAt)}
        </p>
      </div>
      <article className="prose">
        <CustomMDX source={doc.content} />
      </article>
    </section>
  );
}
