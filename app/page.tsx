"use client";
import Link from "next/link";
import React from "react";
import Particles from "./components/utils/part";
import Header from "./components/base/Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-slate-600/20 to-black">
        <div className="relative rounded-full sm:px-3 px-1 py-1 mb-6 text-xs sm:text-sm sm:leading-6 text-slate-300 hover:text-slate-200 ring-1 ring-white/10 hover:ring-white/20 animate-fade-in">
          Jeter un oeuil sur ma bio et mon parcours actuel.{" "}
          <Link href="/blog" className="font-medium text-indigo-300">
            <span className="absolute inset-0" aria-hidden="true" />
            voir plus <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-neutral-300/0 via-neutral-300/50 to-neutral-300/0" />
        <Particles
          className="absolute inset-0 -z-10 animate-fade-in"
          quantity={200}
        />
        <h1 className="z-10 text-5xl text-transparent duration-1000 bg-white cursor-default text-edge-outline animate-title font-display sm:text-7xl md:text-9xl whitespace-nowrap bg-clip-text tracking-wide">
          vocs pouani
        </h1>
        <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-neutral-300/0 via-neutral-300/50 to-zinc-300/0" />

        <div className="my-16 text-center animate-fade-in px-3 py-1 mb-6 text-xs sm:text-sm">
          <h2 className="text-slate-300 ">
            Salut ! Je suis un étudiant en informatique médicale à l'université
            de Gießen en Allemagne. Je suis passionné par l'informatique et tout
            ce qui concerne la technologie. Venez jeter un coup d'œil à{" "}
            <Link href="/" className="link">
              mon blog
            </Link>
            !
          </h2>
        </div>
      </div>
    </>
  );
}
