"use client";
import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import animationData from "./loading.json";

const Loading: React.FC = () => {
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

  return <div ref={containerRef} className="w-10 h-10" />;
};

export default Loading;
