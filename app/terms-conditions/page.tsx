import Footer from "@/app/components/base/Footer";
import Header from "@/app/components/base/Header";
import Link from "next/link";
import React from "react";
import { SVG } from "../components/SvgTitel";

function TermsConditions() {
  return (
    <>
      <Header />
      <div className="relative overflow-hidden pt-24">
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="relative mx-auto max-w-[37.5rem] pt-20 text-center pb-24">
            <h1 className="text-4xl font-black tracking-tight text-slate-50 sm:text-5xl">
              Conditions Générales d'Utilisation
            </h1>
            <p className="mt-4 text-base leading-7 text-slate-400">
              Dernière mise à jour le 10 Juin 2023
            </p>
          </div>
          <div className="relative px-4 sm:px-6 lg:px-8 ">
            <article className="mx-auto max-w-[40rem] typography prose-p:!text-sm/8 md:prose-p:!text-base/8 ">
              <h2>
                <SVG /> Definition{" "}
              </h2>
              <p>
                Les Parties conviennent et acceptent que les termes suivants
                utilisés avec une majuscule, au singulier et/ou au pluriel,
                auront, dans le cadre des présentes Conditions Générales
                d'Utilisation, la signification définie ci-après :
              </p>
              <ul>
                <li>
                  {" "}
                  <strong> « Plateforme » </strong> : plateforme numérique de
                  type site Web et/ou application mobile permettant l'accès au
                  Service ainsi que son utilisation{" "}
                </li>
                <li>
                  {" "}
                  <strong>« Site » </strong>: le site itsvocs.com, ces sous
                  ensembles et toutes ses pages{" "}
                </li>
                <li>
                  <strong>« Blog » </strong> Le blog itsvocs, son contenu{" "}
                </li>
                <li>
                  <strong>« Utilisateur » </strong>: désigne toute personne qui
                  utilise la Plateforme, qu'elle soit un Visiteur ou un Membre ;
                </li>
                <li>
                  <strong>« Visiteur »:</strong> désigne toute personne,
                  internaute, naviguant sur la Plateforme sans création de
                  compte associé.
                </li>
                <li>
                  {" "}
                  <strong>« Vous »</strong>: designant tous visiteurs
                </li>
              </ul>
              <p>
                Bienvenue sur le Site ! Nous vous invitons à lire{" "}
                <strong>attentivement</strong> les conditions d'utilisation
                générale ainsi que les conditions spécifiques relatives à
                l'utilisation de l'espace de commentaire et chat. En utilisant
                notre site et/ou notre blog <strong>itvocs</strong>, et en
                participant à l'espace <strong>de commentaire et chat</strong>,
                vous acceptez de vous conformer à ces conditions. Si vous
                n'acceptez pas ces conditions, veuillez{" "}
                <strong>
                  ne pas utiliser notre site et/ou notre blog ni participer à
                  l'espace de commentaire et de chat
                </strong>
                .
              </p>

              <p></p>
              <h2>
                <SVG /> Propriété intellectuelle{" "}
              </h2>

              <ol>
                <li>
                  Tout le contenu présenté sur site et/ou le blog, y compris{" "}
                  <strong>
                    les articles, les images, les vidéos, les graphiques, les
                    logos et autres éléments
                  </strong>
                  , est protégé par des droits d'auteur et d'autres lois sur{" "}
                  <Link href="https://www.juraforum.de/lexikon/geistiges-eigentum">
                    la propriété intellectuelle
                  </Link>
                  <em>(Deutsch)</em>.
                </li>
                <li>
                  Vous reconnaissez que tous les droits de propriété
                  intellectuelle associés au contenu du site et/ou blog nous
                  appartiennent ou sont licenciés pour notre utilisation. Vous
                  acceptez de ne pas utiliser, reproduire, modifier ou
                  distribuer ce contenu sans notre autorisation préalable.
                </li>
              </ol>
              <h2>
                <SVG /> Utilisation autorisée
              </h2>
              <ol>
                <li>
                  Vous pouvez accéder et utiliser notre blog à des fins
                  personnelles et non commerciales.
                </li>
                <li>
                  Vous acceptez de ne pas utiliser notre blog de manière
                  illégale, abusive, menaçante, diffamatoire, obscène,
                  frauduleuse ou contraire à l'éthique.
                </li>
              </ol>
              <h2>
                <SVG /> Exactitude du contenu{" "}
              </h2>
              <ul>
                <li>
                  Nous nous efforçons de fournir des informations exactes et à
                  jour sur notre blog, mais nous ne garantissons pas
                  l'exactitude, l'exhaustivité ou la pertinence du contenu.
                </li>
                <li>
                  Vous reconnaissez que l'utilisation du contenu du blog se fait
                  à vos propres risques et que nous ne serons pas tenus
                  responsables des erreurs, omissions ou inexactitudes du
                  contenu.
                </li>
              </ul>
              <h2>
                <SVG /> Liens vers des sites tiers :
              </h2>
              <ol>
                <li>
                  Notre site ou blog peut contenir des liens vers des sites web
                  tiers. Ces liens sont fournis à titre informatif et nous
                  n'avons aucun contrôle sur le contenu ou les politiques de
                  confidentialité de ces sites.
                </li>{" "}
                <li>
                  {" "}
                  Nous ne sommes pas responsables du contenu, des pratiques ou
                  des politiques de confidentialité des sites tiers liés à
                  partir de notre blog. Nous vous encourageons à lire les
                  conditions d'utilisation et les politiques de confidentialité
                  de ces sites tiers avant de les utiliser.
                </li>
              </ol>

              <h2>
                <SVG /> Responsabilité
              </h2>
              <ul>
                <li>
                  Nous ne serons pas tenus responsables des dommages{" "}
                  <strong>
                    directs, indirects, accessoires, spéciaux ou consécutifs
                  </strong>{" "}
                  découlant de l'utilisation de notre site ou blog.
                </li>
                <li>
                  Nous ne garantissons pas l'absence d'interruptions, d'erreurs,
                  de virus ou d'autres problèmes techniques pouvant affecter la
                  disponibilité ou le fonctionnement du blog.
                </li>
              </ul>
              <h2 id="comment&chat">
                <SVG /> Commentaires et interactions{" "}
              </h2>
              <ol>
                <li>
                  Notre blog peut permettre aux utilisateurs(
                  <strong>toute personne visitant le site/blog</strong>) de
                  publier des commentaires et de participer à des discussions.
                  <ul>
                    <li>
                      Vous êtes entièrement responsable de tout contenu que vous
                      publiez dans l'espace de commentaire et chat. N'oubliez
                      pas que ce contenu peut être visible par d'autres
                      utilisateurs. Vous acceptez de ne pas publier des propos{" "}
                      <strong>
                        offensants, diffamatoires, discriminatoires, obscènes ou
                        toute autre forme de langage inapproprié.
                      </strong>
                    </li>
                    <li>
                      Nous nous réservons le droit de modérer et de supprimer
                      tout commentaire ou contenu qui enfreint nos conditions
                      d'utilisation. Nous nous efforçons de maintenir un
                      environnement sûr et respectueux, mais nous ne pouvons pas
                      garantir la suppression immédiate de tout contenu
                      inapproprié. Si vous rencontrez un contenu offensant,
                      veuillez nous le signaler.
                    </li>
                    <li>
                      Vous êtes responsable du contenu que vous publiez et vous
                      acceptez de nous{" "}
                      <strong>indemniser contre toute réclamation liée</strong>{" "}
                      à votre contenu.
                    </li>
                  </ul>
                </li>
                <li>
                  Nous encourageons les utilisateurs à interagir avec respect,
                  tolérance et courtoisie envers les autres participants.
                  Respectez les opinions et les droits des autres utilisateurs,
                  même si vous êtes en désaccord.
                </li>
                <li>
                  <strong> Confidentialité et sécurité :</strong> Ne partagez
                  pas d'informations personnelles sensibles dans l'espace de
                  commentaire et chat. Nous ne sommes pas responsables de la
                  confidentialité de ces informations si vous les partagez
                  volontairement ou involontairement. Utilisez l'espace de
                  commentaire et chat de manière responsable et protégez votre
                  vie privée.
                </li>
                <li>
                  Suspension ou exclusion : En cas de violation répétée ou grave
                  de nos conditions d'utilisation, nous nous réservons le droit
                  de suspendre temporairement ou de vous exclure définitivement
                  de l'espace de commentaire et chat.
                </li>
              </ol>

              <h2>
                <SVG /> Confidentialité{" "}
              </h2>
              <p>
                Votre vie privée est importante pour nous. Veuillez consulter{" "}
                <Link href="/privacy-policy">
                  notre politique de confidentialité{" "}
                </Link>{" "}
                pour en savoir plus sur la collecte, l'utilisation et la
                protection de vos données personnelles lors de votre utilisation
                de notre site/blog.
              </p>

              <h2>
                <SVG /> Modifications des conditions{" "}
              </h2>
              <p>
                Nous nous réservons le droit de modifier ces conditions
                d'utilisation à tout moment. Les modifications prendront effet
                dès leur publication sur le site/blog. Nous vous encourageons à
                consulter régulièrement cette page pour vous tenir informé des
                éventuelles mises à jour de vous inscrire à notre{" "}
                <Link href="/about/me">liste de diffusion </Link> pour être
                notifié dès la sortie celle ci.
              </p>
              <h2>
                <SVG /> Résiliation
              </h2>
              <p>
                Nous nous réservons le droit de résilier ou de restreindre votre
                accès au blog à tout moment, sans préavis, en cas de non-respect
                des conditions d'utilisation.
              </p>
              <p>
                Vous reconnaissez que vous avez lu cette politique et acceptez
                tous ses termes et conditions. En utilisant le site / blog, vous
                acceptez d'être lié par cette politique. Si vous n'acceptez pas
                de respecter les termes de cette politique, vous n'êtes pas
                autorisé à utiliser ou à accéder au site / blog.
              </p>
              <p>
                Nous vous remercions de respecter ces{" "}
                <strong className="underline">conditions d'utilisation</strong>{" "}
                et de contribuer à maintenir un environnement respectueux et sûr
                sur notre site / blog. Si vous avez des questions ou des
                préoccupations concernant ces conditions, veuillez nous
                contacter.
              </p>
              <h2>
                <SVG /> Nous contacter{" "}
              </h2>
              <p>
                Si vous avez des questions ou des préoccupations concernant nos
                conditions d'utilisations, veuillez nous contacter à{" "}
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

export default TermsConditions;
