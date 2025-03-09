import { notFound } from "next/navigation";
import { formatDate, getBlogPosts } from "@/lib/blog/utils";
import { CustomMDX } from "@/app/ui/mdx";
import ReportViews from "@/components/ReportViews";
import { baseUrl } from "@/app/sitemap";
import Image from "next/image";
import Feedback from "@/app/ui/blog/Feedback";
import { NewsLetter } from "@/app/ui/home/NewsLetter";
import { db } from "@/db";

export async function generateStaticParams() {
  const posts = getBlogPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; category: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;

  const ogImage = image
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
      url: `${baseUrl}/blog/${post?.metadata.category}/${post?.slug}}`,
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function page({
  params,
}: {
  params: { category: string; slug: string };
}) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const article = await db.blog.findUnique({
    where: {
      slug: params.slug,
    },
    select: {
      likes: true,
    },
  });

  return (
    <div className="mt-32  flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
      <div className="mx-auto w-full max-w-3xl px-4 md:px-8">
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: post.metadata.title,
              datePublished: post.metadata.publishedAt,
              dateModified: post.metadata.publishedAt,
              description: post.metadata.summary,
              image: post.metadata.image
                ? `${baseUrl}${post.metadata.image}`
                : `/og?title=${encodeURIComponent(post.metadata.title)}`,
              url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
              author: {
                "@type": "Person",
                name: "Coding Jitsu Blog",
              },
            }),
          }}
        />
        <ReportViews
          category={post.metadata.category}
          title={post.metadata.title}
          slug={post.slug}
          summary={post.metadata.summary}
        />
        <Image
          src={post.metadata.img}
          alt={post.metadata.title}
          width={1024}
          height={720}
          className="h-60 w-full rounded-3xl object-cover md:h-[30rem]"
        />
        <h2 className="mb-2 mt-6 text-2xl font-bold tracking-tight text-black dark:text-white">
          {post.metadata.title}
        </h2>
        <div className="flex items-center">
          <svg
            className="text-muted-foreground"
            data-testid="geist-icon"
            height="16"
            strokeLinejoin="round"
            viewBox="0 0 16 16"
            width="16"
            aria-hidden="true">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M5.35066 2.06247C5.96369 1.78847 6.62701 1.60666 7.32351 1.53473L7.16943 0.0426636C6.31208 0.1312 5.49436 0.355227 4.73858 0.693033L5.35066 2.06247ZM8.67651 1.53473C11.9481 1.87258 14.5 4.63876 14.5 8.00001C14.5 11.5899 11.5899 14.5 8.00001 14.5C4.63901 14.5 1.87298 11.9485 1.5348 8.67722L0.0427551 8.83147C0.459163 12.8594 3.86234 16 8.00001 16C12.4183 16 16 12.4183 16 8.00001C16 3.86204 12.8589 0.458666 8.83059 0.0426636L8.67651 1.53473ZM2.73972 4.18084C3.14144 3.62861 3.62803 3.14195 4.18021 2.74018L3.29768 1.52727C2.61875 2.02128 2.02064 2.61945 1.52671 3.29845L2.73972 4.18084ZM1.5348 7.32279C1.60678 6.62656 1.78856 5.96348 2.06247 5.35066L0.693033 4.73858C0.355343 5.4941 0.131354 6.31152 0.0427551 7.16854L1.5348 7.32279ZM8.75001 4.75V4H7.25001V4.75V7.875C7.25001 8.18976 7.3982 8.48615 7.65001 8.675L9.55001 10.1L10.15 10.55L11.05 9.35L10.45 8.9L8.75001 7.625V4.75Z"
              fill="currentColor"></path>
          </svg>
          <p className="pl-2 text-sm text-muted-foreground">
            {post.metadata.duration ? post.metadata.duration : 5} min read
          </p>
          <div className="mx-2 h-1 w-1 rounded-full bg-neutral-200 dark:bg-neutral-700"></div>
          <p className="pl-1 text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt, false)}
          </p>
        </div>
        <article className="prose mt-10 dark:prose-invert sm:mt-20">
          <CustomMDX source={post.content} />
        </article>
        <Feedback
          slug={post.slug}
          initialLike={article?.likes ?? 0}
          category={post.metadata.category}
        />
        <NewsLetter />
      </div>
    </div>
  );
}
