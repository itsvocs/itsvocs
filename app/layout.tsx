import "./globals.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import Header from "./components/base/Header";

// import { Analytics } from "./components/analytics";

export const metadata: Metadata = {
  title: {
    default: "Vocs Pouani",
    template: "%s - Vocs Pouani",
  },
  description:
    "Je m'appelle Vocs Pouani, je suis étudiant à l'université de Gießen, en Allemagne, où je poursuis des études en médecine informatique. Originaire du Cameroun, J'ai toujours été fasciné par les phénomènes innovants, en particulier dans le domaine informatique. Cependant, ma passion pour la médecine moderne, l'anatomie et le fonctionnement du corps humain a également grandement influencé mes choix d'études. Mon objectif de vie est de combiner ou de participer à la combinaison de ces deux domaines, l'informatique (notamment avec l'avènement de l'IA) et la médecine, afin de faciliter l'émancipation complète de l'Homme.",
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={[inter.variable, calSans.variable].join(" ")}>
      <body className="bg-black h-full">
        {/* <Analytics /> */}
        {children}
      </body>
    </html>
  );
}
