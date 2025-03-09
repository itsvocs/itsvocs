"use client";

import { cn, fetcher, fetchUrl } from "@/lib/utils";
import Link from "next/link";
import useSWR from "swr";
import AnimatedShinyText from "@/components/ui/animated-shiny-text";
import { ArrowRight } from "@phosphor-icons/react";

export default function PopularPosts() {
  const { data, error, isLoading } = useSWR(fetchUrl, fetcher);

  if (error) return;
  if (isLoading)
    return <p className="animate-pulse text-muted-foreground">Loading...</p>;

  return data
    ?.slice(0, 1)
    .map((post: { category: string; slug: string; title: string }) => (
      <div className="absolute -bottom-24" key={post.title}>
        <Link
          href={`/blog/${post.category}/${post.slug}`}
          className={cn(
            "block group rounded-full border border-black/5 bg-neutral-100  text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
          )}>
          <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-sm">
            <span>✨ {post.title}</span>
            <ArrowRight
              size={36}
              className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
            />
          </AnimatedShinyText>
        </Link>
      </div>
    ));
}
