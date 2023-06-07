import Footer from "@/app/components/base/Footer";
import Header from "@/app/components/base/Header";
import Link from "next/link";
import React from "react";
import { SVG } from "../components/SvgTitel";

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden pt-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
            <h1 className="text-4xl font-black tracking-tight text-slate-50 sm:text-5xl">
              Politique de confidentialité
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Dernière mise à jour le 10 Juin 2023
            </p>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 ">
            <article className="mx-auto max-w-[40rem] typography prose-p:!text-sm/8 md:prose-p:!text-base/8">
              <p>
                Nous accordons une grande importance à la confidentialité de nos
                utilisateurs et à la protection de leurs informations
                personnelles. Cette politique de confidentialité explique
                comment nous collectons, utilisons, partageons et protégeons les
                informations personnelles que nous recueillons lorsque vous
                utilisez notre blog <strong>itsvocs</strong> (Vocs Pouani).{" "}
                <br /> La politique décrit également les choix qui s'offrent à
                vous concernant notre utilisation de vos informations
                personnelles et comment vous pouvez accéder à ces informations
                et les mettre à jour.
              </p>
              <p>
                En utilisant notre site et/ou notre blog <strong>itvocs</strong>
                , vous consentez à la collecte et à l'utilisation de vos
                informations personnelles conformément à cette politique de
                confidentialité.
                <strong>
                  Si vous n'êtes pas d'accord avec les termes de cette
                  politique,
                </strong>
                veuillez ne pas utiliser notre site et/ou notre blog.
              </p>

              <h2 id="information">
                <SVG /> Collecte d'informations{" "}
              </h2>

              <p>
                Nous collectons certaines informations personnelles lorsque vous
                vous inscrivez à notre newsletter, laissez des commentaires sur
                nos articles ou interagissez avec notre site et/ou notre blog.
                Les informations collectées peuvent inclure votre{" "}
                <strong>nom</strong>, votre <strong>adresse e-mail</strong> et
                toute autre information que vous choisissez de nous fournir.
              </p>
              <h2>
                {" "}
                <SVG /> Utilisation des informations
              </h2>
              <p>
                Nous utilisons les informations personnelles que nous collectons
                pour vous fournir des informations, des mises à jour et des
                notifications sur notre <Link href="/blog">blog</Link>, y
                compris l'envoi de newsletters si vous vous êtes abonné(e) à
                notre liste de diffusion. Nous pouvons également utiliser vos
                informations pour améliorer notre blog, personnaliser votre
                expérience utilisateur et répondre à vos demandes.
              </p>
              <h2>
                <SVG /> Partage des informations
              </h2>
              <p>
                Nous ne vendons, ne louons ni ne partageons vos informations
                personnelles avec des tiers, sauf dans les cas suivants :
              </p>
              <ul>
                <li>
                  <strong>Lorsque nous avons votre consentement</strong>
                </li>
                <li>
                  <strong>
                    Lorsque cela est nécessaire pour fournir les services que
                    vous avez demandés
                  </strong>
                </li>
                <li>
                  <strong>Lorsque la loi l'exige</strong>
                </li>
                <li>
                  <strong>
                    Lorsque cela est nécessaire pour protéger nos droits ou la
                    sécurité de nos utilisateurs.
                  </strong>
                </li>
              </ul>
              <h2>
                <SVG /> Cookies
              </h2>
              <p>
                Nous utilisons des cookies sur notre blog pour collecter des
                informations et améliorer votre expérience utilisateur. Les
                cookies sont de petits fichiers texte stockés sur votre appareil
                qui nous permettent de reconnaître votre navigateur et de
                mémoriser certaines informations. Vous pouvez modifier les
                paramètres de votre navigateur pour désactiver les cookies, mais
                cela peut affecter certaines fonctionnalités de notre blog.
              </p>
              <h2>
                <SVG /> Sécurité des données
              </h2>
              <p>
                Nous mettons en place{" "}
                <em className="underline">des mesures de sécurité</em> pour
                protéger vos informations personnelles contre tout accès non
                autorisé, toute divulgation, toute utilisation abusive ou toute
                altération. Cependant, veuillez noter qu'aucune méthode de
                transmission sur Internet ou de stockage électronique n'est
                totalement sécurisée, et nous ne pouvons garantir la sécurité
                absolue de vos informations.
              </p>
              <h2>
                <SVG /> Liens vers des sites tiers
              </h2>
              <p>
                Notre blog peut contenir des liens vers des sites tiers. Nous ne
                sommes pas responsables des pratiques de confidentialité de ces
                sites et vous encourageons à lire les politiques de
                confidentialité de ces sites lorsque vous les visitez.
              </p>
              <h2>
                <SVG /> Modifications de la politique de confidentialité
              </h2>
              <p>
                Nous pouvons mettre à jour cette politique de confidentialité de
                temps à autre en publiant une version mise à jour sur notre
                blog. Il est de votre responsabilité de consulter régulièrement
                cette politique pour prendre connaissance des éventuelles
                modifications. Votre utilisation continue de notre blog après la
                publication des modifications constitue votre acceptation de ces
                modifications.
              </p>
              <h2>
                {" "}
                <SVG />
                Politique de Conditions d'utilisation de l'espace de commentaire
                et chat
              </h2>
              <p>
                Cette politique de confidentialité fait partie intégrante de nos{" "}
                <Link href="/terms-conditions">
                  <strong>Conditions d'utilisation.</strong>
                </Link>
                , que vous prenez en compte et acceptez en utilisant notre site
                / blog
              </p>

              <h2>
                <SVG /> Acceptation de cette politique
              </h2>
              <p>
                Vous reconnaissez que vous avez lu cette politique et acceptez
                tous ses termes et conditions. En utilisant le site / blog, vous
                acceptez d'être lié par cette politique. Si vous n'acceptez pas
                de respecter les termes de cette politique, vous n'êtes pas
                autorisé à utiliser ou à accéder au site Web.
              </p>
              <h2>
                <SVG /> Nous contacter{" "}
              </h2>
              <p>
                Si vous avez des questions ou des préoccupations concernant
                notre politique de confidentialité, veuillez nous contacter à{" "}
                <Link href={`mailto:${process.env.EMAIL_ADRESS}`}>
                  {process.env.EMAIL_ADRESS}.
                </Link>
              </p>
            </article>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
