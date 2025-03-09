import { POSTS } from "@/lib/constants/constants";
import { getBlogPosts } from "@/lib/blog/utils";

export const baseUrl = "localhost:3000";
// "https://next-blog-cj.vercel.app";

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.metadata.category}/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = POSTS.map((route) => ({
    url: `${baseUrl}${route.href}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...blogs, ...routes];
}
