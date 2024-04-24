import { notFound } from "next/navigation";
import { CustomMDX } from "app/components/mdx";
import { getAllDocs } from "app/docs/utils";
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

  let { name, description } = doc.metadata;
  let ogImage = `${baseUrl}/og?title=${encodeURIComponent(name)}`;

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      type: "article",
      url: `${baseUrl}/docs/${doc.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: name,
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
            headline: doc.metadata.name,
            description: doc.metadata.description,
            image: `/og?title=${encodeURIComponent(doc.metadata.name)}`,
            url: `${baseUrl}/docs/${doc.slug}`,
            author: {
              "@type": "Person",
              name: "My Portfolio",
            },
          }),
        }}
      />
      <h1 className="title font-semibold text-2xl tracking-tighter">
        {doc.metadata.name}
      </h1>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm"></div>
      <article className="prose">
        <CustomMDX source={doc.content} />
      </article>
    </section>
  );
}
