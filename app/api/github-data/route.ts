// app/api/github-data/route.ts
import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const repoPath = searchParams.get("repo"); // Format: "username/repo"

  if (!repoPath) {
    return NextResponse.json(
      { error: "Le paramètre 'repo' est requis" },
      { status: 400 }
    );
  }

  try {
    // Appel à l'API GitHub
    const response = await fetch(`https://api.github.com/repos/${repoPath}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        Authorization: `token ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 3600 }, // Revalidation après 1 heure
    });

    if (!response.ok) {
      throw new Error(
        `GitHub API a répondu avec le statut: ${response.status}`
      );
    }

    const data = await response.json();

    // Renvoyer seulement les données pertinentes
    return NextResponse.json({
      stars: data.stargazers_count,
      forks: data.forks_count,
      watchers: data.subscribers_count,
      issues: data.open_issues_count,
      updated_at: data.updated_at,
      default_branch: data.default_branch,
    });
  } catch (error) {
    console.error("Erreur lors de la récupération des données GitHub:", error);
    return NextResponse.json(
      { error: "Impossible de récupérer les données GitHub" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      projectId,
      githubStars,
      githubForks,
      githubWatchers,
      githubIssues,
      lastUpdated,
    } = body;

    // Vérification des données requises
    if (!projectId) {
      return NextResponse.json(
        { error: "ID du projet manquant" },
        { status: 400 }
      );
    }

    // Mise à jour du projet dans la base de données
    const updatedProject = await prisma.project.update({
      where: {
        id: projectId,
      },
      data: {
        githubStars,
        githubForks,
        githubWatchers,
        githubIssues,
        lastUpdated,
      },
    });

    return NextResponse.json({ success: true, project: updatedProject });
  } catch (error) {
    console.error("Erreur lors de la mise à jour des données GitHub:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  } finally {
    await prisma.$disconnect();
  }
}
