import Link from "next/link";
import { PostMetadata } from "@/util/PostMetadata";
import { ArrowSmallRightIcon } from "@heroicons/react/20/solid";

const PostPreview = (props: PostMetadata) => {
  return (
    <article
      key={props.slug}
      className="flex max-w-xl flex-col items-start justify-between">
      <div className="flex items-center gap-x-4 text-xs">
        <time
          // dateTime={props.datetime}
          className="text-gray-500">
          {props.date}
        </time>
        <span
          className={`inline-flex items-center rounded-2xl  px-2.5 py-1 text-xs font-medium  ring-1 ring-inset   ${
            props.category === "IA"
              ? "text-amber-600 ring-amber-700/20 bg-amber-600/10"
              : props.category === "Technologie"
              ? "text-red-500 ring-red-700/20 bg-red-600/10"
              : props.category === "Developpement Web"
              ? "text-blue-600 ring-blue-700/20 bg-blue-600/10"
              : props.category === "Medecine"
              ? "text-green-600 ring-green-700/20 bg-green-600/10"
              : "text-purple-600 ring-purple-700/20 bg-purple-600/10"
          }`}>
          {props.category}
        </span>
      </div>
      <Link href={`/blog/${props.slug}`} className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-slate-100 ">
          <span className="absolute inset-0" />
          {props.title}
        </h3>
        <p className="mt-5 line-clamp-3 text-[15px] leading-7 text-slate-300">
          {props.subtitle}
        </p>
        <span className="text-indigo-400 flex items-center text-sm mt-4 group-hover:text-indigo-200">
          <span>En savoir plus</span>
          <ArrowSmallRightIcon className="w-6 h-5 pt-px ml-1.5 text-indigo-400 translate-x-0 group-hover:translate-x-1 duration-700 ease-in-out transition-all group-hover:text-indigo-200 stroke-2" />
        </span>
      </Link>
    </article>
  );
};

export default PostPreview;
