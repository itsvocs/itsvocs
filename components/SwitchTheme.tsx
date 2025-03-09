"use client";

import { Switch } from "@/components/ui/switch";
import { useId, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, SunDim } from "@phosphor-icons/react";

export default function SwitchThemeComponent() {
  const id = useId();
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Montage côté client uniquement et synchronisation avec le thème du système
  useEffect(() => {
    setMounted(true);
    // Initialiser avec le thème résolu (qui prend en compte la préférence système)
    if (resolvedTheme) {
      setIsDarkMode(resolvedTheme === "dark");
    }
  }, [resolvedTheme]);

  // Gestion du changement de thème
  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    setTheme(newMode ? "dark" : "light");
  };

  // Éviter le rendu hydration mismatch
  if (!mounted) {
    return null;
  }

  return (
    <div
      className="group inline-flex items-center gap-2"
      data-state={isDarkMode ? "checked" : "unchecked"}>
      <span
        id={`${id}-off`}
        className="group-data-[state=checked]:text-muted-foreground/70 flex-1 cursor-pointer text-right text-sm font-medium"
        aria-controls={id}
        onClick={() => {
          setIsDarkMode(false);
          setTheme("light");
        }}>
        <SunDim size={20} weight="bold" aria-hidden="true" />
      </span>
      <Switch
        id={id}
        checked={isDarkMode}
        onCheckedChange={toggleTheme}
        aria-labelledby={`${id}-off ${id}-on`}
        aria-label="Toggle between dark and light mode"
      />
      <span
        id={`${id}-on`}
        className="group-data-[state=unchecked]:text-muted-foreground/70 flex-1 cursor-pointer text-left text-sm font-medium"
        aria-controls={id}
        onClick={() => {
          setIsDarkMode(true);
          setTheme("dark");
        }}>
        <Moon weight="bold" size={18} aria-hidden="true" />
      </span>
    </div>
  );
}
