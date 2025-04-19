import Lastestpost from "./ui/home/lastest-post";
import PopularPosts from "./ui/home/popular-posts";
import { NewsLetter } from "./ui/home/NewsLetter";
import FeaturedComponent from "./ui/project/FeaturedProject";
import { Spotlight } from "@/components/ui/spotlight-new";

export default async function Home() {
  return (
    <div className="relative">
      <div className="hi h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-white  dark:bg-black/[0.96] antialiased dark:bg-grid-white/[0.02] bg-grid-black/[0.02] relative overflow-hidden ">
        <Spotlight />
        <div className=" p-4 max-w-7xl mx-auto relative z-10  w-full pt-36 md:pt-0 flex flex-col justify-center items-center gap-y-4">
          <h1 className="text-5xl md:text-7xl font-black text-center bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 from-neutral-900 to-neutral-500 bg-opacity-50 font-heading">
            Hello World, <br /> I&apos;m Jo.
          </h1>
          <p className="mt-4 font-normal text-lg text-muted-foreground max-w-xl text-center mx-auto">
            Informatikstudent mit einer Leidenschaft für KI – spezialisiert auf
            Informatik und Modellierung für eine sich wandelnde Welt.
          </p>
          <PopularPosts />
        </div>
      </div>
      <Lastestpost />
      <FeaturedComponent />
      <NewsLetter />
    </div>
  );
}
