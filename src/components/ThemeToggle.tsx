"use client";

import { useTheme } from "./Provider";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "light" ? <Moon size={20} color="black"/> : <Sun size={20} color="white"/>}
    </button>
  );
}
