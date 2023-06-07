import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "./twitter.json"; // Remplacez le chemin par le chemin de votre fichier d'animation

const LottieAnimation: React.FC = () => {
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

  return <div ref={containerRef} className="w-7 h-7 text-indigo-500" />;
};

export default LottieAnimation;
