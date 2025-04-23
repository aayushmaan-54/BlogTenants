"use client";
import Icons from "@/icons/icons";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";


export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
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
    <button 
      onClick={toggleTheme} 
      aria-label="Toggle Theme" 
      title={`${theme}`}
      className="text-3xl cursor-pointer flex items-center justify-center"
    >
      {theme === "dark" ? (
        <Icons.MoonStar className="size-7" />
      ) : theme === "light" ? (
        <Icons.Sun className="size-8" />
      ) : (
        <Icons.MonitorCog className="size-7" />
      )}
    </button>
  );
}
