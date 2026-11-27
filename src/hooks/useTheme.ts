import { useCallback, useEffect, useState } from "react";

export type Theme = "dark" | "light";

const readTheme = (): Theme =>
  document.documentElement.dataset.theme === "light" ? "light" : "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(readTheme);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute("content", theme === "dark" ? "#0c0d0e" : "#f6f7f3");
    try {
      localStorage.setItem("theme", theme);
    } catch {
      /* storage can be unavailable (private mode); the theme still applies for this visit */
    }
  }, [theme]);

  const toggle = useCallback(() => setTheme((t) => (t === "dark" ? "light" : "dark")), []);
  return { theme, toggle };
}
