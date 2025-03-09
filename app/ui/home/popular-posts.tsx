"use client";

// import { popularPosts } from "@/lib/placeholder-data";
// import { fetcher, fetchUrl } from "@/lib/utils";
import { Icons } from "@/app/icons/icons";
import Link from "next/link";
// import useSWR from "swr";
// import SkeletonCard from "../loading/popular_posts_skeleton";
import { popularPosts } from "@/lib/constants/placeholder-data";

export default function PopularPosts() {
  //   const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  //   if (error) return <div>Failed to load</div>;
  //   if (isLoading) return <SkeletonCard />;

  return (
    <ul className="overflow-auto">
      {popularPosts.map((post) => (
        <Link href={`/blog/`} key={post.title}>
          <li className="flex items-center gap-2 group cursor-pointer py-2">
            <Icons.arrowRight className="h-6 w-6 group-hover:translate-x-1 transition-all" />
            <p>{post.title}</p>
          </li>
        </Link>
      ))}
    </ul>
  );
}
