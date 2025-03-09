import { Badge } from "@/components/ui/badge";

// Définition des types pour les catégories
export type CategoryKey = "web" | "mobile" | "ai" | "science" | "privacy";

// Correspondance entre les catégories et leurs couleurs
const categoryColors: Record<CategoryKey, string> = {
  web: "bg-blue-500 text-white", // Développement Web
  mobile: "bg-green-500 text-white", // Développement Mobile
  ai: "bg-purple-500 text-white", // Intelligence Artificielle
  science: "bg-red-500 text-white", // Technologie & Science
  privacy: "bg-amber-500 text-white", // Protection des Données
};

// Correspondance entre les catégories et leurs noms affichés
const categoryNames: Record<CategoryKey, string> = {
  web: "Web Development",
  mobile: "Mobile Development",
  ai: "Artificial Intelligence",
  science: "Technology & Science",
  privacy: "Data Protection",
};

// Définition des props du composant
interface CategoryBadgeProps {
  category: CategoryKey;
}

export default function CategoryBadge({ category }: CategoryBadgeProps) {
  // Récupérer la classe de couleur correspondant à la catégorie
  const colorClass = categoryColors[category];

  // Récupérer le nom affiché correspondant à la catégorie
  const displayName = categoryNames[category];

  return (
    <Badge variant="outline" className="gap-1.5 rounded-full">
      {/* Cercle coloré */}
      <span
        className={`size-1.5 rounded-full ${colorClass}`}
        aria-hidden="true"></span>
      {/* Nom de la catégorie */}
      {displayName}
    </Badge>
  );
}
