import { formatDate } from "@/lib/blog/utils";
import Link from "next/link";
import CategoryBadge, { CategoryKey } from "./Badge";
// ... existing code ...

export default function CardCategory({
  title,
  summary,
  date,
  slug,
  category,
}: {
  title: string;
  summary: string;
  date: string;
  slug: string;
  category: string;
}) {
  return (
    <article className="flex flex-col h-full relative">
      <div className="flex-1">
        <h3 className="text-xl font-semibold leading-6 text-foreground group-hover:text-primary flex flex-wrap items-center gap-2">
          <Link href={slug}>
            <span className="absolute inset-0" />
            {title}
          </Link>
          {category && <CategoryBadge category={category as CategoryKey} />}
        </h3>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {summary}
        </p>
      </div>

      <div className="mt-4 flex items-center gap-x-2 text-xs">
        <time dateTime={date} className="text-muted-foreground">
          {formatDate(date, false)}
        </time>
        <span className="w-1 h-1 rounded-full bg-muted-foreground/60"></span>
        <span className="text-muted-foreground">
          {Math.ceil(summary.length / 100)} min read
        </span>
      </div>
    </article>
  );
}
