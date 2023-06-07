"use client";
import React from "react";
import Link from "next/link";
import { Card } from "@/app/components/utils/card";
import { FiGithub, FiInstagram, FiMail } from "react-icons/fi";
import { FaTwitch, FaTwitter, FaYoutube } from "react-icons/fa";

const socials = [
  {
    icon: <FaYoutube className="" />,
    href: "https://youtube.com/@itsvocs",
    label: "youtube",
    handle: "Itsvocs Dev",
  },
  {
    icon: <FiGithub className="" />,
    href: "https://github.com/itsvocs",
    label: "github",
    handle: "@itsvocs",
  },
  {
    icon: <FaTwitch className="" />,
    href: "https://twitch.tv/itsvocs",
    label: "twitch",
    handle: "@itsvocs",
  },
  {
    icon: <FaTwitter className="" />,
    href: "https://twitter.com/itsvocs",
    label: "twitter",
    handle: "@itsvocs",
  },
  {
    icon: <FiInstagram className="" />,
    href: "https://www.instagram.com/itsvocs/",
    label: "instagram",
    handle: "@itsvocs",
  },

  {
    icon: <FiMail className="" />,
    href: "mailto:pouanivocs@gmail.com",
    label: "email",
    handle: "pouanivocs@gmail.com",
  },
];

export default function SocialPage() {
  return (
    <div>
      <div className="bg-gradient-to-tl from-black/0 via-black to-gray-950">
        <div className="container flex items-center justify-center min-h-screen px-4 mx-auto pt-44">
          <div className="grid w-full grid-cols-1 gap-8 mx-auto mt-32 sm:mt-0 sm:grid-cols-3 lg:gap-16">
            {socials.map((s) => (
              <Card key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  className="p-4 relative flex flex-col items-center gap-4 duration-700 group md:gap-8 md:py-24  lg:pb-48  md:p-16">
                  <span
                    className={`absolute w-px h-2/3 bg-gradient-to-b to-transparent ${
                      s.label === "youtube"
                        ? " from-red-500 via-pink-400"
                        : s.label === "github"
                        ? " from-gray-500 via-indigo-200 "
                        : s.label === "twitch"
                        ? " from-purple-500 via-purple-200"
                        : s.label === "twitter"
                        ? " from-blue-400 via-blue-300"
                        : s.label === "instagram"
                        ? " from-amber-500 via-rose-500/50"
                        : " from-gray-200 via-zinc-50"
                    }`}
                    aria-hidden="true"
                  />
                  <span
                    className={`relative z-10 text-2xl flex items-center justify-center w-12 h-12 duration-1000 border rounded-full drop-shadow-orange ${
                      s.label === "youtube"
                        ? " text-red-600 bg-gray-50 border-gray-500 group-hover:border-gray-200"
                        : s.label === "github"
                        ? "text-gray-900 border-slate-50 bg-slate-50"
                        : s.label === "twitch"
                        ? " text-purple-600  border-slate-50 bg-slate-50"
                        : s.label === "twitter"
                        ? "  text-blue-400 border-blue-100 bg-slate-50 "
                        : s.label === "instagram"
                        ? "text-white bg-gradient-to-r  from-amber-500 to-pink-400 border-amber-500 "
                        : " bg-slate-50"
                    }`}>
                    {s.icon}
                  </span>{" "}
                  <div className="z-10 flex flex-col items-center">
                    <span className="text-xl font-medium duration-150 lg:text-3xl text-gray-200 group-hover:text-white font-display">
                      {s.handle}
                    </span>
                    <span className="mt-4 text-sm text-center duration-1000 capitalize text-gray-400 group-hover:text-gray-200">
                      {s.label}
                    </span>
                  </div>
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
