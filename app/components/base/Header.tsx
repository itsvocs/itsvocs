/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { FaTwitter } from "react-icons/fa";
import { useScrollPosition } from "@/util/useScrollPosition";
import Image from "next/image";
import LottieAnimation from "../lottie/Twitter";

const sections = [
  {
    name: "À propos",
    link: "/about/me",
  },
  {
    name: "Blog",
    link: "/blog",
  },
  {
    name: "Contact",
    link: "/contact",
  },
  {
    name: "Mes liens ",
    link: "/about/social",
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollPosition = useScrollPosition();

  return (
    <header
      className={`w-full animate-fade- top-0 z-50 transition-transform  ${
        scrollPosition > 100
          ? "sticky bg-black/75 backdrop-blur-sm shadow-lg shadow-indigo-950/10"
          : "fixed bg-transparent"
      }`}>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 py-3 lg:px-8"
        aria-label="Global">
        <Link href="/" className="flex sm:flex-1 items-center text-white">
          <Image
            src="/image.png"
            alt="logo du site"
            className="inline-block w-8 pt-1"
            width={500}
            height={500}
          />
          <span className="sr-only">vocs pouani</span>
        </Link>
        <div className="flex sm:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-200"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">Open main menu</span>
            <Bars2Icon className="h-6 w-6 stroke-1" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden sm:flex sm:gap-x-12">
          {sections.map((i) => (
            <Link
              key={i.name}
              href={i.link}
              className="px-2 text-sm text-slate-200 transition-colors hover:text-indigo-400 gap-x-2">
              <span className="self-baseline"> {i.name}</span>
            </Link>
          ))}
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:justify-end">
          <a
            href="https://www.twitter.com/itsvocs"
            target="_blank"
            className="text-xl duration-500 ease-in-out text-gray-200  hover:text-indigo-400">
            <LottieAnimation />
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="sm:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-[60] w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 bg-black">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">vocs pouani</span>
              <Image
                src="/image.png"
                alt="logo du site"
                className="inline-block w-9 hover:text-indigo-400 pt-1"
                width={500}
                height={500}
              />
            </Link>

            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-slate-300 hover:text-slate-50"
              onClick={() => setMobileMenuOpen(false)}>
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-slate-200/50 text-slate-200">
              <div className="space-y-2 py-6">
                {sections.map((i) => (
                  <Link
                    key={i.name}
                    href={i.link}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base  leading-7 hover:text-indigo-300">
                    {i.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <a
                  href="https://www.twitter.com/itsvocs"
                  className="text-xl duration-500 ease-in-out text-gray-200  hover:text-indigo-400">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
