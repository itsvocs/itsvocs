import Markdown from "markdown-to-jsx";
import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import {
  BookOpenIcon,
  ChevronLeftIcon,
  RssIcon,
} from "@heroicons/react/20/solid";
import { FaGithub } from "react-icons/fa";
import { SiTwitter } from "react-icons/si";
import SvgComponent from "@/app/components/svgComponent";
import getPostMetadata from "@/util/getPostMetadata";
import Image from "next/image";
import { Metadata } from "next";
import Newsletter from "@/app/components/utils/Newsletter";
import generateRssFeed from "@/util/generateRSSFeed";
import Comments from "@/app/components/utils/Comments";

const getPostContent = (slug: string) => {
  const folder = "posts/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
};

export const generateStaticParams = async () => {
  await generateRssFeed();
  const posts = getPostMetadata();
  return posts.map((post) => ({
    slug: post.slug,
  }));
};

interface Props {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const slug = params.slug;

  // fetch data
  const post = getPostContent(slug);

  // optionally access and extend (rather than replace) parent metadata
  //const previousImages = (await parent).openGraph?.images || [];

  return {
    title: post.data.title,
    // openGraph: {
    //   images: ['/some-specific-page-image.jpg', ...previousImages],
    // },
  };
}

const PostPage: React.FC = (props: any) => {
  const slug = props.params.slug;
  const post = getPostContent(slug);
  return (
    <>
      <div>
        <div className="relative flex-none overflow-hidden px-6 lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden bg-black lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem]">
            <svg
              className="absolute -bottom-48 left-[-40%] h-[80rem] w-[180%] lg:-right-40 lg:bottom-auto lg:left-auto lg:top-[-40%] lg:h-[180%] lg:w-[80rem]"
              aria-hidden="true">
              <defs>
                <radialGradient id=":R1d6:-desktop" cx="100%">
                  <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)"></stop>
                  <stop
                    offset="53.95%"
                    stopColor="rgba(0, 71, 255, 0.09)"></stop>
                  <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"></stop>
                </radialGradient>
                <radialGradient id=":R1d6:-mobile" cy="100%">
                  <stop offset="0%" stopColor="rgba(56, 189, 248, 0.3)"></stop>
                  <stop
                    offset="53.95%"
                    stopColor="rgba(0, 71, 255, 0.09)"></stop>
                  <stop offset="100%" stopColor="rgba(10, 14, 23, 0)"></stop>
                </radialGradient>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#:R1d6:-desktop)"
                className="hidden lg:block"></rect>
              <rect
                width="100%"
                height="100%"
                fill="url(#:R1d6:-mobile)"
                className="lg:hidden"></rect>
            </svg>
            <div className="absolute inset-x-0 bottom-0 right-0 h-px bg-white mix-blend-overlay lg:left-auto lg:top-0 lg:h-auto lg:w-px"></div>
          </div>
          <div className="relative flex w-full lg:pointer-events-auto lg:mr-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-y-auto lg:overflow-x-hidden lg:pl-[max(4rem,calc(50%-38rem))]">
            <div className="mx-auto max-w-lg lg:mx-0 lg:flex lg:w-96 lg:max-w-none lg:flex-col lg:before:flex-1 lg:before:pt-6">
              <Link
                href="/blog"
                className="text-slate-200 flex items-center text-sm font-semibold leading-6 hover:text-indigo-400 mt-16">
                <ChevronLeftIcon className="h-5 stroke-2 w-auto mr-2" />{" "}
                Retourner
              </Link>
              <div className="pb-16 pt-20 sm:pb-20 sm:pt-32 lg:py-20">
                <div className="relative">
                  <SvgComponent />
                  <div>
                    <Link
                      href="/"
                      className="w-full flex text-5xl justify-start items-center text-white">
                      <Image
                        src="/image.png"
                        alt="logo du site"
                        className="inline-block w-14 text-white hover:text-indigo-400"
                        width={500}
                        height={500}
                      />
                      <span className="px-4 mb-2 font-display text-4xl/tight font-light">
                        vocs pouani
                      </span>
                    </Link>
                  </div>
                  <h1 className="mt-14 text-4xl/tight font-semibold text-white">
                    Soyez à l&#39;affût,{" "}
                    <span className="text-indigo-400">
                      Inscrivez-vous à la newsletter.
                    </span>
                  </h1>
                  <p className="mt-4 text-sm/6 text-gray-300">
                    Nous postons au moins un article chaque semaine, soyez
                    notifié dès qu&#39;un nouvel article est mis en ligne en
                    vous inscrvant à la newsletter.
                  </p>
                  <Newsletter />
                  <div className="mt-8 flex flex-wrap justify-center gap-x-1 gap-y-3 sm:gap-x-2 lg:justify-start">
                    <a
                      className="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-indigo-300 gap-x-3"
                      href="/#">
                      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                      <BookOpenIcon className="flex-none h-4 w-4" />
                      <span className="self-baseline text-white">
                        voir les sources
                      </span>
                    </a>
                    <a
                      className="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-indigo-300 gap-x-3"
                      href="/#">
                      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                      <FaGithub className="flex-none text-base" />
                      <span className="self-baseline text-white">GitHub</span>
                    </a>
                    <a
                      className="flex-none group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-indigo-300 gap-x-3"
                      href="/rss/feed.xml">
                      <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                      <RssIcon className="flex-none h-4 w-4" />
                      <span className="self-baseline text-white">RSS</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 items-end justify-center pb-4 lg:justify-start lg:pb-6">
                <p className="flex items-baseline gap-x-2 text-[0.8125rem]/6 text-gray-500">
                  Rédigé par{" "}
                  <Link
                    className="group relative isolate flex items-center rounded-lg px-2 py-0.5 text-[0.8125rem]/6 font-medium text-white/30 transition-colors hover:text-indigo-300 gap-x-2"
                    href="/">
                    <span className="absolute inset-0 -z-10 scale-75 rounded-lg bg-white/5 opacity-0 transition group-hover:scale-100 group-hover:opacity-100"></span>
                    <SiTwitter className="flex-none text-lg" />
                    <span className="self-baseline text-white">
                      Vocs Pouani
                    </span>
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative flex-auto">
          <div className="pointer-events-none absolute inset-0 z-50 overflow-hidden lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] lg:overflow-visible">
            <svg
              className="absolute left-[max(0px,calc(50%-18.125rem))] top-0 h-full w-1.5 lg:left-full lg:ml-1 xl:left-auto xl:right-1 xl:ml-0"
              aria-hidden="true">
              <defs>
                <pattern
                  id=":R1t6:"
                  width={6}
                  height={8}
                  patternUnits="userSpaceOnUse">
                  <path
                    d="M0 0H6M0 8H6"
                    className="stroke-indigo-900/10 dark:stroke-white/10 xl:stroke-white/10"
                    fill="none"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#:R1t6:)" />
            </svg>
          </div>
          <main className="space-y-20 py-20 sm:space-y-32 sm:py-32">
            <article className="scroll-mt-16">
              <div>
                <header className="relative mb-10 xl:mb-0">
                  <div className="pointer-events-none absolute left-[max(-0.5rem,calc(50%-18.625rem))] top-0 z-50 flex h-4 items-center justify-end gap-x-2 lg:left-0 lg:right-[calc(max(2rem,50%-38rem)+40rem)] lg:min-w-[32rem] xl:h-8">
                    <a
                      className="inline-flex"
                      href="/#commit-message-suggestions">
                      <time
                        dateTime="2023-04-06T00:00:00.000Z"
                        className="hidden xl:block text-xs xl:font-medium xl:text-white/50">
                        {post.data.date}
                      </time>
                    </a>
                    <div className="h-[0.0625rem] w-3.5 bg-gray-400 lg:-mr-3.5 xl:mr-0 xl:bg-gray-300"></div>
                  </div>
                  <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                    <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                      <div className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto">
                        <div className="flex">
                          <a
                            className="inline-flex"
                            href="/#commit-message-suggestions">
                            <time
                              dateTime="2023-04-06T00:00:00.000Z"
                              className="text-xs font-medium text-gray-500 dark:text-white/50 xl:hidden">
                              {post.data.date}
                            </time>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </header>
                <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
                  <div className="lg:ml-96 lg:flex lg:w-full lg:justify-end lg:pl-32">
                    <article className="mx-auto max-w-lg lg:mx-0 lg:w-0 lg:max-w-xl lg:flex-auto typography">
                      <Markdown>{post.content}</Markdown>
                      <Comments slug={slug} />
                    </article>
                  </div>
                </div>
              </div>
            </article>
          </main>
        </div>
      </div>
    </>
  );
};

export default PostPage;
