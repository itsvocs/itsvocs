import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: {
    default: "Merci de votre abonement ",
    template: "%s - Vocs Pouani",
  },
  description:
    "Vous ne serez pas du tout de recevoir chaque semaine une notification vousignalent qu'un nouvel article est mis en ligne ",
};

export default function Thankyou() {
  return (
    <div className="relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8 body-bg min-h-screen">
      {/* <div className="absolute inset-0 text-slate-800 [mask-image:linear-gradient(to_bottom_left,white,transparent,transparent)]">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid-bg"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="100%"
              patternTransform="translate(0 -1)">
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-bg)"></rect>
        </svg>
      </div> */}
      <div className="relative flex flex-1 flex-col items-center justify-center pb-16 pt-12 mt-32">
        <Image
          src="/image.png"
          alt="logo du site"
          className="mx-auto mb-16 h-10 w-auto text-slate-900"
          width={500}
          height={500}
        />
        <div className="max-w-2xl text-center">
          <h1 className="text-3xl font-extrabold text-slate-50 sm:text-4xl">
            Merci! vérifiez votre e-mail…
          </h1>
          <div className="mt-6 text-base leading-7 text-slate-300">
            Vous devriez bientôt recevoir un e-mail de confirmation, ouvrez-le
            et{" "}
            <strong className="font-semibold text-slate-50">
              cliquez sur le bouton "Confirmer votre abonnement"
            </strong>{" "}
            afin que nous puissions vous tenir au courant.
          </div>
          <Link
            className="inline-flex justify-center rounded-lg text-sm font-semibold py-2.5 px-4 bg-indigo-700 text-white hover:bg-indigo-500 transition-colors mt-6"
            href="/blog">
            <span>J'ai validé</span>
          </Link>
        </div>
      </div>
      <footer className="relative shrink-0 mt-32">
        <div className="relative z-10 flex flex-none items-start justify-center">
          <svg width="32" height="32" fill="none" className="flex-none">
            <path
              d="M8.75 3.5H22V2H8.75v1.5zM3.5 23.25V8.75H2v14.5h1.5zM23 28.5h-2V30h2v-1.5zm-12 0H8.75V30H11v-1.5zm10 0h-5V30h5v-1.5zm-5 0h-5V30h5v-1.5zM2 23.25A6.75 6.75 0 008.75 30v-1.5a5.25 5.25 0 01-5.25-5.25H2zM23 30a5 5 0 005-5h-1.5a3.5 3.5 0 01-3.5 3.5V30zM22 3.5A4.5 4.5 0 0126.5 8H28a6 6 0 00-6-6v1.5zM8.75 2A6.75 6.75 0 002 8.75h1.5c0-2.9 2.35-5.25 5.25-5.25V2z"
              className="fill-red-50/50"></path>
            <path
              d="M14.75 12.75a2 2 0 012-2h10.5a2 2 0 012 2v7.5a2 2 0 01-2 2h-10.5a2 2 0 01-2-2v-7.5z"
              className="stroke-slate-300"
              strokeWidth="1.5"></path>
            <path
              d="M15.5 11.5l4.512 3.992a3 3 0 003.976 0L28.5 11.5"
              className="stroke-slate-300"
              strokeWidth="1.5"></path>
            <path
              d="M9 11v4M9 19v.01"
              className="stroke-red-700/60"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"></path>
          </svg>
          <p className="ml-6 max-w-lg flex-auto text-sm text-slate-300 font-light">
            <span className="font-semibold text-red-500/75">
              Vous ne le voyez pas encore ?
            </span>{" "}
            Il se trouve peut-être dans votre dossier spam - si c'est le cas,
            assurez-vous de cliquer sur "pas de spam" pour que nos mises à jour
            arrivent réellement dans votre boîte de réception.
          </p>
        </div>
      </footer>
    </div>
  );
}
