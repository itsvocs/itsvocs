import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";
import Particles from "@/app/components/utils/part";
import Image from "next/image";
import { Metadata } from "next";
import Newsletter from "@/app/components/utils/Newsletter";
import { ArrowDownIcon } from "@heroicons/react/20/solid";
import Link from "next/link";

export const metadata: Metadata = {
  title: "A propos",
  description:
    "Je suis Vocs Pouani je suis étudiant à l'université de Gießen, en Allemagne, où je poursuis des études en médecine informatique. Originaire du Cameroun, J'ai toujours été fasciné par les phénomènes innovants, en particulier dans le domaine informatique. ",
};

export default function MePage() {
  return (
    <div>
      <Particles className="absolute inset-0 -z-10 " quantity={50} />
      <main className="">
        <div className="sm:px-8 mt-32 sm:mt-44 ">
          <div className="mx-auto max-w-7xl lg:px-8 ">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-6xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <Image
                        alt="Image du visage vocs pounai en noir sur blanc "
                        loading="lazy"
                        width="800"
                        height="800"
                        decoding="async"
                        data-nimg="1"
                        className="aspect-square rotate-3 rounded-full sm:rounded-2xl bg-slate-950 shadow-lg object-cover bg-cover bg-opacity-75"
                        style={{ color: "transparent" }}
                        src="/img/pouani-vocs2.png"
                      />
                    </div>

                    <a
                      className="inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none bg-slate-50 font-medium text-slate-900 hover:bg-slate-100 active:bg-slate-100 active:text-slate-900/60 dark:bg-slate-800/50 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-slate-50 dark:active:bg-slate-800/50 dark:active:text-slate-50/70 group mt-6 w-full"
                      href="/lebenslauf.pdf"
                      download="Vocs Pouani - Lebenslauf">
                      Télécharger le CV
                      <ArrowDownIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-slate-600 dark:group-hover:stroke-slate-50 dark:group-active:stroke-slate-50" />
                    </a>
                  </div>

                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight text-slate-100 sm:text-5xl">
                      Découvrez-moi et mes passions.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-slate-300 font-light leading-7 typography">
                      <p>
                        Je m&#39;appelle <strong> Vocs Pouani</strong>, je suis
                        étudiant à l&#39;université de Gießen, en Allemagne, où
                        je poursuis des études en médecine informatique.
                        Originaire du Cameroun, J&#39;ai toujours été fasciné
                        par les phénomènes innovants, en particulier dans le
                        domaine informatique. Cependant, ma passion pour{" "}
                        <Link href="/blog">
                          la médecine moderne, l&#39;anatomie et le
                          fonctionnement du corps humain
                        </Link>{" "}
                        a également grandement influencé mes choix d&#39;études.
                        Mon objectif de vie est de combiner ou de participer à
                        la combinaison de ces deux domaines, l&#39;informatique
                        (notamment avec l&#39;avènement de l&#39;IA) et la
                        médecine, afin de faciliter l&#39;émancipation complète
                        de l&#39;Homme.
                      </p>
                      <p>
                        Dès mon enfance, j&#39;ai été captivé par la manière
                        dont notre corps fonctionne et se régénère de lui-même.
                        Je trouve fascinant d&#39;explorer comment les avancées
                        technologiques, notamment dans le domaine de
                        l&#39;informatique, peuvent être utilisées pour
                        améliorer les soins de santé et faciliter la vie des
                        individus. Mon choix d&#39;étudier la médecine
                        informatique découle de cette passion et de mon désir de
                        contribuer à l&#39;intersection entre ces deux domaines.
                      </p>
                      <p>
                        J&#39;ai eu la chance de participer à plusieurs projets
                        mineurs (
                        <a
                          href="https://www.github.com/itsvocs"
                          target="_blank">
                          voir mon profil github
                        </a>
                        ) qui m&#39;ont permis de mettre en pratique mes
                        connaissances en médecine informatique. Grâce à mon
                        intérêt pour{" "}
                        <strong>la programmation web et ses derivées</strong> ,
                        je possède des compétences solides dans ce domaine. De
                        plus, je suis familier avec des langages tels que{" "}
                        <strong>Java et Python</strong>, qui sont essentiels
                        pour le <Link href="/blog">machine learning</Link> et{" "}
                        <Link href="/blog">
                          l&#39;intelligence artificielle
                        </Link>
                        . Ces derniers suscitent également un grand intérêt chez
                        moi, car ils ouvrent des perspectives passionnantes pour
                        l&#39;avenir.
                      </p>
                      <p>
                        <strong>Mon objectif ultime</strong> est d&#39;exploiter
                        les possibilités offertes par{" "}
                        <strong> l&#39;IA </strong>
                        et les avancées technologiques en informatique pour
                        améliorer les soins de santé et le bien-être des
                        individus. Je crois fermement que la combinaison de
                        l&#39;informatique et de la médecine peut ouvrir de
                        nouvelles voies dans la recherche médicale,
                        l&#39;analyse des données médicales, la personnalisation
                        des traitements et bien d&#39;autres domaines. Par
                        exemple,{" "}
                        <span>
                          je suis intéressé par le développement
                          <strong className="underline underline-offset-1">
                            {" "}
                            d&#39;applications intelligentes
                          </strong>{" "}
                          capables d&#39;assister les médecins dans leurs
                          diagnostics, d&#39;accélérer la découverte de nouveaux
                          médicaments
                        </span>{" "}
                        ou encore d&#39;améliorer les systèmes de gestion des
                        dossiers médicaux.
                      </p>
                      <p>
                        Je suis passionné par la médecine informatique et par
                        les opportunités qu&#39;elle offre pour repousser les
                        limites de la médecine moderne. Sur ce blog, je
                        partagerai mes réflexions, mes découvertes et mes
                        expériences dans ce domaine en constante évolution.
                        Rejoignez-moi dans cette aventure passionnante où
                        l&#39;informatique et la médecine se rencontrent pour
                        façonner un avenir meilleur pour tous.
                      </p>
                      <h4 className="font-semibold">
                        Soyez à l&#39;affût de toutes les publications,{" "}
                        Inscrivez-vous à la newsletter.
                      </h4>
                      <div className="not-prose">
                        <Newsletter />
                      </div>
                      <p className="text-sm">
                        Nous nous soucions et respectons vos données.{" "}
                        <Link href="/privacy-policy">
                          Lisez notre politique de confidentialité.
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="lg:pl-20">
                    <ul role="list">
                      <li className="flex">
                        <a
                          className="group flex text-sm font-medium text-gray-500 transition hover:text-indigo-400"
                          href="/about#">
                          <FaTwitter className="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-indigo-400" />
                          <span className="ml-4">Suivre sur Twitter</span>
                        </a>
                      </li>
                      <li className="mt-4 flex">
                        <a
                          className="group flex text-sm font-medium text-gray-500 transition hover:text-indigo-400"
                          href="/about#">
                          <FaInstagram className="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-indigo-400" />

                          <span className="ml-4">Suivre sur Instagram</span>
                        </a>
                      </li>
                      <li className="mt-4 flex">
                        <a
                          className="group flex text-sm font-medium text-gray-500 transition hover:text-indigo-400"
                          href="/about#">
                          <FaGithub className="h-5 w-5 flex-none fill-gray-500 transition group-hover:fill-indigo-400" />
                          <span className="ml-4">Suivre sur GitHub</span>
                        </a>
                      </li>
                      <li className="mt-8 border-t border-gray-400 pt-8 flex">
                        <a
                          className="group flex text-sm font-medium text-gray-500 transition hover:text-indigo-400 "
                          href="mailto:pouanivocs@gmail.com">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none fill-gray-500 transition group-hover:fill-indigo-400">
                            <path
                              fillRule="evenodd"
                              d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"></path>
                          </svg>
                          <span className="ml-4">pouanivocs@gmail.com</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
