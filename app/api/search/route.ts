import { NextRequest, NextResponse } from "next/server";
import { unstable_cache } from "next/cache";
import { db } from "@/db";

const performSearch = async (query: string) => {
  if (!query || query.length < 2) return [];

  const keywords = query.toLowerCase().split(/\s+/).filter(Boolean); // Découper la requête en mots-clés

  const articles = await db.blog.findMany({
    where: {
      OR: keywords.map((word) => ({
        OR: [
          { title: { contains: word, mode: "insensitive" } },
          { category: { contains: word, mode: "insensitive" } },
          { slug: { contains: word, mode: "insensitive" } },
          { summary: { contains: word, mode: "insensitive" } },
        ],
      })),
    },
    select: {
      slug: true,
      title: true,
      summary: true,
      category: true,
      view_count: true,
      likes: true,
      Reviews: {
        select: { rating: true },
      },
    },
    take: 50,
  });

  const articlesWithScore = articles.map((article) => {
    const ratings = article.Reviews?.map((review) => review.rating) || [];
    const avgRating = ratings.length
      ? ratings.reduce((sum, rating) => sum + rating, 0) / ratings.length
      : 0;

    return {
      ...article,
      avgRating: parseFloat(avgRating.toFixed(1)),
      reviewCount: ratings.length,
      Reviews: undefined,
      popularityScore: (
        avgRating * 20 * 0.5 +
        Math.min(ratings.length, 10) * 0.2 +
        Math.min(article.likes / 10, 10) * 0.15 +
        Math.min(article.view_count / 100, 10) * 0.15
      ).toFixed(2),
    };
  });

  return articlesWithScore
    .sort(
      (a, b) => parseFloat(b.popularityScore) - parseFloat(a.popularityScore)
    )
    .slice(0, 10);
};

// Cache pour améliorer les performances
const cachedSearch = unstable_cache(performSearch, ["search-results"], {
  revalidate: 60,
});

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("q") || "";

  try {
    const results = await cachedSearch(query);
    return NextResponse.json(results);
  } catch (error) {
    console.error("Erreur lors de la recherche:", error);
    return NextResponse.json({ error: "Erreur de serveur" }, { status: 500 });
  }
}
