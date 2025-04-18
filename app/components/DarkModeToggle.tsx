"use client";

import { useTheme } from "./ThemeContext";

export default function DarkModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className='flex gap-2 px-4 py-2 rounded-2xl bg-white dark:bg-black text-black dark:text-white shadow transition'
      onClick={toggleTheme}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌙 Dark Mode"}
    </button>
  );
}
