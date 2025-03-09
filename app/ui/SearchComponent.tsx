"use client";

import { Input } from "@/components/ui/input";
import { useEffect, useId, useState } from "react";
import Link from "next/link";
import CategoryBadge, { CategoryKey } from "./Badge";
import {
  Eye,
  MagnifyingGlass,
  Spinner,
  Star,
  ThumbsUp,
} from "@phosphor-icons/react";

// Type pour les résultats de recherche
type SearchResult = {
  id: number;
  slug: string;
  title: string;
  category: CategoryKey;
  view_count: number;
  summary: string;
  likes: number;
  avgRating: number;
  reviewCount: number;
};

export default function SearchComponent() {
  const id = useId();
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Fonction qui fait la requête de recherche
  const fetchSearchResults = async (query: string) => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(
        `/api/search?q=${encodeURIComponent(query)}`
      );
      if (!response.ok) throw new Error("Erreur réseau");

      const data = await response.json();
      setResults(data);
    } catch (error) {
      console.error("Erreur de recherche:", error);
      setResults([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Effect pour déclencher la recherche avec un délai
  useEffect(() => {
    const timer = setTimeout(() => {
      if (inputValue.length > 1) {
        fetchSearchResults(inputValue);
      } else {
        setResults([]);
      }
    }, 300); // Délai pour éviter trop de requêtes

    return () => clearTimeout(timer);
  }, [inputValue]);

  // Focus et blur pour gérer l'affichage des résultats
  const handleFocus = () => setShowResults(true);
  const handleBlur = () => {
    // Délai pour permettre l'interaction avec les résultats avant de les cacher
    setTimeout(() => setShowResults(false), 200);
  };

  return (
    <div className="relative mt-4">
      <div className="relative">
        <Input
          id={id}
          className="peer ps-9 pe-9 placeholder:text-muted-foreground/60"
          placeholder="Blogs durchsuchen..."
          type="search"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
        <div className="text-muted-foreground/80 pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 peer-disabled:opacity-50">
          {isLoading ? (
            <Spinner
              weight="bold"
              className="animate-spin"
              size={16}
              role="status"
              aria-label="Chargement..."
            />
          ) : (
            <MagnifyingGlass size={16} aria-hidden="true" weight="bold" />
          )}
        </div>
      </div>

      {/* Résultats de recherche */}
      {showResults && inputValue && (
        <div className="absolute z-10 mt-1 w-full bg-background shadow-lg rounded-md border max-h-96 overflow-y-auto">
          {isLoading ? (
            <div className="p-4 text-center">
              <p className="text-sm mt-1 animate-pulse text-muted-foreground">
                Search in progress...
              </p>
            </div>
          ) : results.length > 0 ? (
            <ul className="divide-y ">
              {results.map((article) => (
                <li key={article.id} className="hover:bg-background/80">
                  <Link href={`/blog/${article.category}/${article.slug}`}>
                    <div className="p-4 cursor-pointer">
                      <div className="flex items-center flex-wrap space-x-2">
                        <h3 className="text-sm font-medium text-foreground">
                          {article.title}
                        </h3>
                        <CategoryBadge category={article.category} />
                      </div>
                      <p className="text-muted-foreground text-sm ">
                        {article.summary}
                      </p>
                      <div className="mt-1 flex items-center text-xs text-muted-foreground/80 space-x-4">
                        <div className="flex items-center">
                          <Star size={12} className="text-amber-500 mr-1" />
                          <span>
                            {article.avgRating} ({article.reviewCount})
                          </span>
                        </div>
                        <div className="flex items-center">
                          {article.view_count}{" "}
                          <Eye weight="bold" size={14} className="mb-px ml-1" />
                        </div>
                        <div className="flex items-center">
                          {article.likes}{" "}
                          <ThumbsUp
                            weight="bold"
                            size={12}
                            className="mb-0.5 ml-1 text-blue-500/70"
                          />
                        </div>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="p-4 text-center text-sm text-muted-foreground">
              No results found for {inputValue}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
