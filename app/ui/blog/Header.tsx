"use client";
import SearchComponent from "../SearchComponent";
import CategoryFilter from "./CategoryFilter";
import { usePathname } from "next/navigation";
export default function Header() {
  const pathname = usePathname();

  // Ne pas afficher le Header sur les pages de blog spécifiques
  // Le pattern /blog/*/*, où * représente n'importe quelle valeur, correspond à /blog/{category}/{slug}
  if (pathname && /^\/blog\/[^\/]+\/[^\/]+$/.test(pathname)) {
    return null;
  }

  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-pretty font-heading text-5xl font-bold tracking-tight  sm:text-5xl">
          Blogs
        </h2>
      </div>
      <SearchComponent />
      <CategoryFilter />
    </div>
  );
}
