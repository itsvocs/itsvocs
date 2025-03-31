"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { ArrowRight } from "@phosphor-icons/react";

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

export default function FeaturedComponent() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [projects, setProjects] = useState<Project[]>([]);

  const fetchProjects = async () => {
    try {
      const response = await fetch("/api/project");
      if (!response.ok) throw new Error("Network error");

      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
      setProjects([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <section className="dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 my-8">
          <h2 className="text-pretty font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            Hervorgehobene Projekte
          </h2>
          <p className="mt-2 text-lg/8 text-muted-foreground">
            Eine Auswahl meiner aktuellen Arbeiten und persönlichen Projekte.
          </p>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center w-full min-h-40">
            <p className="text-muted-foreground animate-pulse">Loading...</p>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 ">
              {projects
                .map((project, j) => <ProjectCard key={j} project={project} />)
                .slice(0, 12)}
            </div>
          </>
        )}
        <div className="w-full flex justify-end mt-8">
          <Link
            href="/project"
            className="flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors">
            View all <ArrowRight weight="bold" size={16} className="ml-1" />
          </Link>
        </div>
      </div>
    </section>
  );
}
