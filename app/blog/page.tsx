import { Metadata } from "next";
import getPostMetadata from "@/util/getPostMetadata";
import PostPreview from "@/app/components/utils/PostPreview";
import Header from "@/app/components/base/Header";
import Footer from "../components/base/Footer";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Découvrez notre blog et plongez dans un monde d'articles captivants et d'informations précieuses. Notre blog offre un contenu varié couvrant des sujets passionnants, allant de conseils pratiques à des analyses approfondies. Restez à jour avec les dernières tendances, obtenez des conseils d'experts et explorez des idées inspirantes. Rejoignez notre communauté de lecteurs passionnés et enrichissez vos connaissances grâce à notre blog. Ne manquez pas cette source inépuisable d'apprentissage et d'inspiration !",
};
export default function Blog() {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
  return (
    <>
      <Header />
      <div className="py-24 sm:py-32 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="!text-5xl font-display font-black tracking-tight text-slate-50 sm:text-5xl">
              Blog
            </h2>
            <p className="mt-4 leading-8 text-slate-200">
              Toutes mes pensées longues sur la programmation, le medecine, la
              conception de produits, L&#39;IA et plus, recueillies dans l’ordre
              chronologique.
            </p>
          </div>
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {postPreviews}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
