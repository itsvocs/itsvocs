"use client";
import React from "react";
import { twMerge } from "tailwind-merge";
import { motion, MotionProps } from "framer-motion";

// Définition des propriétés pour le composant Circle
interface CircleProps extends MotionProps {
  className?: string;
  idx: number;
}

// Composant Circle avec typage amélioré
const Circle: React.FC<CircleProps> = ({ className, idx, ...rest }) => {
  return (
    <motion.div
      {...rest}
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.5 }}
      transition={{ delay: idx * 0.1, duration: 0.2 }}
      className={twMerge(
        "absolute inset-0 left-1/2 top-1/2 h-10 w-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full border",
        className
      )}
    />
  );
};

// Définition des propriétés pour le composant Radar
interface RadarProps {
  className?: string;
}

// Composant Radar avec typage amélioré
const Radar: React.FC<RadarProps> = ({ className }) => {
  const circles = Array.from({ length: 9 }, (_, idx) => idx + 1);
  return (
    <div
      className={twMerge(
        "relative flex h-20 w-20 items-center justify-center rounded-full",
        className
      )}>
      <div
        style={{ transformOrigin: "right center" }}
        className="absolute right-1/2 top-1/2 z-40 flex h-[5px] w-[400px] items-end justify-center overflow-hidden bg-transparent animate-radar-spin">
        {/* Ligne radar rotative */}
        <div className="relative z-40 h-[1px] w-full bg-gradient-to-r from-muted/10 border-slate-400 via-indigo-500/35 to-muted/10" />
      </div>
      {/* Cercles concentriques */}
      {circles.map((_, idx) => (
        <Circle
          key={`circle-${idx}`}
          idx={idx}
          style={{
            height: `${(idx + 1) * 5}rem`,
            width: `${(idx + 1) * 5}rem`,
            border: "1px solid rgba(148, 163, 184, 0.6)",
            opacity: 0.5,
          }}
        />
      ))}
    </div>
  );
};

export { Radar, Circle };
