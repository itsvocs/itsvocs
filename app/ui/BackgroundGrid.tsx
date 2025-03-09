import React from "react";
//  Devrait etre combine avec un div d'un height
export default function BackgroundGrid() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_70%,black)]"></div>
  );
}
