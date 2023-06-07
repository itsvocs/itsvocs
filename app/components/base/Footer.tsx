import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";
import { HiRss } from "react-icons/hi2";

function Footer() {
  return (
    <footer>
      <div className="mx-auto mt-32 w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="border-t border-slate-50/10 py-10">
          <span className="flex mx-auto w-full justify-center items-center">
            <Image
              src="/image.png"
              alt="logo du site"
              className=" h-6 w-auto text-slate-900"
              width={500}
              height={500}
            />{" "}
            <span className="font-black text-white text-xl ml-px pt-px">
              itsvocs
            </span>
          </span>
          <p className="mt-5 text-center text-sm leading-6 text-gray-400">
            Copyright © 2023 Vocs Pouani.
          </p>
          <div className="my-8 flex items-center justify-center space-x-4 text-xs sm:text-sm  leading-6 text-gray-400">
            <Link
              href="/privacy-policy"
              className="hover:text-gray-100/90 transition-colors">
              Politique de confidentialité
            </Link>
            <div className="h-4 w-px bg-gray-300/20"></div>
            <Link
              href="/terms-conditions"
              className="hover:text-gray-100/90 transition-colors">
              Conditions Générales d'Utilisation
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-8 text-lg text-gray-500">
            <Link target="_blank" href="https://www.youtube.com/@itsvocs">
              <FaYoutube className="hover:text-slate-50 transition-colors" />
            </Link>
            <Link target="_blank" href="https://www.github.com/itsvocs">
              <FaGithub className="hover:text-slate-50 transition-colors" />
            </Link>
            <Link target="_blank" href="https://www.twitter.com/itsvocs">
              <FaTwitter className="hover:text-slate-50 transition-colors" />
            </Link>
            <Link target="_blank" href="http://localhost:3000/rss.xml">
              <HiRss className="hover:text-slate-50 transition-colors" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
