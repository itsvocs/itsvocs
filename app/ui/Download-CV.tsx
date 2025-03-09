"use client";
import React from "react";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";

export function DownloadCV() {
  return (
    <div className=" flex justify-center text-center">
      <HoverBorderGradient
        containerClassName="rounded-full"
        as="button"
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/vocs-pouani.pdf"; // Assurez-vous que ce fichier existe dans votre dossier public
          link.download = "Vocs_Pouani_Lebenslauf.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }}
        className="dark:bg-black bg-white text-black dark:text-white text-sm">
        Lebenslauf herunterladen
      </HoverBorderGradient>
    </div>
  );
}
