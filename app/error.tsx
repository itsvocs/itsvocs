"use client"; // Error components must be Client Components

import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex w-full h-full items-center justify-center min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 body-bg">
      <div className="text-center">
        <p className="text-base font-semibold text-red-600 tracking-wider">
          ERREUR
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Une erreur s'est produite :(
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-300">
          Désolé, nous n’avons pas pu afficher la page demandée.{" "}
          <button className="text-indigo-500">voir l'erreur</button>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-8">
          <a
            href="/blog"
            className="text-indigo-400 group font-semibold ease-in-out hover:text-indigo-300 flex items-center">
            <ArrowLeftIcon className="w-4 mr-1 translate-x-0 group-hover:-translate-x-1 ease-in-out duration-700 transition-transform" />
            <span>Acceuil</span>
          </a>
          <button
            className="text-sm font-semibold text-red-500 hover:text-red-400 group flex items-center"
            onClick={() => reset()}>
            Réessayer
            <ArrowPathIcon className="rotate-0 group-hover:rotate-90 ml-2 duration-700 transition-transform ease-out w-5" />
          </button>
        </div>
      </div>
    </main>
  );
}
