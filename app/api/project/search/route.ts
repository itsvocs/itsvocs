// app/api/projects/search/route.ts
import { NextRequest, NextResponse } from "next/server";
import { db } from "@/db";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q") || "";

  if (!query || query.length < 2) {
    // Si pas de requête valide, renvoyer tous les projets
    const allProjects = await db.project.findMany({
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        image: true,
        technologie: true,
        github: true,
        link: true,
      },
      take: 50,
    });

    return NextResponse.json(allProjects);
  }

  const keywords = query.toLowerCase().split(/\s+/).filter(Boolean);

  try {
    const projects = await db.project.findMany({
      where: {
        OR: [
          {
            OR: keywords.map((word) => ({
              name: { contains: word, mode: "insensitive" },
            })),
          },
          {
            OR: keywords.map((word) => ({
              description: { contains: word, mode: "insensitive" },
            })),
          },
          {
            OR: keywords.map((word) => ({
              category: { contains: word, mode: "insensitive" },
            })),
          },
          {
            // Recherche dans le tableau de technologies
            technologie: {
              hasSome: keywords,
            },
          },
        ],
      },
      select: {
        id: true,
        name: true,
        description: true,
        category: true,
        image: true,
        technologie: true,
        github: true,
        link: true,
        githubStars: true,
        githubForks: true,
        githubWatchers: true,
      },
      take: 50,
    });

    return NextResponse.json(projects);
  } catch (error) {
    console.error("Erreur de recherche:", error);
    return NextResponse.json(
      { error: "Erreur lors de la recherche" },
      { status: 500 }
    );
  }
}
