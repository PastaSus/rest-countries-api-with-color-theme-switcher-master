// src/context/ThemeProvider.jsx
import { useState } from "react";
import { ThemeContext } from "./ThemeContext"; // <- Import the Context object

export function ThemeProvider({ children }) {
  // ... (state and toggleDarkMode function are correct) ...

  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      return document.documentElement.classList.contains("dark");
    }
    return false;
  });

  const toggleDarkMode = () => {
    const root = document.documentElement;
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
      return newMode;
    });
  };

  const value = { darkMode, toggleDarkMode };

  // 🟢 FIXED: Use ThemeContext.Provider
  return <ThemeContext value={value}>{children}</ThemeContext>;
}
