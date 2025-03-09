"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { NAVIGATIONS } from "@/lib/constants/constants";
import Logo from "@/app/icons/logo";
import { DownloadCV } from "../Download-CV";
import React from "react";
import { Button } from "@/components/ui/button";

export function MainNav({ className }: { className?: string }) {
  const [isScrolled, setIsScrolled] = useState(false);

  const [open, setOpen] = useState<boolean>(false);

  // Sticky Fonction

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full max-w-7xl  mx-auto">
      <div className="relative flex justify-center w-full overflow-hidden">
        <div
          className={cn(
            "flex items-center justify-between z-50 px-2 sm:px-4 md:px-8 transition-all duration-300 ease-in-out fixed w-full",
            isScrolled
              ? "backdrop-blur-xl py-2 md:py-3 translate-y-5 w-[95%] md:w-[78%] lg:w-2/3 "
              : "pt-9 translate-y-0 w-full",
            isScrolled && !open
              ? "rounded-full bg-foreground/15"
              : isScrolled && open
              ? "rounded-3xl rounded-br-none rounded-bl-none"
              : "",
            className
          )}>
          <Logo />
          <NavigationMenu className="md:flex hidden">
            <NavigationMenuList className="space-x-12 ">
              {NAVIGATIONS.map((link, index) => (
                <NavigationMenuItem className="bg-transparent" key={index}>
                  <Link href={link.link} legacyBehavior passHref>
                    <NavigationMenuLink className="px-2 text-sm transition-colors hover:text-muted-foreground text-foreground hidden sm:flex">
                      {link.name}
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-center space-x-2">
            <div className="hidden md:flex">
              <DownloadCV />
            </div>
            <Button
              className="group rounded-full md:hidden "
              variant="outline"
              size={"icon"}
              onClick={() => setOpen((prevState) => !prevState)}
              aria-expanded={open}
              aria-label={open ? "Close menu" : "Open menu"}>
              <svg
                className="pointer-events-none"
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M4 12L20 12"
                  className="origin-center -translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-x-0 group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[315deg]"
                />
                <path
                  d="M4 12H20"
                  className="origin-center transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.8)] group-aria-expanded:rotate-45"
                />
                <path
                  d="M4 12H20"
                  className="origin-center translate-y-[7px] transition-all duration-300 [transition-timing-function:cubic-bezier(.5,.85,.25,1.1)] group-aria-expanded:translate-y-0 group-aria-expanded:rotate-[135deg]"
                />
              </svg>
            </Button>
          </div>
        </div>

        <div
          className={cn(
            "w-full  h-dvh bg-background backdrop-blur z-40 fixed -translate-y-full transition-transform ease-in-out duration-500",
            open
              ? "translate-y-24 "
              : !open && isScrolled
              ? "w-[95%] md:w-[78%] lg:w-2/3 rounded-2xl"
              : "",
            isScrolled && open
              ? "translate-y-10  w-[95%] md:w-[78%] lg:w-2/3 rounded-2xl"
              : "",
            className
          )}>
          <nav className="flex flex-col space-y-8 justify-center items-center pt-40">
            {NAVIGATIONS.map((link, index) => (
              <Link
                href={link.link}
                className="px-2 transition-colors hover:text-foreground text-muted-foreground"
                key={index}>
                {link.name}
              </Link>
            ))}
            <div>
              <DownloadCV />
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}>
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
