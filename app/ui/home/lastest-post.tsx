import { formatDate, getBlogPosts } from "@/lib/blog/utils";
import Link from "next/link";
import CategoryBadge from "../Badge";
import Image from "next/image";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

export default function LastestPosts() {
  const latestPosts = getBlogPosts();

  const firstBlog = latestPosts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(0, 1);

  const posts = latestPosts
    .sort((a, b) => {
      if (new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)) {
        return -1;
      }
      return 1;
    })
    .slice(1, 5);
  return (
    <div className="dark:bg-black py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 mb-10">
          <h2 className="text-pretty font-heading text-4xl font-bold tracking-tight  sm:text-5xl">
            Aus dem Blog
          </h2>
          <p className="mt-2 text-lg/8 text-muted-foreground">
            Entdecke meine Einblicke in KI, medizinische Informatik und
            aufstrebende Technologien.
          </p>
        </div>
        <div className="flex max-w-2xl flex-col items-start  justify-center lg:justify-between gap-16 lg:m-0 lg:max-w-none lg:flex-row border-t pt-10 mx-auto">
          {firstBlog.map((i, j) => (
            <div
              key={j}
              className="w-full max-w-lg lg:flex-auto relative group">
              <h2 className="text-3xl font-semibold tracking-tight text-pretty text-foreground">
                {i.metadata.title}
              </h2>

              <div className="py-2">
                <CategoryBadge category={i.metadata.category} />
              </div>
              <p className="mt-4 text-muted-foreground">{i.metadata.summary}</p>

              <div className="flex items-center gap-x-3 text-sm pt-2">
                <time
                  dateTime={formatDate(i.metadata.publishedAt, true)}
                  className="text-muted-foreground/60">
                  {formatDate(i.metadata.publishedAt, true)}
                </time>
                <Link
                  href={`/blog/${i.metadata.category}/${i.slug}`}
                  className="flex items-center text-muted-foreground group-hover:text-foreground transition-colors">
                  <span className="absolute inset-0 "></span>
                  weiter lesen{" "}
                  <ArrowRight
                    size={36}
                    className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                  />
                </Link>
              </div>
              <Image
                src={i.metadata.img}
                alt={i.metadata.title}
                width={512}
                height={512}
                className="mt-8 aspect-[6/5] w-full rounded-2xl bg-background object-cover lg:aspect-auto lg:h-[34.5rem]"
              />
            </div>
          ))}
          <div className="w-full lg:max-w-xl lg:flex-auto">
            <ul className="lg:-m-8">
              {posts.map((i, j) => (
                <li key={j} className="py-8">
                  <dl className="relative flex flex-wrap gap-x-3 group">
                    <dd className="w-full flex flex-wrap font-semibold tracking-tight text-foreground items-center gap-x-3">
                      <Link href={`/blog/${i.slug}`}>
                        <span className="absolute inset-0"></span>
                        {i.metadata.title}
                      </Link>
                      <CategoryBadge category={i.metadata.category} />
                    </dd>
                    <dd className="mt-2 w-full flex-none text-sm text-muted-foreground ">
                      {i.metadata.summary}
                    </dd>

                    <dd className="mt-4 text-sm">
                      <Link
                        href={`/blog/${i.metadata.category}/${i.slug}`}
                        className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                        <span className="absolute inset-0 "></span>
                        weiter lesen{" "}
                        <ArrowRight
                          size={36}
                          className="ml-1 size-3 pt-px transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
                        />
                      </Link>
                    </dd>
                    <dd className="mt-4 text-sm ">
                      <time
                        dateTime={formatDate(i.metadata.publishedAt, true)}
                        className="text-muted-foreground/60">
                        {formatDate(i.metadata.publishedAt, false)}
                      </time>
                    </dd>
                  </dl>
                </li>
              ))}
              <Link
                href="/blog"
                className="text-muted-foreground hover:text-foreground/80 transition-colors text-sm">
                Alle Beiträge ansehen
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
