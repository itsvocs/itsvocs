import type { Metadata } from "next";
import { NewsLetter } from "../ui/home/NewsLetter";
export const metadata: Metadata = {
  title: "Meine Projekte | Portfolio & Entwicklungsarbeiten",
  description:
    "Entdecken Sie meine vielfältigen Entwicklungsprojekte mit detaillierten Beschreibungen, verwendeten Technologien und Live-Demos. Mein Portfolio umfasst Web-Anwendungen, Mobile Apps und mehr.",
  keywords: [
    "Webentwicklung",
    "Softwareprojekte",
    "Portfolio",
    "Programmierung",
    "Frontend",
    "Backend",
    "Fullstack",
    "React",
    "Next.js",
  ],
  openGraph: {
    title: "Meine Projekte | Portfolio & Entwicklungsarbeiten",
    description:
      "Entdecken Sie meine vielfältigen Entwicklungsprojekte mit detaillierten Beschreibungen, verwendeten Technologien und Live-Demos.",
    type: "website",
    locale: "de_DE",
    images: [
      {
        url: "/social/project.png", // Ersetze dies mit deinem tatsächlichen Bild-Pfad
        width: 1200,
        height: 630,
        alt: "Meine Projekte Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meine Projekte | Portfolio & Entwicklungsarbeiten",
    description:
      "Entdecken Sie meine vielfältigen Entwicklungsprojekte mit detaillierten Beschreibungen und verwendeten Technologien.",
    images: ["/social/project.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://itsvocs.com/project",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="py-24 sm:py-28 dark:bg-black">
      {children}
      <NewsLetter />
    </main>
  );
}
