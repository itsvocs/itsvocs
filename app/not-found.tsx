export default function Custom404() {
  return (
    <main className="flex w-full h-full items-center justify-center min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8 body-bg">
      <div className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-200 sm:text-5xl">
          Page introuvable :(
        </h1>
        <p className="mt-6 text-base leading-7 text-slate-300">
          Désolé, nous n’avons pas trouvé la page que vous cherchez.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Page d’acceuil
          </a>
          <a
            href="#"
            className="text-sm  text-slate-300 hover:text-red-400 transition-colors group">
            Signaler une erreur{" "}
            <span
              aria-hidden="true"
              className="group-hover:translate-x-1 translate-x-0 transition-transform ease-out">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </main>
  );
}
