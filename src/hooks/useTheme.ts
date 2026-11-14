import {useCallback, useEffect, useState} from "react";

export type Theme = "light" | "dark";

const STORAGE_KEY = "theme";

function readInitialTheme(): Theme {
  // index.html sets this attribute before first paint.
  return document.documentElement.dataset.theme === "dark" ? "dark" : "light";
}

/** Light/dark theme, saved per browser and applied to <html data-theme>. */
export function useTheme(): {theme: Theme; toggleTheme: () => void} {
  const [theme, setTheme] = useState<Theme>(readInitialTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme(current => {
      const next: Theme = current === "dark" ? "light" : "dark";
      try {
        localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // Storage can be unavailable (private mode); the toggle still works.
      }
      return next;
    });
  }, []);

  return {theme, toggleTheme};
}
