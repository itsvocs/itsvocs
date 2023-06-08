"use client";
import React from "react";
import Particles from "@/app/components/utils/part";
import { InformationCircleIcon } from "@heroicons/react/20/solid";
import {
  BuildingOffice2Icon,
  EnvelopeIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import ContactForm from "@/app/components/utils/Contact";
import Header from "../components/base/Header";
import Footer from "../components/base/Footer";

// export const metadata: Metadata = {
//   title: "Contact ",
//   description:
//     "Contactez-nous pour toutes vos questions, commentaires ou collaborations ! Notre page de contact est le meilleur moyen de nous joindre. Obtenez une réponse rapide de notre équipe experte et découvrez comment nous pouvons vous aider à atteindre vos objectifs. Ne manquez pas cette opportunité, contactez-nous dès maintenant !",
// };

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="w-full lg:overflow-y-hidden">
        <div className="isolate relative">
          <div className="grid max-w-7xl mx-auto grid-cols-1 lg:grid-cols-2">
            <div className="py-24 px-4 md:py-44 sm:px-8 relative lg:static w-full">
              <div className="lg:max-w-lg max-w-2xl mx-auto lg:mx-0">
                <div className="w-full absolute inset-y-0 left-0 -z-10 shadow lg:w-1/2 overflow-hidden ring-white/5 ">
                  <svg
                    className="stroke-gray-800 w-full h-full inset-0 absolute web-mask"
                    aria-hidden="true">
                    <defs>
                      <pattern
                        id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
                        width="200"
                        height="200"
                        x="100%"
                        y="-1"
                        patternUnits="userSpaceOnUse">
                        <path d="M130 200V.5M.5 .5H200" fill="none"></path>
                      </pattern>
                    </defs>
                    <svg
                      x="100%"
                      y="-1"
                      className="fill-indigo-400/20 overflow-visible">
                      <path d="M-470.5 0h201v201h-201Z" strokeWidth="0"></path>
                    </svg>
                    <rect
                      width="100%"
                      height="100%"
                      strokeWidth="0"
                      fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"></rect>
                  </svg>
                  <div
                    className="absolute -left-64 top-[calc(100%-13rem)] md:top-1/2 blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] transform-gpu"
                    aria-hidden="true">
                    <div
                      className="aspect-[1555/678] w-[78rem] bg-gradient-to-br from-cyan-500 to-indigo-600  opacity-30"
                      style={{
                        clipPath:
                          "polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
                      }}></div>
                  </div>
                </div>
                <h2 className="text-5xl font-bold tracking-tight font-display text-white">
                  Prendre contact
                </h2>
                <p className="text-lg text-slate-300 leading-8 mt-8">
                  N&#39;attendez plus, saisissez cette opportunité et prenez
                  contact dès maintenant. Je suis enthousiaste à l&#39;idée de
                  travailler avec vous et de faire de votre projet un véritable
                  succès.
                </p>
                <dl className="mt-6 text-base gap-y-4 flex flex-col leading-7 text-gray-300">
                  <div className="gap-x-4 flex  w-full">
                    <dt className="flex-none">
                      <span className="sr-only">Address</span>
                      <BuildingOffice2Icon className="w-6 h-6 text-gray-400" />
                    </dt>
                    <dd className="">
                      Straße* * * * * *
                      <br />
                      Gießen, 3**** Germany
                    </dd>
                    <span className="flex group items-center cursor-pointer ">
                      <InformationCircleIcon className="min-w-[20px] w-5 h-5 mr-3" />
                      <span className="opacity-0 sr-only group-hover:opacity-100 group-hover:not-sr-only ease-in-out transition-opacity text-xs text-indigo-100 overflow-hidden">
                        Pour des raisons de sécurités l&#39;adresse restera
                        cachée
                      </span>
                    </span>
                  </div>
                  <div className="gap-x-4  flex">
                    <dt className="flex-none">
                      <span className="sr-only">Telephone</span>
                      <PhoneIcon className="w-6 h-6 text-gray-400" />{" "}
                    </dt>
                    <dd>
                      <Link
                        className="decoration-inherit text-inherit"
                        href="tel:+49 (176) 749-76674">
                        +49 (176) 749-76674
                      </Link>
                    </dd>
                  </div>
                  <div className="gap-x-4  flex">
                    <dt className="flex-none">
                      <span className="sr-only">Email</span>
                      <EnvelopeIcon className="w-6 h-6 text-gray-400" />{" "}
                    </dt>
                    <dd>
                      <Link
                        className="decoration-inherit text-inherit"
                        href="mailto:pouanivocs@gmail.com">
                        pouanivocs@gmail.com
                      </Link>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <Particles className="absolute inset-0 -z-10" quantity={200} />
            <ContactForm />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
