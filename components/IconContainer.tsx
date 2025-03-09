"use client";
import React from "react";

import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import Image from "next/image";

export const IconContainer = ({
  src,
  text,
  delay,
}: {
  src: string;
  text: string;
  delay: number;
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      transition={{
        duration: 0.2,
        delay: delay ? delay : 0,
      }}
      className={twMerge(
        "relative z-50 flex flex-col items-center justify-center space-y-2"
      )}>
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl  shadow-inner">
        <Image
          src={src}
          alt={text}
          width={48}
          height={48}
          className="w-10 opacity-85"
        />
      </div>
      <div className="hidden rounded-md px-2 py-1 md:block">
        <div className="text-center text-xs font-bold text-foreground">
          {text || `Web Development`}
        </div>
      </div>
    </motion.div>
  );
};
