"use client";

import { usePathname, useRouter } from "next/navigation";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const categories = {
  all: "All Blogs",
  web: "Web Development",
  mobile: "Mobile Development",
  ai: "Künstliche Intelligenz",
  science: "Data Science",
  privacy: "Datenschutz",
};

export default function CategoryTabs() {
  const pathname = usePathname();
  const router = useRouter();

  // Extract the category from the URL, e.g., '/blog/ai' -> 'ai'
  const currentCategory = pathname === "/blog" ? "all" : pathname.split("/")[2];

  // Handle tab change
  const handleTabChange = (category: string) => {
    const path = category === "all" ? "/blog" : `/blog/${category}`;
    router.push(path);
  };

  return (
    <div className="pt-6">
      <Tabs value={currentCategory} onValueChange={handleTabChange}>
        <ScrollArea>
          <TabsList className="mb-3 gap-1 bg-transparent shadow-none">
            {Object.entries(categories).map(([key, label]) => (
              <TabsTrigger
                key={key}
                value={key}
                className={`rounded-full px-4 py-2 ${
                  currentCategory === key ? " text-primary-foreground" : ""
                }`}>
                {label}
              </TabsTrigger>
            ))}
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </Tabs>
    </div>
  );
}
