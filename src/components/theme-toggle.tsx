"use client";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";


export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;


  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };


  return (
    <button onClick={toggleTheme} aria-label="Toggle Theme" title={`${theme}`}>
      {theme === "dark" ? (
        "🌙"
      ) : theme === "light" ? (
        "🌞"
      ) : (
        `🖥️`
      )}
    </button>
  );
}
