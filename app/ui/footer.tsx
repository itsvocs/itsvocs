"use client";

import Link from "next/link";
import { SOCIAL } from "@/lib/constants/constants";
import SwitchThemeComponent from "@/components/SwitchTheme";
export default function Footer() {
  return (
    <div className="overflow-x-hidden">
      <div className="mx-auto w-full max-w-7xl px-8">
        <footer className="relative mt-16 py-8 before:absolute before:-inset-x-32 before:top-0 before:h-px before:bg-[linear-gradient(to_right,theme(colors.border/.3),theme(colors.border)_200px,theme(colors.border)_calc(100%-200px),theme(colors.border/.3))] md:mt-20">
          <div
            className="before:absolute before:-left-12 before:-top-px before:z-10 before:-ml-px before:size-[3px] before:bg-ring after:absolute after:-right-12 after:-top-px after:z-10 after:-mr-px after:size-[3px] after:bg-ring"
            aria-hidden="true"></div>
          <div className="flex justify-between gap-2  my-4">
            <div className="flex flex-col sm:flex-row items-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} All right reserved
              </p>
              <span className="w-0.5 h-0.5 bg-muted-foreground mx-3 rounded-full hidden sm:flex"></span>
              <p className="text-sm text-muted-foreground">
                Erstellt von{" "}
                <a
                  className="font-medium text-foreground underline decoration-border underline-offset-4 hover:no-underline"
                  href="https://x.com/itsvocs"
                  target="_blank"
                  rel="noopener noreferrer">
                  Vocs Pouani
                </a>
                .
              </p>
            </div>
            <SwitchThemeComponent />
          </div>
          <div className="flex items-center justify-center w-full mt-8">
            <Component />
          </div>
        </footer>
      </div>
    </div>
  );
}

function Component() {
  return (
    <div className="flex ">
      <div className="flex space-x-8 items-center">
        {SOCIAL.map((i, j) => (
          <div key={j} className="relative">
            <Link
              href={i.link}
              className="inline-flex font-medium gap-0.5 text-sm hover:underline text-muted-foreground hover:text-foreground">
              <span className="absolute inset-0" />
              {i.name}
            </Link>
            <span className="inline absolute -right-5 -top-px">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                fill="currentColor"
                aria-hidden="true"
                className="text-muted-foreground/80">
                <path d="M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"></path>
              </svg>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
