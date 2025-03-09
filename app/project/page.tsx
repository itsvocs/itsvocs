"use client";
import { NewsLetter } from "../ui/home/NewsLetter";
import ProjectCard from "../ui/project/ProjectCard";
import SearchProject from "../ui/SearchProject";
import { useEffect, useState } from "react";

type Project = {
  id: number;
  name: string;
  image: string;
  description: string;
  category: string;
  technologie: string[];
  github: string;
  link?: string;
};

export default function Page() {
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
    <div className="dark:bg-black">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-pretty font-heading text-5xl font-bold tracking-tight  sm:text-5xl">
            Projekte
          </h2>
        </div>
        <SearchProject />

        {isLoading ? (
          <div className="flex justify-center items-center w-full min-h-40">
            <p className="text-muted-foreground animate-pulse">Loading...</p>
          </div>
        ) : (
          <>
            <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-6 mt-12">
              {projects.map((project, j) => (
                <ProjectCard key={j} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
