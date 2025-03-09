import React from "react";
import Image from "next/image";
import image from "../icons/itsvocs.png";
import TechComponent from "../ui/home/TechComponent";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Über Vocs Pouani | Medizinische Informatik & KI-Entwicklung",
  description:
    "Lernen Sie Vocs Pouani kennen - Medizininformatik-Student mit Leidenschaft für KI, innovative Technologien und deren Anwendung im Gesundheitswesen. Entdecken Sie meine Projekte und Fachkenntnisse.",
  keywords:
    "Vocs Pouani, Medizinische Informatik, KI, Künstliche Intelligenz, Gesundheitswesen, Technologie, Informatik, Entwickler, Portfolio",
  openGraph: {
    title: "Über Vocs Pouani | Medizinische Informatik & KI-Entwicklung",
    description:
      "Medizininformatik-Student mit Leidenschaft für KI und innovative Technologien im Gesundheitswesen",
    images: [
      {
        url: "/social/website.png", // Erstelle ein passendes Bild für Social Media Shares
        width: 1200,
        height: 630,
        alt: "Vocs Pouani - Profil",
      },
    ],
    type: "website",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://deinewebsite.de/about",
  },
  authors: [{ name: "Vocs Pouani" }],
};

export default function About() {
  return (
    <main className=" mx-auto px-4 py-12 max-w-5xl pt-32 dark:bg-black">
      <section className="mb-16">
        <h1 className="text-4xl font-bold mb-6 font-heading">Über mich</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/3">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden  ">
              <Image
                src={image}
                alt="Photo de profil"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
          <div className="md:w-2/3">
            <h2 className="text-xl font-medium mb-4"> Ich bin Vocs Pouani</h2>
            <p className="mb-4 text-base/7 text-muted-foreground">
              ich studiere derzeit Medizinische Informatik an der Technischen
              Hochschule Mittelhessen. Meine Leidenschaft gilt der Informatik –
              besonders den neuesten Technologien und ihrer Integration in den
              Alltag, um menschliche Grenzen zu erweitern und innovative
              Lösungen zu schaffen, insbesondere im Gesundheitswesen.
            </p>
            <p className="mb-4 text-base/7 text-muted-foreground">
              Mein größter Traum ist es, einen bedeutenden Beitrag zu leisten –
              ganz gleich, wie klein er zunächst erscheinen mag. Künstliche
              Intelligenz fasziniert mich besonders. In meiner Freizeit
              beschäftige ich mich intensiv damit, experimentiere mit neuen
              Konzepten und entwickle eigene Projekte. Einige davon teile ich
              auf meiner Website, zusammen mit Artikeln zu Themen, die mich
              inspirieren und die ich für relevant halte.
            </p>
            <div className="inline-flex items-center gap-2 mt-8">
              <Button variant="ghost">Meine Projekte</Button>
              <Button>Lebenslauf herunterladen</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-bold mb-32 font-heading">Meine Skills</h2>
        <TechComponent />
      </section>
    </main>
  );
}
