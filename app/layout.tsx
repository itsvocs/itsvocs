import type { Metadata } from "next";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Footer from "./ui/footer";
import { MainNav } from "./ui/nav/main-vav";
import { Outfit, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

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
  title: "Vocs Pouani - Persönliches Portfolio",
  description:
    "Entdecken Sie das persönliche Portfolio von Vocs Pouani mit Projekten, Fähigkeiten und beruflichen Erfahrungen.",
  keywords:
    "Vocs Pouani, Portfolio, Webentwicklung, Projekte, Fähigkeiten, berufliche Erfahrung",
  openGraph: {
    title: "Vocs Pouani - Persönliches Portfolio",
    description:
      "Entdecken Sie das persönliche Portfolio von Vocs Pouani mit Projekten, Fähigkeiten und beruflichen Erfahrungen.",
    url: "https://yourwebsite.com", // Ersetzen Sie durch die URL Ihrer Website
    type: "website",
    images: [
      {
        url: "https://yourwebsite.com/og-image.jpg", // Ersetzen Sie durch die URL Ihres Bildes
        width: 1200,
        height: 630,
        alt: "Vocs Pouani - Persönliches Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Ersetzen Sie durch Ihren Twitter-Handle
    title: "Vocs Pouani - Persönliches Portfolio",
    description:
      "Entdecken Sie das persönliche Portfolio von Vocs Pouani mit Projekten, Fähigkeiten und beruflichen Erfahrungen.",
    images: ["https://yourwebsite.com/og-image.jpg"], // Ersetzen Sie durch die URL Ihres Bildes
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
        <Analytics />
      </body>
    </html>
  );
}
