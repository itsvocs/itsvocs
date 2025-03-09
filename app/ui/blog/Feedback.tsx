"use client";

import { Button } from "@/components/ui/button";
import ShareComponent from "./Share";
import FeedComponent from "./Feed";
import { useEffect, useState, useTransition } from "react";
import { updateLikes } from "@/lib/action";
import { cn } from "@/lib/utils";
import { ThumbsUp } from "@phosphor-icons/react";

export default function Feedback({
  slug,
  initialLike,
  category,
}: {
  slug: string;
  initialLike: number;
  category: string | null | undefined;
}) {
  const [likes, setLikes] = useState(initialLike);
  const [hasLiked, setHasLiked] = useState(false);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà aimé l'article en consultant les cookies
    const likedArticles = document.cookie
      .split("; ")
      .find((row) => row.startsWith("likedArticles="))
      ?.split("=")[1];

    if (likedArticles) {
      const likedArray = JSON.parse(likedArticles);
      if (likedArray.includes(slug)) {
        setHasLiked(true);
      }
    }
  }, [slug]);

  const handleLikeToggle = () => {
    startTransition(async () => {
      const action = hasLiked ? "decrement" : "increment";
      const newLikes = await updateLikes({ slug, action });
      if (typeof newLikes === "number") {
        setLikes(newLikes);
        setHasLiked(!hasLiked);

        // Mettre à jour les cookies
        const likedArticles = document.cookie
          .split("; ")
          .find((row) => row.startsWith("likedArticles="))
          ?.split("=")[1];

        let likedArray = likedArticles ? JSON.parse(likedArticles) : [];

        if (hasLiked) {
          // Si l'utilisateur a déjà aimé, retirer le slug des cookies
          likedArray = likedArray.filter((item: string) => item !== slug);
        } else {
          // Sinon, ajouter le slug aux cookies
          likedArray.push(slug);
        }

        document.cookie = `likedArticles=${JSON.stringify(
          likedArray
        )}; path=/; max-age=31536000`;
      }
    });
  };

  return (
    <div className="pt-24">
      <div className="flex items-center space-x-4">
        <div>
          <Button
            className={cn("py-0 pe-0 text-sm", hasLiked ? "text-blue-500" : "")}
            variant="outline"
            onClick={handleLikeToggle}
            disabled={isPending}>
            <ThumbsUp
              weight="bold"
              className="opacity-60 "
              size={16}
              aria-hidden="true"
            />
            {hasLiked ? "Liked" : "Like"}
            <span className="text-muted-foreground before:bg-input relative ms-1 inline-flex h-full items-center justify-center rounded-full px-3 text-xs font-medium before:absolute before:inset-0 before:left-0 before:w-px">
              {likes}
            </span>
          </Button>
        </div>
        <div>
          <FeedComponent slug={slug} />
        </div>
        <div>
          <ShareComponent slug={slug} category={category} />
        </div>
      </div>
    </div>
  );
}
