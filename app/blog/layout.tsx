import type { Metadata } from "next";
import { NewsLetter } from "../ui/home/NewsLetter";
import Header from "../ui/blog/Header";

export const metadata: Metadata = {
  title: "Blog | Vocs Pouani - Webentwicklung, KI und Programmier-Einblicke",
  description:
    "Entdecke Expertenbeiträge zu Webentwicklung, KI, Programmier-Best-Practices und Technologietrends. Bleibe auf dem neuesten Stand der Softwareentwicklung.",
  keywords:
    "Webentwicklung, Programmierung, KI, React, JavaScript, Softwareentwicklung, Tech-Blog App Entwicklung und Python",
  openGraph: {
    title: "Vocs Pouani Blog - Webentwicklung & Programmier-Einblicke",
    description:
      "Expertenbeiträge zu Webentwicklung, KI, Programmier-Best-Practices und Technologietrends.",
    type: "website",
    url: "https://itsvocs.com/blog",
    images: [{ url: "/social/website.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocs Pouani Blog - Webentwicklung & Programmier-Einblicke",
    description:
      "Expertenbeiträge zu Webentwicklung, KI, Programmier-Best-Practices und Technologietrends.",
    images: ["/social/website.png"],
  },
  alternates: {
    canonical: "https://itsvocs.com/blog",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="py-24 sm:py-32 dark:bg-black">
      <Header />
      {children}
      <NewsLetter />
    </main>
  );
}
