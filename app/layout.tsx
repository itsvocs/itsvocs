import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./ui/footer";
import { MainNav } from "./ui/nav/main-vav";
import { Outfit, Inter } from "next/font/google";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const fontHeading = Outfit({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Vocs Pouani | Web Developer & Designer Portfolio",
  description:
    "Professionelles Portfolio von Vocs Pouani - Webentwickler, Designer und Softwareentwickler mit Expertise in React, Next.js und modernen Webtechnologien.",
  keywords:
    "Vocs Pouani, Webentwicklung, Frontend, React, Next.js, Portfolio, Designer, Softwareentwickler, Swift, Medizinische Informatiker Giessen ",
  authors: [{ name: "Vocs Pouani" }],
  creator: "Vocs Pouani",
  publisher: "Vocs Pouani",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://itsvocs.com", // Ersetze dies mit deiner tatsächlichen URL
    title: "Vocs Pouani | Web Developer & Designer Portfolio",
    description:
      "Professionelles Portfolio von Vocs Pouani - Webentwickler, Designer und Softwareentwickler mit Expertise in React, Next.js und modernen Webtechnologien.",
    siteName: "Vocs Pouani Portfolio",
    images: [
      {
        url: "/social/website.png", // Ersetze mit dem Pfad zu deinem OG-Bild
        width: 1200,
        height: 630,
        alt: "Vocs Pouani Portfolio Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vocs Pouani | Web Developer & Designer Portfolio",
    description:
      "Professionelles Portfolio von Vocs Pouani - Webentwickler, Designer und Softwareentwickler",
    images: ["/social/website.png"], // Ersetze mit dem Pfad zu deinem Twitter-Bild
  },
  alternates: {
    canonical: "https://itsvocs.com", // Ersetze mit deiner Haupt-URL
    languages: {
      de: "https://itsvocs.com/de",
      en: "https://itsvocs.com/en",
      fr: "https://itsvocs.com/fr",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontHeading.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <MainNav />
          <main className="">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
