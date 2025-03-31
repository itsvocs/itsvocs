"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  AppStoreLogo,
  Compass,
  FileCode,
  GitFork,
  GithubLogo,
  GlobeSimple,
  HeadCircuit,
  Heartbeat,
  LinkSimpleHorizontal,
  Plus,
  Star,
} from "@phosphor-icons/react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  technologie: string[];
  github: string;
  link?: string;
  blog: {
    slug: string;
    title: string;
    category: string;
  };
};

type GithubData = {
  stars: number;
  forks: number;
  watchers: number;
  issues: number;
  updated_at: Date;
  default_branch: string;
};
// Fonction pour extraire le nom du dépôt à partir d'une URL GitHub
function extractRepoFromUrl(url: string) {
  try {
    // Exemple: https://github.com/username/repo
    const match = url.match(/github\.com\/([^\/]+\/[^\/]+)/);
    return match ? match[1] : null;
  } catch {
    return null;
  }
}

export default function ProjectCard({ project }: { project: Project }) {
  const [githubData, setGithubData] = useState<GithubData>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchGitHubData() {
      const repoPath = extractRepoFromUrl(project.github);

      if (!repoPath) {
        setLoading(false);
        return;
      }

      try {
        const response = await fetch(`/api/github-data?repo=${repoPath}`);
        if (response.ok) {
          const data = await response.json();
          setGithubData(data);

          // Appel de la fonction pour mettre à jour les données GitHub dans la base de données
          await updateGithubDataInDatabase(project.id, data);
        }
      } catch (error) {
        console.error("Erreur:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchGitHubData();
  }, [project.github, project.id]);

  // Fonction pour mettre à jour les données GitHub dans la base de données
  async function updateGithubDataInDatabase(
    projectId: number,
    githubData: GithubData
  ) {
    try {
      const response = await fetch("/api/github-data", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          projectId,
          githubStars: githubData.stars,
          githubForks: githubData.forks,
          githubWatchers: githubData.watchers,
          githubIssues: githubData.issues,
          lastUpdated: new Date(),
        }),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de la mise à jour des données GitHub");
      }
    } catch (error) {
      console.error("Erreur lors de la mise à jour des données GitHub:", error);
    }
  }

  const linkedPage = project.link ? project.link : project.github;
  const linkArtikel = project.blog
    ? `/blog/${project.blog.category}/${project.blog.slug}`
    : "null";
  return (
    <Card className="relative">
      <CardHeader className="flex-row items-center gap-x-2">
        <div className="flex-shrink-0 w-10">
          <div
            className={cn(
              "h-10 w-full rounded-full flex items-center justify-center border ",
              project.category === "web"
                ? " text-blue-600/80 bg-blue-50 dark:bg-blue-950/20"
                : project.category === "mobile"
                ? "text-cyan-500/90 bg-cyan-50 dark:bg-cyan-950/20"
                : project.category === "ai"
                ? "text-purple-600/80 bg-purple-50 dark:bg-purple-950/20"
                : project.category === "dev"
                ? "text-fuchsia-600 bg-fuchsia-50 dark:bg-fuchsia-950/20"
                : "text-rose-700/80 bg-rose-50 dark:bg-rose-950/20"
            )}>
            {project.category === "web" ? (
              <Compass weight="duotone" size={28} />
            ) : project.category === "mobile" ? (
              <AppStoreLogo size={26} />
            ) : project.category === "ai" ? (
              <HeadCircuit size={28} weight="duotone" />
            ) : project.category === "dev" ? (
              <FileCode size={28} />
            ) : (
              <Heartbeat size={26} weight="duotone" />
            )}
          </div>
        </div>
        <div className="flex-1 min-w-0 text-sm">
          <h3 className="font-medium">{project.name}</h3>
          <Link
            href={project.github}
            className="text-muted-foreground text-xs truncate block overflow-hidden text-ellipsis">
            {project.github}
          </Link>
        </div>
        <div className="flex-shrink-0">
          <Popover>
            <PopoverTrigger asChild>
              <Button
                className="group rounded-full"
                variant="outline"
                size="icon">
                <Plus
                  weight="bold"
                  className="transition-transform duration-500 "
                  size={16}
                  aria-hidden="true"
                />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="max-w-[280px] py-3 shadow-none"
              side="top">
              <div className="space-y-3">
                <div className="space-y-1">
                  <p className="text-[13px] font-medium">
                    Beschreibung des Projektes
                  </p>
                  <p className="text-muted-foreground text-xs">
                    {project.description}
                  </p>
                </div>
                <div className=" inline-flex flex-wrap mt-4 gap-2">
                  {project.technologie.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="rounded-full  text-xs font-normal text-muted-foreground">
                      {tech}
                    </Badge>
                  ))}
                  {project.technologie.length > 3 && (
                    <Badge
                      variant="outline"
                      className="rounded-full font-normal text-muted-foreground">
                      +{project.technologie.length - 3}
                    </Badge>
                  )}
                </div>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </CardHeader>
      <CardContent className="pb-2">
        <Link href={project.github}>
          <Badge variant="secondary" className="rounded-full">
            <GithubLogo
              weight="duotone"
              className="-ms-0.5 opacity-60 mr-1"
              size={12}
              aria-hidden="true"
            />
            {project.github}
          </Badge>
        </Link>
      </CardContent>
      {loading ? (
        <div className="space-y-2  items-center p-6 pt-0 ">
          <Skeleton className="h-3 w-[150px]" />
          <Skeleton className="h-3 w-[200px]" />
        </div>
      ) : (
        <CardFooter className="flex flex-col items-start">
          <div>
            <p className="text-sm text-muted-foreground/70">
              {githubData == undefined
                ? "default main"
                : githubData?.default_branch}
            </p>
          </div>
          <div>
            <Button
              variant="ghost"
              className="rounded-full pl-0 hover:bg-transparent cursor-default text-muted-foreground">
              <GlobeSimple
                weight="bold"
                className="-ms-1 opacity-60 text-indigo-600"
                size={16}
                aria-hidden="true"
              />
              <Link href={linkedPage}>
                <span className="flex items-baseline gap-2">Link</span>
              </Link>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full pl-0 hover:bg-transparent cursor-default text-muted-foreground">
              <Star
                className="-ms-1 opacity-60 text-amber-600"
                size={16}
                aria-hidden="true"
              />
              <span className="flex items-baseline gap-2">
                Star
                <span className="text-xs">
                  {githubData == undefined ? 0 : githubData?.stars}
                </span>
              </span>
            </Button>
            <Button
              variant="ghost"
              className="rounded-full pl-0 hover:bg-transparent cursor-default text-muted-foreground">
              <GitFork
                className="-ms-1 opacity-60"
                size={16}
                aria-hidden="true"
              />
              <span className="flex items-baseline gap-2">
                Fork
                <span className="text-xs">
                  {githubData == undefined ? 0 : githubData?.forks}
                </span>
              </span>
            </Button>
          </div>
          {linkArtikel !== "null" && (
            <Link
              href={linkArtikel}
              className="inline-flex gap-2 text-xs text-muted-foreground hover:text-foreground transition-colors justify-center items-center">
              <LinkSimpleHorizontal className="w-5 h-5" />
              Artikel lesen
            </Link>
          )}
        </CardFooter>
      )}
    </Card>
  );
}
