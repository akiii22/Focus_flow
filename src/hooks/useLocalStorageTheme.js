import { useEffect } from "react";

const THEME_KEY = "theme";

export const useLocalStorageTheme = (theme) => {
  useEffect(() => {
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);
};

export const loadInitialTheme = () => {
  return localStorage.getItem(THEME_KEY) || "light";
};
