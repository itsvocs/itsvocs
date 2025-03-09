import { getBlogPosts } from "@/lib/blog/utils";
import CardCategory from "../ui/CardCategory";

export default function Page() {
  const posts = getBlogPosts();
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t pt-10 sm:mt-16 sm:pt-16 lg:mx-auto lg:max-w-7xl px-8 ">
      {posts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <div key={post.slug}>
            <CardCategory
              title={post.metadata.title}
              summary={post.metadata.summary}
              date={post.metadata.publishedAt}
              slug={`/blog/${post.metadata.category}/${post.slug}`}
              category={post.metadata.category}
            />
          </div>
        ))}
    </div>
  );
}
