"use client";
import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "./heart.json"; // Remplacez le chemin par le chemin de votre fichier d'animation

const HeartMini: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  let anim: AnimationItem | null = null;

  useEffect(() => {
    if (containerRef.current) {
      anim = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });
    }

    return () => {
      if (anim) {
        anim.destroy();
        anim = null;
      }
    };
  }, []);

  return <div ref={containerRef} className="w-10 h-10 " />;
};

export default HeartMini;
